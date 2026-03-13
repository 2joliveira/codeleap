import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode } from "react";
import { Text } from "./text";

type ModalProps = {
  trigger: ReactNode;
  title: string;
  description?: string;
  children: ReactNode;
};

export function Modal({ trigger, title, description, children }: ModalProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/70" />

        <Dialog.Content className="fixed left-1/2 top-1/2 md:w-165 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-lg">
          <Dialog.Title>
            <Text variant="heading">{title}</Text>
          </Dialog.Title>

          {description && (
            <Dialog.Description>{description}</Dialog.Description>
          )}

          <div className="mt-5">{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
