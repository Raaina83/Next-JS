import Image from "next/image"

const AboutPage = () => {
    return (
        <div className="flex gap-[100px]">
            <div className="flex-1 flex flex-col gap-8">
                <p className=" text-blue-600 font-bold text-lg">About agency</p>
                <h1 className="text-4xl font-extrabold">We create digital ideas that are bigger, bolder, braver and better.</h1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sit cum odit praesentium veritatis incidunt illum, ex sunt sint non, minus veniam voluptatum voluptas illo maxime. Consequuntur ab architecto reiciendis.</p>

                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-blue-600 font-semibold text-xl">10K+</p>
                        <p>Years of experience</p>
                    </div>
                    <div>
                        <p className="text-blue-600 font-semibold text-xl">10K+</p>
                        <p>Years of experience</p>
                    </div>
                    <div>
                        <p className="text-blue-600 font-semibold text-xl">10K+</p>
                        <p>Years of experience</p>
                    </div>
                </div>
            </div>
            <div className="relative h-[500px] flex-1">
                <Image src={'/about.png'} alt="" fill/>
            </div>
        </div>
    )
}

export default AboutPage