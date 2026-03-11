import { tv, VariantProps } from "tailwind-variants";
import { Text } from "./text";

const buttonVariants = tv({
  base: "flex items-center justify-center cursor-pointer transition rounded transition enabled:hover:opacity-80",
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

const buttonTextVariants = tv({
  variants: {
    variant: {
      primary: "text-white",
    },
  },
  defaultVariants: {
    variant: "primary",
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
      <Text variant="label-medium" className={buttonTextVariants({ variant })}>
        {children}
      </Text>
    </button>
  );
}
