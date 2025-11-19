


export async function fetchAllPosts(id?: string) {
    const { posts } = await fetch(`https://dummyjson.com/posts/${id ? id : ''}`).then(res => res.json());
    return posts
}