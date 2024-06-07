import PostUser from "@/components/postUser/postUser"
import { getSinglePost } from "@/lib/data"
import Image from "next/image"
import { Suspense } from "react"

//FETCH DATA WITH AN API
// const getPost = async(slug) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)

//     if(!res.ok) throw new Error("Something wen wrong")

//     return res.json()
// }

const SinglePostPage = async({params}) => {
    const {slug} = params
    // const post = await getPost(slug)
    const post = await getSinglePost(slug)
    console.log(post)

    console.log("params",params)
    return (
        <div className="flex gap-[80px]">
            <div className="flex-1 relative h-[calc(100vh-170px)]">
                <Image src={"https://images.pexels.com/photos/17853183/pexels-photo-17853183/free-photo-of-close-up-of-wet-light-pink-roses-in-a-garden-after-rain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} fill alt=""
                className=" object-cover"/>
            </div>

            <div className="flex-[2_1_0%] gap-4 flex flex-col">
                <h1 className="text-2xl font-semibold">{post?.title}</h1>
                <div className="flex gap-[20px] h-[50px]">
                    <Image src={"https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg"} alt=""
                        width={50}
                        height={50}
                        className=" rounded-[50%] object-cover"/>
                    
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