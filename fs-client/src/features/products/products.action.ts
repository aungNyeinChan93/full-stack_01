

export async function getProducts(id?: string | number) {
    const response = await fetch(`https://dummyjson.com/products/${id ? id : ''}`)
    const result = await response.json();
    if (!response.ok) throw new Error(JSON.stringify(result, null, 2))
    return result
}