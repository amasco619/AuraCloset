import type { Request, Response } from "express";
import axios from "axios";

const GARMENT_LABEL_MAP: Record<string, string> = {
  "Hoodie": "zip_up_hoodie",
  "Sweatshirt": "sweatshirt",
  "Jacket": "jacket",
  "Coat": "coat",
  "Shirt": "shirt",
  "T-shirt": "t_shirt",
  "Blouse": "blouse",
  "Jeans": "jeans",
  "Pants": "trousers",
  "Trousers": "trousers",
  "Skirt": "skirt",
  "Dress": "dress",
};

const COLOR_LABEL_MAP: Record<string, string> = {
  "Black": "black",
  "White": "white",
  "Gray": "grey",
  "Grey": "grey",
  "Blue": "blue",
  "Red": "red",
  "Green": "green",
  "Brown": "brown",
  "Beige": "beige",
  "Yellow": "yellow",
  "Pink": "pink",
  "Purple": "purple",
  "Orange": "orange",
};

const GARMENT_DISPLAY_NAME: Record<string, string> = {
  zip_up_hoodie: "Zip-up hoodie",
  sweatshirt: "Sweatshirt",
  jacket: "Jacket",
  coat: "Coat",
  shirt: "Shirt",
  t_shirt: "T-shirt",
  blouse: "Blouse",
  jeans: "Jeans",
  trousers: "Trousers",
  skirt: "Skirt",
  dress: "Dress",
  unknown: "Clothing item",
};

function buildDescription(garmentType: string, colorFamily: string | null): string {
  const garmentName = GARMENT_DISPLAY_NAME[garmentType] || garmentType;
  if (colorFamily) {
    const capitalizedColor = colorFamily.charAt(0).toUpperCase() + colorFamily.slice(1);
    return `${capitalizedColor} ${garmentName.toLowerCase()}`;
  }
  return garmentName;
}

const CONF_THRESHOLD = 0.7;

interface VisionLabel {
  description: string;
  score: number;
}

export async function classifyGarment(req: Request, res: Response) {
  try {
    const { imageBase64, imageUrl, userId } = req.body;

    if ((!imageBase64 && !imageUrl) || (imageBase64 && imageUrl)) {
      return res.status(400).json({ error: "imageBase64 or imageUrl required" });
    }

    const apiKey = process.env.GCV_API_KEY;
    if (!apiKey) {
      console.error("GCV_API_KEY is not set");
      return res.status(500).json({ error: "missing_gcv_api_key" });
    }

    const visionReq = {
      requests: [
        {
          image: imageBase64
            ? { content: imageBase64 }
            : { source: { imageUri: imageUrl } },
          features: [{ type: "LABEL_DETECTION", maxResults: 10 }],
        },
      ],
    };

    const visionRes = await axios.post(
      `https://vision.googleapis.com/v1/images:annotate?key=${apiKey}`,
      visionReq
    );

    const annotations = visionRes.data.responses?.[0]?.labelAnnotations || [];

    const labels: VisionLabel[] = annotations.map((l: any) => ({
      description: l.description,
      score: l.score,
    }));

    let garmentType = "unknown";
    let modelConfidence = 0;

    for (const l of labels) {
      if (l.score > modelConfidence) {
        modelConfidence = l.score;
      }
      const mapped = GARMENT_LABEL_MAP[l.description];
      if (mapped && l.score >= CONF_THRESHOLD) {
        garmentType = mapped;
        modelConfidence = l.score;
        break;
      }
    }

    let colorFamily: string | null = null;
    for (const l of labels) {
      const mappedColor = COLOR_LABEL_MAP[l.description];
      if (mappedColor) {
        colorFamily = mappedColor;
        break;
      }
    }

    if (userId) {
      console.log(`Classified garment for user ${userId}: ${garmentType}`);
    }

    const description = buildDescription(garmentType, colorFamily);

    return res.json({
      garmentType,
      colorFamily,
      description,
      modelConfidence,
      rawLabels: labels.slice(0, 5),
      source: "gcv_label_detection",
    });
  } catch (err: any) {
    console.error("Vision error", err.response?.data || err.message);
    return res.status(500).json({ error: "classification_failed" });
  }
}
