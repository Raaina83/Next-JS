import Link from "next/link"
import Links from "./Links"
import { auth } from "@/lib/auth"

const Navbar = async() => {
  // const session = await auth()
  // console.log("session",session)
  return (
    <div className="flex md:justify-center items-center h-[70px] ">
      <div className="md:w-[30%] text-3xl font-bold lg:w-[50%]"><Link href={"/"}>Logo</Link></div>
      <Links 
      // session={session}
      />
    </div>
  )
}

export default Navbar