// "use client"
// так как используется стайте менеджер не нужно делать клиентским

import Posts from "@/components/Posts";
import PostsSearch from "@/components/PostsSearch";
import { getAllPosts } from "@/services/getPosts";
import { usePosts } from "@/store";
import Link from "next/link";
import { useEffect, useState } from "react";


// async function getData() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts',
//     {next: {
//         revalidate: 60
//         // с какой частатой обновлять посты
//     }});
//     return response.json()
// }


export default function Blog() {
    // const [posts, setPosts] = useState<any[]>([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     getAllPosts()
    //         .then(setPosts)
    //         .finally(() => setLoading(false));
    // }, []);
    // так как используется стайте менеджер не нужно локальное состояние

 


    return <div className="blog">
        <h1>Blog</h1>
        <PostsSearch />
        <Posts />
    </div>
}
// компонент стал клиентским


// export default async  function Blog() {
//     const posts = await getData();



//     return <>
//     <h1>Blog</h1>
//     <ul>
//     {posts.map((post: any) => (
//         <li key={post.id}>
//             <Link href={`/blog/${post.id}`}>{post.title}</Link>
//         </li>
//     ))}
//     </ul>
//     </>
// }

// асинхронный серверный компонент