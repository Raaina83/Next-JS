"use client"

import Link from "next/link"
import {usePathname, useRouter, useSearchParams } from "next/navigation"

const NavigationTestPage = () => {
  //CLIENT SIDE NAVIGATION

  const router = useRouter()
  const path = usePathname()
  const searchParam = useSearchParams()

  const q = searchParam.get("q")

  console.log(q)

  const handleClick = () => {
    router.push("/")
    // router.refresh()
    // router.back()
    // router.forward()
    // router.replace("/")
  }
  return (
    <div>
      <Link href={"/"}>Home</Link>
      <button 
      onClick={handleClick}
      className="ms-8">Click here and wroteeee</button>
    </div>
  )
}

export default NavigationTestPage