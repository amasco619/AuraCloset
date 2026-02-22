# AuraCloset

## Overview
AuraCloset is a virtual wardrobe + styling assistant mobile app built with Expo (React Native) and Express backend. The tagline is "Your quiet-luxury stylist in your pocket."

## Current State
- **Version**: 1.0.0
- **Last Updated**: 2026-02-22
- **Status**: Initial build complete

## Architecture
- **Frontend**: Expo Router (file-based routing) with React Native
- **Backend**: Express server on port 5000 (serves landing page + API)
- **State Management**: React Context + AsyncStorage for local persistence
- **Styling**: Custom theme with Inter font family, quiet-luxury color palette

## Key Features
- Multi-step onboarding (body type, eye color, skin tone, style goals)
- Wardrobe digitization with camera/gallery (30-item free cap)
- Outfit recommendations by scenario (Work/Casual/Date/Event)
- Wardrobe analytics (category & color distribution)
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
    home.tsx           - Dashboard
    wardrobe.tsx       - Wardrobe grid
    outfits.tsx        - Outfit recommendations
    profile.tsx        - Profile & settings
contexts/
  AppContext.tsx        - Main app state (profile, wardrobe, premium)
constants/
  colors.ts            - Theme colors (navy/champagne gold palette)
```

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
