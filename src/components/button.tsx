import { tv, VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: "flex items-center justify-center cursor-pointer transition rounded",
  variants: {
    variant: {
      primary: "bg-blue",
    },
    size: {
      sm: "h-8 w-[111px]",
    },
    disabled: {
      true: "bg-gray-100 cursor-not-allowed",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
    disabled: false,
  },
});

interface ButtonProps
  extends
    Omit<React.ComponentProps<"button">, "disabled">,
    VariantProps<typeof buttonVariants> {
  disabled?: boolean;
}

export function Button({
  className,
  variant,
  disabled,
  size,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({
        variant,
        disabled,
        size,
        className,
      })}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
