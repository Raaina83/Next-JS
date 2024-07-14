import connectToDB from "@/lib/connectTodb"

const { Post } = require("@/lib/models")
const { NextResponse } = require("next/server")

export const GET = async(request, {params}) => {
    const {slug} = params

    try {
        connectToDB()
        const res = await Post.findOne({slug})

        return NextResponse.json(res)
    } catch (error) {
        console.log(error)
    }
}

export const DELETE = async(request, {params}) => {
    const {slug} = params

    try {
        connectToDB()
        await Post.deleteOne(slug)

        return NextResponse.json("Post deleted")
    } catch (error) {
        console.log(error)
    }
}