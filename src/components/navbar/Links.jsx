"use client"

import { handleLogout } from "@/lib/action"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const Links = () => {
    const pathName = usePathname()
    const [open, setOpen] = useState(false)

    const linkClass = "${pathName === link.path? 'bg-white rounded-full text-black': '} hover:rounded-full hover:bg-white hover:text-black px-4 py-1"


    const links = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Contact",
            path: "/contact"
        },
        {
            title: "Blog",
            path: "/blog"
        },
        // {
        //     title: "Admin",
        //     path: "/admin"
        // },
        // {
        //     title: "Logout",
        //     path: "/logout"
        // }
        
    ]
    const session = true
    const isAdmin = true
  return (
    <>
        <div className="hidden md:flex md:items-center md:justify-between md:w-[70%] lg:w-[50%]">
        {links.map((link, index) => (
            <Link 
                href={link.path} 
                key={index} 
                className={`${linkClass} ${pathName === link.path && "bg-white rounded-full text-black"} `}
                >{link.title}
            </Link>
        ))}

        {session ? (
            <>
            {isAdmin && <Link href={"/admin"} className={`${linkClass} ${pathName === "/admin" && "bg-white rounded-full text-black"} `}>Admin</Link>}
            <form action={handleLogout} href="/logout">
                <button className={`${linkClass} ${pathName === "/logout" && "bg-white rounded-full text-black"} `}>Logout</button>
            </form>
            </>
        ): (
            <Link href={"/logout"} className={`${linkClass} ${pathName === "/logout" && "bg-white rounded-full text-black"} `}>
                Logout
            </Link>
        )}

        </div>
         <button onClick={() => setOpen((prev) => !prev)} className="block md:hidden absolute right-8">Menu</button>

         {open && (
            <div className={` absolute top-[70px] right-[0px] w-[30%] h-[calc(100vh-70px)] flex flex-col items-center justify-center bg-slate-700`}>
                {links.map((link, index) => (
                <Link 
                    href={link.path} 
                    key={index}
                    className={`${linkClass} my-2 ${pathName === link.path && "bg-white rounded-full text-black"}`}
                    >{link.title}
                </Link>))}
            </div>
         )}
    </>
  )
}

export default Links