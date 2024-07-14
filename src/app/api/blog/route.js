import connectToDB from "@/lib/connectTodb"
import { Post } from "@/lib/models"
import { NextResponse } from "next/server"

export const GET = async() => {
    try {
        connectToDB()
        const res = await Post.find()

        return NextResponse.json(res)
    } catch (error) {
        console.log(error)
    }
}