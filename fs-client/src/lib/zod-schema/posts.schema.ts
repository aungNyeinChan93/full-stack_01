import z from "zod";


export const PostSchema = z.object({
    title: z.string().min(1, 'title filed is required!'),
    body: z.string().min(1, 'body filed is required')
})

export type PostSchemType = z.infer<typeof PostSchema>