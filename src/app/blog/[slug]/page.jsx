import Image from "next/image"

const SinglePostPage = ({params}) => {
    console.log(params)
    return (
        <div className="flex gap-[80px]">
            <div className="flex-1 relative h-[calc(100vh-170px)]">
                <Image src={"https://images.pexels.com/photos/17853183/pexels-photo-17853183/free-photo-of-close-up-of-wet-light-pink-roses-in-a-garden-after-rain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} fill alt=""
                className=" object-cover"/>
            </div>

            <div className="flex-[2_1_0%] gap-4 flex flex-col">
                <h1 className="text-2xl font-semibold">Title</h1>
                <div className="flex gap-[20px] h-[50px]">
                    <Image src={"https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg"} alt=""
                        width={50}
                        height={50}
                        className=" rounded-[50%] object-cover"/>
                    <div className="flex flex-col">
                        <span>Author</span>
                        <span>Raaina</span>
                    </div>
                    <div className="flex flex-col">
                        <span>Published</span>
                        <span>01.06.2022</span>
                    </div>
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae culpa soluta ullam, exercitationem qui error quas itaque, eum temporibus ex dolor, quo nam! Quod molestias et dicta amet. Qui, aperiam.
                </div>
            </div>
        </div>
    )
}

export default SinglePostPage