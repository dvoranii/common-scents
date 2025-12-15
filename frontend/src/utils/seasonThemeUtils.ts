export const SEASON_TITLE_COLORS: Record<string, string> = {
  winter: "#ffffff",
  spring: "#ffffff",
  summer: "#ffffff",
  autumn: "#ffffff",
};

export const SEASON_TITLE_WIDTH: Record<string, string> = {
  winter: "30%",
  spring: "40%",
  summer: "40%",
  autumn: "35%",
};

export const SEASON_SUBTITLE_WIDTH: Record<string, string> = {
  winter: "45%",
  spring: "45%",
  summer: "45%",
  autumn: "55%",
};

export const SEASON_SUBTITLE_COLORS: Record<string, string> = {
  winter: "#000000",
  spring: "#ffffff",
  summer: "#1d2636",
  autumn: "#ffffff",
};

export const SEASON_SUBTITLE_BACKGROUND_COLORS: Record<string, string> = {
  winter: "#ffffff",
  spring: "linear-gradient(rgba(255,111,0, 0.8),rgba(255,165,0,0.8))",
  summer: "linear-gradient(to top, rgba(255,250,0,0.9), rgba(255,171,0,0.9) )",
  autumn:
    "linear-gradient(to bottom, rgba(58,35,10,0.8), rgba(25,16,14,0.85) )",
};

export const SEASON_TITLE_BACKGROUND_COLORS: Record<string, string> = {
  winter: "linear-gradient(rgba(161,208,252,0.9), rgba(182,229,237, 0.9))",
  spring: " linear-gradient(to top, rgba(10,54,39, 0.8), rgba(8,137,72,0.8))",
  summer:
    "linear-gradient(to bottom, rgba(8,132,132,0.85),rgba(70,225,209,0.85) )",
  autumn: "linear-gradient(rgba(255,111,0, 0.8),rgba(255,165,0,0.8))",
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

export const getTitleWidth = (slug: string): string => {
  return SEASON_TITLE_WIDTH[slug] || "80%";
};

export const getSubtitleWidth = (slug: string): string => {
  return SEASON_SUBTITLE_WIDTH[slug] || "80%";
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
  titleWidth: getTitleWidth(slug),
  subtitleColor: getSubtitleColor(slug),
  subtitleBgColor: subtitleBGColour(slug),
  overlayOpacity: overlayOpacity(slug),
});
