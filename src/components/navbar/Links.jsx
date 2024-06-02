"use client"

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
        {
            title: "Admin",
            path: "/admin"
        },
        {
            title: "Logout",
            path: "/logout"
        }
        
    ]
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