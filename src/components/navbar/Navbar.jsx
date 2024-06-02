import Link from "next/link"
import Links from "./Links"

const Navbar = () => {
  return (
    <div className="flex md:justify-center items-center h-[70px] ">
      <div className="md:w-[30%] text-3xl font-bold lg:w-[50%]"><Link href={"/"}>Logo</Link></div>
      <Links/>
    </div>
  )
}

export default Navbar