'use server'

// 
export async function getAllUsers() {
    const result = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/v1/users`)
        .then(res => res.ok
            ? res.json()
            : res.status === 429
                ? 'too many request '
                : 'server error')
    return result;
}

// 
export async function createUser(newUser: { name: string, email: string }) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND}/api/v1/users`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        }
    );
    const result = await res.json();
    if (!res.ok) {
        throw new Error(JSON.stringify(result, null, 2));
    }
    return await result
}

