import PostUser from "@/components/postUser/postUser"
import { getSinglePost } from "@/lib/data"
import Image from "next/image"
import { Suspense } from "react"

//FETCH DATA WITH AN API
const getPost = async(slug) => {
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`)

    if(!res.ok) throw new Error("Something went wrong")

    return res.json()
}

export const generateMetadata = async({params}) => {
    const { slug } = params
    const post = await getSinglePost(slug) //nextjs will only fetch post once even though we have written it twice!

    return {
        title: post?.title,
        description: post?.description
    }
}

const SinglePostPage = async({params}) => {
    const {slug} = params
    const post = await getPost(slug)
    // const post = await getSinglePost(slug)

    return (
        <div className="flex gap-[80px]">
            <div className="flex-1 relative h-[calc(100vh-170px)]">
                <Image src={post.img} fill alt=""
                className=" object-cover"/>
            </div>

            <div className="flex-[2_1_0%] gap-4 flex flex-col">
                <h1 className="text-2xl font-semibold">{post?.title}</h1>
                <div className="flex gap-[20px] h-[50px]">
                    {post && <Suspense fallback={<div>Loading...</div>}>
                    <PostUser userId={post?.userId}/>
                    </Suspense>}
                </div>
                <div>
                    {post?.body}
                </div>
            </div>
        </div>
    )
}

export default SinglePostPage