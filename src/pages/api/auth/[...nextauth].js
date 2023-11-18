import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
    providers:[
       GoogleProvider({
        clientId:process.env.CLIENT_ID,
        clientSecret:process.env.CLIENT_SECRET,
       }) 
    ]
}
export default NextAuth(authOptions)