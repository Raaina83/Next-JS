import Image from "next/image"
import Link from "next/link"

const PostCard = ({post}) => {
  return (
    <div className="flex flex-col h-[500px] mb-[80px]">
        <div className="flex relative">
            <div className="relative h-[400px] w-[90%]">
                <Image src={post.img} fill className=" object-cover"/>
            </div>
            <span className="text-sm rotate-[270deg] w-[10%] m-auto">4NOV2024</span>
        </div>
        <div className="flex flex-col">
            <h2 className=" text-md font-bold">{post.title}</h2>
            <p className="text-sm text-gray-500">{post.body}</p>
            <Link href={`/blog/${post.slug}`}>Read more...</Link>
        </div>
    </div>
  )
}

export default PostCard