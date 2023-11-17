import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
    providers:[
       GoogleProvider({
        clientId:'635547955951-sgs0qingksnff5endrnr2r7fn4fu6spk.apps.googleusercontent.com',
        clientSecret:'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',
       }) 
    ]
}
export default NextAuth(authOptions)