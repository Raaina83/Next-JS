import PostCard from "@/components/postCard/PostCard"

const BlogPage = () => {
    return (
        <div className="flex items-center flex-wrap gap-5 md:justify-between justify-center">
            <div className="lg:w-[30%] md:w-[45%] w-[80%]">
            <PostCard/>
            </div>
            <div className="lg:w-[30%] md:w-[45%] w-[80%]">
            <PostCard/>
            </div>
            <div className="lg:w-[30%] md:w-[45%] w-[80%]">
            <PostCard/>
            </div>
            <div className="lg:w-[30%] md:w-[45%] w-[80%]">
            <PostCard/>
            </div>
        </div>
    )
}

export default BlogPage