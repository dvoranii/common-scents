export const theme = {
  colors: {
    primary: "#fff8ee",
    primaryLight: "#f8e5c1",
    primaryDark: "#fdf6ec",
    secondary: "#fffaf3",
    background: "#fdfcf9",
    backgroundAlt: "#f8f5f0",
    text: "#2b2118",
    textLight: "#6b5e54",
    border: "#e7dfd4",
    white: "#ffffff",
    black: "#111111",
  },
  spacing: {
    xs: "clamp(0.25rem, 0.5vw, 0.5rem)",
    sm: "clamp(0.5rem, 1vw, 1rem)",
    md: "clamp(0.75rem, 1.5vw, 1.5rem)",
    lg: "clamp(1rem, 2vw, 2rem)",
    xl: "clamp(1.5rem, 3vw, 3rem)",
    xxl: "clamp(2rem, 4vw, 4rem)",
    xxxl: "clamp(2.5rem, 5vw, 5rem)",
    xxxxl: "clamp(3rem, 6vw, 6rem)",
  },
  fonts: {
    heading: "'Playfair Display', serif",
    body: "'Lato', sans-serif",
  },
  fontSizes: {
    xs: "clamp(0.75rem, 0.8vw, 0.875rem)", // 12-14px
    sm: "clamp(0.875rem, 1vw, 1rem)", // 14-16px
    base: "clamp(1rem, 1.2vw, 1.125rem)", // 16-18px
    lg: "clamp(1.125rem, 1.4vw, 1.375rem)", // 18-22px
    xl: "clamp(1.25rem, 1.6vw, 1.5rem)", // 20-24px
    xxl: "clamp(1.5rem, 2vw, 2rem)", // 24-32px
    xxxl: "clamp(1.875rem, 2.5vw, 2.5rem)", // 30-40px
    xxxxl: "clamp(2.25rem, 3vw, 3rem)", // 36-48px
    xxxxxl: "clamp(3rem, 4vw, 4rem)", // 48-64px
  },
  breakpoints: {
    mobile: "640px",
    tablet: "768px",
    desktop: "1024px",
  },
};

export type Theme = typeof theme;
