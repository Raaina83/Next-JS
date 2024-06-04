import Image from "next/image"

const SinglePostPage = () => {
    return (
        <div className="flex gap-8 w-[80%] h-[100%]">
            <div className="relative h-[600px] flex-1">
                <Image src={"https://images.pexels.com/photos/17853183/pexels-photo-17853183/free-photo-of-close-up-of-wet-light-pink-roses-in-a-garden-after-rain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} fill/>
            </div>

            <div className="flex-1">
                <h1>Title</h1>
            </div>
        </div>
    )
}

export default SinglePostPage