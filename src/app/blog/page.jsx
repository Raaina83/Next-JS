import PostCard from "@/components/postCard/PostCard"
import { getPosts } from "@/lib/data"

// const getData = async() => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts", 
//         {next: {revalidate: 3600}}// refetches data in every 1 hour
//         // {cache: "no-store"}
//     ) //by default force-caching(next js caches the data)

//     if(!res.ok){
//         throw new Error("Something went wrong")
//     }

//     return res.json()
// }

const BlogPage = async() => {
    // console.log(searchParams)
    // const posts = await getData()
    const posts = await getPosts()

    return (
        <div className="flex items-center flex-wrap gap-5 md:justify-between justify-center">
            {posts.map((post, index) => (
                <div className="lg:w-[30%] md:w-[45%] w-[80%]" key={index}>
                <PostCard post={post}/>
                </div>
            ))}
        </div>
    )
}

export default BlogPage