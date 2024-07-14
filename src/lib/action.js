"use server"
import { revalidatePath } from "next/cache"
import connectToDB from "./connectTodb"
import { Post } from "./models"
import { signIn, signOut } from "./auth"

export const submitPOst = async(formData) => {
    // const title = formData.get("Title")
    // const description = formData.get("Description")
    // const image = formData.get("image")
    const {title, description, img, slug, userId} = Object.fromEntries(formData)

    try {
        connectToDB()
        const newPost = new Post({
            title,
            description,
            slug,
            userId

        })
        await newPost.save()
        revalidatePath("/blog")
        console.log("saved to db")
    } catch (error) {
        console.log(error)
    }
}

export const deletePost = async(id) => {
    try {
        connectToDB()

        await Post.findByIdAndDelete(id)
        revalidatePath("/blog")
    } catch (error) {
        console.log(error)
    }
}

export const handleGithubLogin = async() => {
    await signIn("github")
}

export const handleLogout = async() => {
    await signOut()
}