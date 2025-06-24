export const fetchPosts = async () => {
    const res = await fetch ('https://jsonplaceholder.typicode.com/posts?_limit=10');
    if (!res.ok) throw new Error ("Failed to fetch posts");
    return res.json()
}