export const SEASON_TITLE_COLORS: Record<string, string> = {
  winter: "#ffffff",
  spring: "#ffffff",
  summer: "#ffffff",
  autumn: "#271814",
};

export const SEASON_SUBTITLE_COLORS: Record<string, string> = {
  winter: "#000000",
  spring: "#ffffff",
  summer: "#fff",
  autumn: "#ffffff",
};

export const SEASON_SUBTITLE_BACKGROUND_COLORS: Record<string, string> = {
  winter: "#ffffff",
  spring: "linear-gradient(rgba(255,111,0, 0.8),rgba(255,165,0,0.8))",
  summer: "linear-gradient(to top, rgba(255,250,0,0.8), rgba(255,171,0,0.9) )",
  autumn: "linear-gradient(to bottom, rgba(58,35,10,0.7), rgba(25,16,14,0.7) )",
};

export const SEASON_TITLE_BACKGROUND_COLORS: Record<string, string> = {
  winter: "linear-gradient(rgba(161,208,252,0.9), rgba(182,229,237, 0.9))",
  spring: " linear-gradient(to top, rgba(10,54,39, 0.7), rgba(8,137,72,0.9))",
  summer:
    "linear-gradient(to bottom, rgba(8,132,132,0.6),rgba(70,225,209,0.8) )",
  autumn: "linear-gradient(rgba(255,111,0, 0.6),rgba(255,165,0,0.6))",
};

export const SEASON_OVERLAY_OPACITY: Record<string, number> = {
  winter: 0.35,
  spring: 0,
  summer: 0,
  autumn: 0.5,
};

export const getTitleColor = (slug: string): string => {
  return SEASON_TITLE_COLORS[slug] || "#ffffff";
};

export const overlayOpacity = (slug: string): number => {
  return SEASON_OVERLAY_OPACITY[slug] ?? 0;
};

export const getSubtitleColor = (slug: string): string => {
  return SEASON_SUBTITLE_COLORS[slug] || "#000000";
};

export const titleBGColour = (slug: string): string => {
  return SEASON_TITLE_BACKGROUND_COLORS[slug] || "none";
};

export const subtitleBGColour = (slug: string): string => {
  return SEASON_SUBTITLE_BACKGROUND_COLORS[slug] || "none";
};

export const getSeasonTheme = (slug: string) => ({
  titleColor: getTitleColor(slug),
  subtitleColor: getSubtitleColor(slug),
  subtitleBgColor: subtitleBGColour(slug),
  overlayOpacity: overlayOpacity(slug),
});
