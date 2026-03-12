import { tv, VariantProps } from "tailwind-variants";

export const inputTextareaVariants = tv({
  base: `
    h-18.5 max-h-18.5 min-h-8 w-full px-2 py-1 bg-transparent text-sm font-normal text-black placeholder:text-gray-100 border border-gray-300 rounded outline-none
  `,
});

interface InputTextareaProps
  extends
    React.ComponentProps<"textarea">,
    VariantProps<typeof inputTextareaVariants> {}


export function InputTextarea({ className, ...props }: InputTextareaProps) {
  return (
    <textarea className={inputTextareaVariants({ className })} {...props} />
  );
}