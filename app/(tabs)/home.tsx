import { StyleSheet, Text, View, ScrollView, Pressable, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useApp } from '@/contexts/AppContext';
import Colors from '@/constants/colors';
import Animated, { FadeInDown } from 'react-native-reanimated';

const styleGoalLabels: Record<string, string> = {
  youthful: 'Youthful', elevated: 'Elevated', minimal: 'Minimal',
  romantic: 'Romantic', bold: 'Bold', classic: 'Classic',
};

const categoryIcons: Record<string, string> = {
  top: 'shirt-outline', bottom: 'resize-outline', dress: 'body-outline',
  outerwear: 'cloudy-outline', shoes: 'footsteps-outline', bag: 'bag-handle-outline',
  jewelry: 'diamond-outline',
};

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const { profile, wardrobeItems, outfitSets, isPremium, canAddItem } = useApp();
  const webTopInset = Platform.OS === 'web' ? 67 : 0;

  const categoryCounts: Record<string, number> = {};
  wardrobeItems.forEach(item => {
    categoryCounts[item.category] = (categoryCounts[item.category] || 0) + 1;
  });

  const readyOutfits = outfitSets.filter(o => o.components.every(c => c.owned)).length;

  const quickTips = [
    { icon: 'bulb-outline' as const, text: 'A navy blazer works for both work and evening events.' },
    { icon: 'color-palette-outline' as const, text: 'Neutral tones create a luxury feel effortlessly.' },
    { icon: 'diamond-outline' as const, text: 'Minimal gold jewelry elevates any casual outfit.' },
  ];

  return (
    <View style={[styles.container, { paddingTop: insets.top + webTopInset }]}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <Animated.View entering={FadeInDown.delay(100).duration(500)} style={styles.header}>
          <View>
            <Text style={styles.greeting}>Welcome back</Text>
            <Text style={styles.appName}>AuraCloset</Text>
          </View>
          {isPremium && (
            <View style={styles.premiumBadge}>
              <Ionicons name="star" size={14} color={Colors.secondary} />
              <Text style={styles.premiumText}>Premium</Text>
            </View>
          )}
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(200).duration(500)} style={styles.statsRow}>
          <Pressable style={styles.statCard} onPress={() => router.push('/(tabs)/wardrobe')}>
            <Text style={styles.statNumber}>{wardrobeItems.length}</Text>
            <Text style={styles.statLabel}>Items</Text>
          </Pressable>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{readyOutfits}</Text>
            <Text style={styles.statLabel}>Ready Outfits</Text>
          </View>
          <Pressable style={styles.statCard} onPress={() => router.push('/(tabs)/outfits')}>
            <Text style={styles.statNumber}>{outfitSets.length}</Text>
            <Text style={styles.statLabel}>Outfit Ideas</Text>
          </Pressable>
        </Animated.View>

        {profile.styleGoalPrimary && (
          <Animated.View entering={FadeInDown.delay(300).duration(500)} style={styles.styleCard}>
            <View style={styles.styleCardHeader}>
              <MaterialCommunityIcons name="hanger" size={20} color={Colors.secondary} />
              <Text style={styles.styleCardTitle}>Your Style</Text>
            </View>
            <Text style={styles.styleCardValue}>
              {styleGoalLabels[profile.styleGoalPrimary]}
              {profile.styleGoalSecondary ? ` + ${styleGoalLabels[profile.styleGoalSecondary]}` : ''}
            </Text>
          </Animated.View>
        )}

        <Animated.View entering={FadeInDown.delay(400).duration(500)}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.actionsRow}>
            <Pressable
              style={({ pressed }) => [styles.actionButton, pressed && styles.actionPressed]}
              onPress={() => {
                if (canAddItem) {
                  router.push('/add-item');
                } else {
                  router.push('/premium');
                }
              }}
            >
              <View style={[styles.actionIcon, { backgroundColor: Colors.blush + '30' }]}>
                <Ionicons name="add" size={24} color={Colors.primary} />
              </View>
              <Text style={styles.actionLabel}>Add Item</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [styles.actionButton, pressed && styles.actionPressed]}
              onPress={() => router.push('/(tabs)/outfits')}
            >
              <View style={[styles.actionIcon, { backgroundColor: Colors.sage + '30' }]}>
                <Ionicons name="sparkles" size={24} color={Colors.sage} />
              </View>
              <Text style={styles.actionLabel}>Get Outfits</Text>
            </Pressable>
            {!isPremium && (
              <Pressable
                style={({ pressed }) => [styles.actionButton, pressed && styles.actionPressed]}
                onPress={() => router.push('/premium')}
              >
                <View style={[styles.actionIcon, { backgroundColor: Colors.secondary + '30' }]}>
                  <Ionicons name="star" size={24} color={Colors.secondary} />
                </View>
                <Text style={styles.actionLabel}>Go Premium</Text>
              </Pressable>
            )}
          </View>
        </Animated.View>

        {wardrobeItems.length > 0 && (
          <Animated.View entering={FadeInDown.delay(500).duration(500)}>
            <Text style={styles.sectionTitle}>Wardrobe Breakdown</Text>
            <View style={styles.breakdownCard}>
              {Object.entries(categoryCounts).sort((a, b) => b[1] - a[1]).map(([cat, count]) => (
                <View key={cat} style={styles.breakdownRow}>
                  <View style={styles.breakdownLeft}>
                    <Ionicons name={categoryIcons[cat] as any || 'ellipse-outline'} size={18} color={Colors.secondary} />
                    <Text style={styles.breakdownLabel}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</Text>
                  </View>
                  <View style={styles.breakdownRight}>
                    <View style={styles.breakdownBarBg}>
                      <View style={[styles.breakdownBarFill, { width: `${Math.min((count / wardrobeItems.length) * 100, 100)}%` }]} />
                    </View>
                    <Text style={styles.breakdownCount}>{count}</Text>
                  </View>
                </View>
              ))}
            </View>
          </Animated.View>
        )}

        <Animated.View entering={FadeInDown.delay(600).duration(500)}>
          <Text style={styles.sectionTitle}>Style Tips</Text>
          {quickTips.map((tip, i) => (
            <View key={i} style={styles.tipCard}>
              <Ionicons name={tip.icon} size={20} color={Colors.secondary} />
              <Text style={styles.tipText}>{tip.text}</Text>
            </View>
          ))}
        </Animated.View>

        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  scrollContent: { paddingHorizontal: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8, marginBottom: 24 },
  greeting: { fontFamily: 'Inter_400Regular', fontSize: 14, color: Colors.textSecondary, letterSpacing: 0.5 },
  appName: { fontFamily: 'Inter_700Bold', fontSize: 28, color: Colors.primary, letterSpacing: -0.5 },
  premiumBadge: { flexDirection: 'row', alignItems: 'center', gap: 4, backgroundColor: Colors.secondary + '15', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20 },
  premiumText: { fontFamily: 'Inter_600SemiBold', fontSize: 12, color: Colors.secondary },
  statsRow: { flexDirection: 'row', gap: 12, marginBottom: 24 },
  statCard: { flex: 1, backgroundColor: Colors.white, borderRadius: 16, padding: 16, alignItems: 'center' },
  statNumber: { fontFamily: 'Inter_700Bold', fontSize: 28, color: Colors.primary },
  statLabel: { fontFamily: 'Inter_400Regular', fontSize: 12, color: Colors.textSecondary, marginTop: 4 },
  styleCard: { backgroundColor: Colors.white, borderRadius: 16, padding: 16, marginBottom: 24 },
  styleCardHeader: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 8 },
  styleCardTitle: { fontFamily: 'Inter_500Medium', fontSize: 13, color: Colors.textSecondary, letterSpacing: 0.5, textTransform: 'uppercase' },
  styleCardValue: { fontFamily: 'Inter_600SemiBold', fontSize: 18, color: Colors.primary },
  sectionTitle: { fontFamily: 'Inter_600SemiBold', fontSize: 18, color: Colors.primary, marginBottom: 14, letterSpacing: -0.3 },
  actionsRow: { flexDirection: 'row', gap: 12, marginBottom: 28 },
  actionButton: { flex: 1, backgroundColor: Colors.white, borderRadius: 16, padding: 16, alignItems: 'center' },
  actionPressed: { opacity: 0.7, transform: [{ scale: 0.97 }] },
  actionIcon: { width: 48, height: 48, borderRadius: 14, alignItems: 'center', justifyContent: 'center', marginBottom: 8 },
  actionLabel: { fontFamily: 'Inter_500Medium', fontSize: 13, color: Colors.primary },
  breakdownCard: { backgroundColor: Colors.white, borderRadius: 16, padding: 16, marginBottom: 28 },
  breakdownRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 10 },
  breakdownLeft: { flexDirection: 'row', alignItems: 'center', gap: 10, flex: 1 },
  breakdownLabel: { fontFamily: 'Inter_500Medium', fontSize: 14, color: Colors.primary },
  breakdownRight: { flexDirection: 'row', alignItems: 'center', gap: 10, flex: 1.5 },
  breakdownBarBg: { flex: 1, height: 6, backgroundColor: Colors.border, borderRadius: 3, overflow: 'hidden' },
  breakdownBarFill: { height: '100%', backgroundColor: Colors.secondary, borderRadius: 3 },
  breakdownCount: { fontFamily: 'Inter_600SemiBold', fontSize: 13, color: Colors.textSecondary, width: 24, textAlign: 'right' },
  tipCard: { flexDirection: 'row', alignItems: 'center', gap: 12, backgroundColor: Colors.white, borderRadius: 12, padding: 14, marginBottom: 8 },
  tipText: { fontFamily: 'Inter_400Regular', fontSize: 13, color: Colors.textSecondary, flex: 1, lineHeight: 18 },
});
