export const isArray = <T>(target: T | T[]): target is Array<T> => {
  return Array.isArray(target);
};
