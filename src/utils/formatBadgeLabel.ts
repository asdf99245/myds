export const formatBadgeLabel = (label: string | number) => {
  if (typeof label === 'string') return label;

  return label > 999 ? `999+` : label;
};
