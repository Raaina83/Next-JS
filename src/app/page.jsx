import Image from "next/image"

const Home = () => {
    return (
        <div className="flex gap-[100px]">
            <div className=" flex-1">
                <h1 className="text-7xl font-bold">Creative Thoughts.. Agency</h1>
                <p className="text-sm mt-8 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias accusamus provident, enim incidunt dolore recusandae ipsa qui consequatur minus, nobis ullam sit vero laudantium. Esse fugiat alias eveniet quo magni.</p>
                <div className="flex gap-4">
                <button className="w-[120px] h-[55px] bg-blue-400 rounded-lg p-2 hover:shadow-lg hover:shadow-blue-400/50">Learn 
                More</button>
                <button className="w-[120px] h-[55px] bg-white rounded-lg text-black p-2 hover:shadow-lg hover:shadow-white/50">
                    Contact</button>
                </div>
            </div>
            <div className="relative h-[500px] flex-1">
                <Image src={"/hero.gif"} fill/>
            </div>
        </div>
    )
}

export default Home