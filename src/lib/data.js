const users = [
    {
        id:1,
        name: "Raaina"
    },
    {
        id:2,
        name: "Priya"
    },
    {
        id:3,
        name: "Preti"
    }
]

const posts = [
    {
        userId: 1,
        id: 1,
        title: "jwgui dwguo",
        body: "bcuig jwugu bdiwugu hduiwh"
    },
    {
        userId: 2,
        id: 2,
        title: "jwgui dwguo",
        body: "bcuig jwugu bdiwugu hduiwh"
    },
    {
        userId: 1,
        id: 3,
        title: "jwgui dwguo",
        body: "bcuig jwugu bdiwugu hduiwh"
    },
    {
        userId: 3,
        id: 4,
        title: "jwgui dwguo",
        body: "bcuig jwugu bdiwugu hduiwh"
    },
    {
        userId: 2,
        id: 5,
        title: "jwgui dwguo",
        body: "bcuig jwugu bdiwugu hduiwh"
    },
]

export const getPosts = async () => {
    return posts
}

export const getSinglePost = async(id) => {
    return posts.find((post) => post.id === parseInt(id))
}

export const getUser = async(userId) => {
    return users.find((user) => user.id === userId)
}