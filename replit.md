# AuraCloset

## Overview
AuraCloset is a virtual wardrobe + styling assistant mobile app built with Expo (React Native) and Express backend. The tagline is "Your quiet-luxury stylist in your pocket."

## Current State
- **Version**: 1.1.0
- **Last Updated**: 2026-02-23
- **Status**: Recommendation slots system added

## Architecture
- **Frontend**: Expo Router (file-based routing) with React Native
- **Backend**: Express server on port 5000 (serves landing page + API)
- **State Management**: React Context + AsyncStorage for local persistence
- **Styling**: Custom theme with Inter font family, quiet-luxury color palette

## Key Features
- Multi-step onboarding (body type with illustrated images, eye color, skin tone, style goals)
- Wardrobe digitization with camera/gallery (30-item free cap)
- Outfit recommendations by scenario (Work/Casual/Date/Event) with sample images per component
- Wardrobe analytics (category & color distribution)
- WardrobeSlot blueprint system (19 essential items across tops, bottoms, outerwear, shoes, jewelry, dress, bag)
- Starter Recommendations on Home screen (first needed slot per category)
- Slot status tracking (needed/owned) with automatic matching on item add/remove
- Premium tier toggle (unlimited items, blueprint, advanced features)
- Profile management with style constraints

## Project Structure
```
app/
  _layout.tsx          - Root layout with providers
  index.tsx            - Entry routing (onboarding vs tabs)
  onboarding.tsx       - Multi-step style quiz
  add-item.tsx         - Add wardrobe item (camera/gallery)
  premium.tsx          - Premium upgrade screen
  item-detail.tsx      - Item detail view
  (tabs)/
    _layout.tsx        - Tab navigation (liquid glass on iOS 26+)
    index.tsx          - Dashboard with starter recommendations
    wardrobe.tsx       - Wardrobe grid
    outfits.tsx        - Outfit recommendations with component images
    profile.tsx        - Profile & settings
contexts/
  AppContext.tsx        - Main app state (profile, wardrobe, premium, recommendation slots)
constants/
  colors.ts            - Theme colors (navy/champagne gold palette)
  wardrobeBlueprint.ts - WardrobeSlot model, blueprint data, slot initialization/matching
assets/
  body_types/          - Illustrated body shape images (hourglass, pear, apple, rectangle, inverted triangle, athletic)
  recommendations/     - Sample images for wardrobe slots (19 flat-lay fashion photos)
```

## WardrobeSlot Blueprint System
- 19 essential wardrobe items defined in `constants/wardrobeBlueprint.ts`
- Each slot has: id, category, subType, colorFamily, priority, label, description, sampleImage
- Slots are initialized on first load by comparing user's wardrobe to the blueprint
- When an item is added, the first matching needed slot is updated to owned
- When an item is removed, all slots are re-initialized from the current wardrobe
- Slot statuses are persisted to AsyncStorage under `@auracloset_slots`
- `starterRecommendations` provides the first needed slot per category for the Home screen

## Color Palette
- Primary: #101826 (Deep Navy)
- Secondary: #D0B892 (Champagne Gold)
- Sage: #8AA39B
- Blush: #EACFD3
- Background: #F5F3F0

## User Preferences
- Quiet luxury aesthetic
- No emojis in the app
- Inter font family throughout
