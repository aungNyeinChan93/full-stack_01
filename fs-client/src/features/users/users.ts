'use server'


export async function getAllUsers() {
    const result = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/v1/users`)
        .then(res => res.ok
            ? res.json()
            : res.status === 429
                ? 'too many request '
                : 'server error')
    return result;
}