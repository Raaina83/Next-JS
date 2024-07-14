import connectToDB from "./connectTodb"
import { Post, User } from "./models"
import { unstable_noStore as noStore } from "next/cache"

// const posts = [
//     {
//         userId: 1,
//         id: 1,
//         title: "jwgui dwguo",
//         body: "bcuig jwugu bdiwugu hduiwh"
//     },
//     {
//         userId: 2,
//         id: 2,
//         title: "jwgui dwguo",
//         body: "bcuig jwugu bdiwugu hduiwh"
//     },
//     {
//         userId: 1,
//         id: 3,
//         title: "jwgui dwguo",
//         body: "bcuig jwugu bdiwugu hduiwh"
//     },
//     {
//         userId: 3,
//         id: 4,
//         title: "jwgui dwguo",
//         body: "bcuig jwugu bdiwugu hduiwh"
//     },
//     {
//         userId: 2,
//         id: 5,
//         title: "jwgui dwguo",
//         body: "bcuig jwugu bdiwugu hduiwh"
//     },
// ]

// const users = [
//     {
//         id:1,
//         name: "Raaina"
//     },
//     {
//         id:2,
//         name: "Priya"
//     },
//     {
//         id:3,
//         name: "Preti"
//     }
// ]

export const getPosts = async () => {
    try {
        connectToDB()
        const posts = Post.find({})
        return posts
    } catch (error) {
        console.log(error)
    }
}

export const getSinglePost = async(slug) => {
    try {
        connectToDB()
        const post = Post.findOne({ slug })
        return post
    } catch (error) {
        console.log(error)
    }
}

export const getUser = async(userId) => {
    noStore()
    try {
        connectToDB()
        const user = User.findById(userId)
        return user
    } catch (error) {
        console.log(error)
    }
}

export const getAllUsers = async(userId) => {
    try {
        connectToDB()
        const users = User.find({})
        return users
    } catch (error) {
        console.log(error)
    }
}