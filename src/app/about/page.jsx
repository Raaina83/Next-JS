import Image from "next/image"

const AboutPage = () => {
    return (
        <div>
            <div className="relative w-[100% h-[500px]">
            <Image src={'/about.png'} alt="" fill/>
            </div>
        </div>
    )
}

export default AboutPage