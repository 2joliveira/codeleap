import React from "react";
import { tv, VariantProps } from "tailwind-variants";

const textVariants = tv({
  base: "font-sans leading-[100%] tracking-normal font-normal",
  variants: {
    variant: {
      heading: "text-[22px] font-bold",
      paragraph: "text-lg",
      "label-large": "text-lg font-bold",
      "label-medium": "text-base font-bold",
      "label-small": "text-base",
      "label-x-small": "text-sm",
    },
  },
  defaultVariants: {
    variant: "paragraph",
  },
});

interface TextProps extends VariantProps<typeof textVariants> {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode | string;
}

export function Text({
  as = "p",
  variant,
  className,
  children,
  ...props
}: TextProps) {
  return React.createElement(
    as,
    {
      className: textVariants({ variant, className }),
      ...props,
    },
    children,
  );
}
