export const theme = {
  colors: {
    primary: "#fff8ee", // hero top gradient color (warm cream)
    primaryLight: "#f8e5c1", // soft amber highlight tone
    primaryDark: "#fdf6ec", // gentle base for gradient transitions
    secondary: "#fffaf3", // subtle section background
    background: "#fdfcf9", // overall site background (clean but warm)
    backgroundAlt: "#f8f5f0", // alternating section background
    text: "#2b2118", // soft espresso brown for body text
    textLight: "#6b5e54", // muted warm gray-brown
    border: "#e7dfd4", // soft sand beige for dividers
    white: "#ffffff",
    black: "#111111",
  },
  spacing: {
    xs: "clamp(0.25rem, 0.5vw, 0.5rem)",
    sm: "clamp(0.5rem, 1vw, 1rem)",
    md: "clamp(0.75rem, 1.5vw, 1.5rem)",
    lg: "clamp(1rem, 2vw, 2rem)",
    xl: "clamp(1.5rem, 3vw, 3rem)",
    "2xl": "clamp(2rem, 4vw, 4rem)",
    "3xl": "clamp(2.5rem, 5vw, 5rem)",
    "4xl": "clamp(3rem, 6vw, 8rem)",
  },
  fonts: {
    heading: "'Playfair Display', serif",
    body: "'Lato', sans-serif",
  },
  fontSizes: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem", // 48px
    "6xl": "3.75rem", // 60px
    "7xl": "4.5rem", // 72px
  },
  breakpoints: {
    mobile: "640px",
    tablet: "768px",
    desktop: "1024px",
  },
};

export type Theme = typeof theme;
