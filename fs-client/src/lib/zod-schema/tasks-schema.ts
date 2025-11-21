import z from "zod";


export const TaskSchema = z.object({
    name: z.string().nonempty('name field is required!'),
    isCompleted: z.boolean().nullable(),
    user_id: z.string().nullable(),
})

export type Task = z.infer<typeof TaskSchema> 