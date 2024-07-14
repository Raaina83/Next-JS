import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import connectToDB from "./connectTodb"
import { User } from "./models"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub({
        clientId: process.env.GITHUB_CLIENT_ID, 
        clientSecret: process.env.GITHUB_CLIENT_SECRET
    })],
    callbacks: {
      async signIn({user, account, profile}){
        console.log("user-->",profile)
        if(account.provider === "github"){
          connectToDB()
          try {
            const user = User.findOne({ email: profile.email })

            if(!user) {
              const newUser = new User({
                userName: profile.name,
                email: profile.email,
                profile: profile.image,

              })

              await newUser.save()
            }
          } catch (error) {
            console.log(error)
            return false
          }
          return true
        }
      }
    }
})