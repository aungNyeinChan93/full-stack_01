import z from "zod";


export const CategorySchema = z.object({
    name: z.string().min(1, 'name fields is required!')
});

export type CategorySchemaType = z.infer<typeof CategorySchema>