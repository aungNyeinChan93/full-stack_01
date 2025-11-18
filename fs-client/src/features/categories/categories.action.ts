'use server'

import { revalidatePath } from "next/cache";


export async function getAllCategories() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/v1/categories`);
    const categories = await response.json();
    if (!response.ok) throw new Error(JSON.stringify(categories, null, 2))
    return categories
}


export async function createNewCategory(data: { name: string }) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/v1/categories`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const result = await response.json();
    if (!response.ok) throw new Error(JSON.stringify(result, null, 2))
    return result
}

export async function revalidateCategories() {
    revalidatePath("/categoreis");
}