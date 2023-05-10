export const getInitials = (text: string) => {
  return text
    .split(' ')
    .map((word) => word.charAt(0))
    .join('');
};
