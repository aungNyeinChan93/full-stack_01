'use server'


// todos

export async function fetchTodo(id?: string | number) {
    const response = await fetch(`https://dummyjson.com/todos/${id ? id : ''}`);
    if (!response.ok) throw new Error('fetching fail !')
    return await response.json();
}