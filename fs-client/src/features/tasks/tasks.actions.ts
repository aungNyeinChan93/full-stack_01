


export async function getAllTasks() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/v1/tasks`);
    const tasks = await response.json();
    if (!response.ok) throw new Error(JSON.stringify(tasks, null, 2))
    return tasks;
}