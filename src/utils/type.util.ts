export type RequiredPick<P, T extends keyof P> = Pick<Required<P>, T>;
