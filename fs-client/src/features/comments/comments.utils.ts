


export async function fetchAllComments(id?: string) {
    const result = await fetch(`https://dummyjson.com/comments/${id ? id : ''}`).then(res => res.json());
    return result;
}