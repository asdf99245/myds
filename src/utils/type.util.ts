import { ComponentPropsWithRef, ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react';

export interface EmptyProps {}

export type RequiredPick<P, T extends keyof P> = Pick<Required<P>, T>;

export type PropsWithAs<P, T extends ElementType> = { as?: T } & P;

export type PolymorphicProps<P, T extends ElementType> = PropsWithChildren<
  PropsWithAs<P, T> & Omit<ComponentPropsWithoutRef<T>, keyof P>
>;

export type PolymorphicRef<T extends ElementType> = ComponentPropsWithRef<T>['ref'];

export type PolymorphicPropsWithRef<P, T extends ElementType> = PolymorphicProps<P, T> & {
  ref?: PolymorphicRef<T>;
};
