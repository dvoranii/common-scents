export const getSavedFragranceUrl = (): string | null => {
  return localStorage.getItem("fragranceUrl");
};

export const saveFragranceUrl = (url: string) => {
  localStorage.setItem("fragranceUrl", url);
};
