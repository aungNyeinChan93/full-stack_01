import { JsonArray } from './../../../../fs_backend/src/generated/internal/prismaNamespace';
import { readdirSync } from "fs";
import { threadId } from "worker_threads";



export async function fetchAllPosts(id?: string) {
    const { posts } = await fetch(`https://dummyjson.com/posts/${id ? id : ''}`).then(res => res.json());
    return posts
};



export async function createPost(post: any) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/v1/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    })
    const result = await response.json();

    if (!response.ok) throw new Error(JSON.stringify(result, null, 2))
    return result
}


export async function getAllPosts(id?: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/v1/posts/${id ? id : ''}`);
    const result = await response.json();
    if (!response.ok) throw new Error(JSON.stringify(result))
    return result;
}