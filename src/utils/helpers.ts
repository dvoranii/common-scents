export const findBySlug = <T extends { slug?: string }>(
  data: readonly T[],
  slug: string
): T | undefined => data.find((item) => item.slug === slug);

export const getFeaturedItems = <T>(data: readonly T[], count = 4): T[] =>
  data.slice(0, count);

export const filterByField = <
  T,
  K extends keyof T,
  V = T[K] extends (infer U)[] ? U : T[K]
>(
  data: readonly T[],
  field: K,
  value: V
): T[] =>
  data.filter((item) => {
    const fieldValue = item[field];
    return Array.isArray(fieldValue)
      ? (fieldValue as readonly V[]).includes(value)
      : fieldValue === value;
  });
