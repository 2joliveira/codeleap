import z from "zod";

export const postSchema = z.object({
    created_datetime: z.date({ error: "Data da criação é obrigatória !" }),
    title: z.string({ error: "Título é obrigatório !" }),
    content: z.string({ error: "Conteúdo é obrigatório !" })
});

export type PostSchema = z.infer<typeof postSchema>;

export interface Post extends PostSchema {
  id: number;
  username: string;
}