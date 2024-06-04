import Image from "next/image"
import Link from "next/link"

const PostCard = () => {
  return (
    <div className="flex flex-col h-[500px]">
        <div className="flex relative">
            <div className="relative h-[400px] w-[90%]">
                <Image src={"https://images.pexels.com/photos/17853183/pexels-photo-17853183/free-photo-of-close-up-of-wet-light-pink-roses-in-a-garden-after-rain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} fill className=" object-cover"/>
            </div>
            <span className="text-sm rotate-[270deg] w-[10%] m-auto">4NOV2024</span>
        </div>
        <div className="flex flex-col">
            <h2>Title</h2>
            <p>Description</p>
            <Link href={"/blog/post"}>Read more...</Link>
        </div>
    </div>
  )
}

export default PostCard