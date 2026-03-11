import { tv, VariantProps } from "tailwind-variants";

export const inputTextVariants = tv({
  base: `
    h-8 w-full p-2 bg-transparent outline-none text-sm font-normal placeholder:text-gray-100
    text-black rounded border border-gray-300
  `,
});

interface InputTextProps
  extends
    React.ComponentProps<"input">,
    VariantProps<typeof inputTextVariants> {}

export function InputText({ className, ...props }: InputTextProps) {
  return <input className={inputTextVariants({ className })} {...props} />;
}
