import  mongoose  from "mongoose";

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 15
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
    },
    profile: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
}, {timestamps: true})

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        max: 100,
    },
    img: {
        type: String,
    },
    userId: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true
    }
}, {timestamps: true})

export const User = mongoose.models?.User || mongoose.model("User", userSchema)
export const Post = mongoose.models?.Post || mongoose.model("Post", postSchema)