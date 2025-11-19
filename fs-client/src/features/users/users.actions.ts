

export async function fetchAllUsers(id?: string) {
    const { users } = await fetch(`https://dummyjson.com/users/${id ? id : ''}`).then(res => res.json())
    return users;
}