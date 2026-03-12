import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { tv } from "tailwind-variants";

const buttonIconVariants = tv({
  base: "cursor-pointer hover:opacity-80",
  variants: {
    variant: {
      primary: "text-white",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface ButtonIconProps extends React.ComponentProps<"button"> {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

export function ButtonIcon({
  icon: Icon,
  className,
  ...props
}: ButtonIconProps) {
  return (
    <button {...props}>
      <Icon size={24} className={buttonIconVariants({ className })} />
    </button>
  );
}
