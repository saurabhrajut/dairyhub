# 📱 Android Multi-Device Testing & Compatibility Protocols

---

## 🎯 Objective
This document outlines the testing suite, Android API target matrix, screen size breakpoints, back button navigation verification steps, and performance profiling guidelines for **Dairy Hub**.

---

## 📲 Android Target Version Matrix

| Android OS Version | API Level | Compatibility Target | Key Verification Focus |
| :--- | :--- | :--- | :--- |
| **Android 8.0 / 8.1 (Oreo)** | API 26 - 27 | Minimum Supported | Webview rendering fallback, memory usage |
| **Android 9.0 (Pie)** | API 28 | Supported | Hardware back button, dark theme toggle |
| **Android 10** | API 29 | Supported | Gesture navigation vs back button hardware event |
| **Android 11** | API 30 | Supported | Storage permissions & offline storage persistence |
| **Android 12 / 12L** | API 31 - 32 | Target | Dynamic color splash & window inset handling |
| **Android 13** | API 33 | Target | Notification permissions & back gesture predictive back |
| **Android 14 / 15** | API 34 - 35 | Latest Target | Edge-to-edge layout & Capacitor 8 bridge handling |

---

## 📐 Screen Aspect Ratio & Resolution Matrix

```
┌─────────────────────────────────────────────────────────────┐
│ 1. Compact Phones (360x640, 375x812 - e.g. Pixel 4a)        │
│    -> Verify bottom drawer height, font scaling & modals   │
├─────────────────────────────────────────────────────────────┤
│ 2. Modern Aspect Ratios (20:9, 19.5:9 - 1080x2400)          │
│    -> Verify safe area insets & top header padding         │
├─────────────────────────────────────────────────────────────┤
│ 3. Foldables & Tablets (768x1024, 800x1280, 1200x1600)      │
│    -> Verify grid column scaling (3 cols -> 8 cols)         │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔄 Back Button Navigation Testing Suite

### Test Case 1: Modal Dismissal on Back Button Press
1. Launch app on Android device or emulator.
2. Open any calculator modal (e.g. *Milk Standardization I* or *Solutions Prep*).
3. Press physical Android Back Button or trigger back gesture.
4. **Expected Result**: The active modal closes cleanly. The app **must NOT** close or crash.

### Test Case 2: Deep Route Back Navigation
1. Navigate from Home (`/`) to User Profile (`/profile`).
2. Press physical Android Back Button or back gesture.
3. **Expected Result**: User is navigated back to Home (`/`). The app **must NOT** exit.

### Test Case 3: Home Page Exit Confirmation Dialog
1. Navigate to Home (`/`) with no active modals open.
2. Press physical Android Back Button.
3. **Expected Result**: An Exit Confirmation Dialog appears (*"Exit Dairy Hub App?"*).
4. Tap **"Stay in App"** -> Dialog closes, user remains on Home page.
5. Press Back again and tap **"Exit App"** -> App closes gracefully without error.

---

## ⚡ Performance & Resource Health Profiling

1. **Memory Leak Prevention**:
   - Verify modal unmounting cleans up event listeners.
   - Run `npx capacitor run android` with Android Studio Profiler tracking Heap Memory (keep baseline < 120 MB RAM).

2. **Chunk Loading Errors**:
   - Next.js dynamic imports include automatic chunk load error recovery (`window.addEventListener('error', ...)`).

3. **Offline Mode Functionality**:
   - Turn off Wi-Fi & Mobile Data.
   - Verify saved favorites, calculators, and offline Sarathi fallback responses remain fully functional.

---

## 📋 Pre-Release Testing Checklist

- [x] Android hardware back button handles modals, routes, and exit confirmation cleanly.
- [x] User saved favorites persist in localStorage across app restarts.
- [x] Feedback form modal collects user ratings and submits without crashing.
- [x] Video tutorial player renders responsive preview overlays.
- [x] App layout metadata is updated with ASO high-ranking keywords.
- [x] TypeScript compilation passes without errors (`npx tsc --noEmit`).
