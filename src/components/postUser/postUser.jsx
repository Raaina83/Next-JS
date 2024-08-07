// const getUser = async(userId) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

import { getUser } from "@/lib/data"
import Image from "next/image"

//     if(!res.ok) throw new Error("error")

//     return res.json()
// }

const PostUser = async({userId}) => {
    // const user = await getUser(userId)
    const user = await getUser(userId)
  return (
    <>
        <Image src={user.profile ? user.profile : '/noavatar.png'} alt=""
                width={50}
                height={50}
                className=" rounded-[50%] object-cover"/>

        <div className="flex flex-col">
            <span>Author</span>
            <span>{user?.userName}</span>
        </div>

        <div className="flex flex-col">
            <span>Published</span>
            <span>01.06.2022</span>
        </div>
    </>
  )
}

export default PostUser