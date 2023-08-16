import { authConfig } from './../../../../config/auth';
import NextAuth from "next-auth/next";

 const handler = NextAuth(authConfig);



 export { handler as GET, handler as POST }

// import { Posts } from '@/components/Posts';
// import PostsSearch from '@/components/PostsSearch';

// "use client"
// так как используется стайте менеджер не нужно делать клиентским

 


// async function getData() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts',
//     {next: {
//         revalidate: 60
//         // с какой частатой обновлять посты
//     }});
//     return response.json()
// }


// export default function Blog() {
    // const [posts, setPosts] = useState<any[]>([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     getAllPosts()
    //         .then(setPosts)
    //         .finally(() => setLoading(false));
    // }, []);
    // так как используется стайте менеджер не нужно локальное состояние




//     return <>
//         <h1>Blog < /h1>
//         < PostsSearch />
//         <Posts />
//         < />
// }
{/* // компонент стал клиентским */}


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
