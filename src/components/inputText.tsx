import { tv, VariantProps } from "tailwind-variants";

export const inputTextVariants = tv({
  base: `
    h-8 w-full p-2 bg-transparent text-sm font-normal text-black placeholder:text-gray-100 border border-gray-300 rounded outline-none
  `,
});

interface InputTextProps
  extends
    React.ComponentProps<"input">,
    VariantProps<typeof inputTextVariants> {}

export function InputText({ className, ...props }: InputTextProps) {
  return <input className={inputTextVariants({ className })} {...props} />;
}
