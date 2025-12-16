export const OCCASION_TITLE_COLORS: Record<string, string> = {
  "date-night": "#ffffff",
  "daily-driver": "#ffffff",
  "night-out": "#ffffff",
  formal: "#ffffff",
  office: "#1d2636",
  "active-gym": "#ffffff",
};

export const OCCASION_SUBTITLE_COLORS: Record<string, string> = {
  "date-night": "#1d2636",
  "daily-driver": "#ffffff",
  "night-out": "#1d2636",
  formal: "#1d2636",
  office: "#1d2636",
  "active-gym": "#ffffff",
};

export const OCCASION_SUBTITLE_BACKGROUND_COLORS: Record<string, string> = {
  "date-night": "rgba(255,255,255,1)",
  "daily-driver": "rgba(0,0,0,0.7)",
  "night-out": "rgba(255,255,255,1)",
  formal: "rgba(255,255,255,1)",
  office: "#f5f5dcdd",
  "active-gym": "rgba(0,0,0,0.7)",
};

export const OCCASION_TITLE_BACKGROUND_COLORS: Record<string, string> = {
  "date-night": "rgba(90,8,8,0.85)",
  "daily-driver": "rgba(52,50,50,0.85)",
  "night-out": "rgba(59,40,77,0.9)",
  formal: "rgba(0,0,0,0.8)",
  office: "rgba(255,255,255,0.9)",
  "active-gym": "rgba(8,10,53,0.9)",
};

export const OCCASION_OVERLAY_OPACITY: Record<string, number> = {
  "date-night": 0.35,
  "daily-driver": 0.4,
  "night-out": 0,
  formal: 0.5,
  office: 0,
  "active-gym": 0.3,
};

export const getTitleColor = (slug: string): string => {
  return OCCASION_TITLE_COLORS[slug] || "#ffffff";
};

export const getSubtitleColor = (slug: string): string => {
  return OCCASION_SUBTITLE_COLORS[slug] || "#ffffff";
};

export const overlayOpacity = (slug: string): number => {
  return OCCASION_OVERLAY_OPACITY[slug] ?? 0;
};

export const titleBGColour = (slug: string): string => {
  return OCCASION_TITLE_BACKGROUND_COLORS[slug] || "none";
};

export const subtitleBGColour = (slug: string): string => {
  return OCCASION_SUBTITLE_BACKGROUND_COLORS[slug] || "none";
};

export const getOccasionTheme = (slug: string) => ({
  titleColor: getTitleColor(slug),
  subtitleColor: getSubtitleColor(slug),
  subtitleBgColor: subtitleBGColour(slug),
  overlayOpacity: overlayOpacity(slug),
});
