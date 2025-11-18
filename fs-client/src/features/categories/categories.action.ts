
'use server'


export async function getAllCategories() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/v1/categories`);
    const categories = await response.json();
    if (!response.ok) throw new Error(JSON.stringify(categories, null, 2))
    return categories
}