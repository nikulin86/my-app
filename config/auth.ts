import { signIn } from 'next-auth/react';
import type { AuthOptions, User } from "next-auth"
import GoogleProvider from "next-auth/providers/google";
// для ввода логина и пароля
import Credentials from "next-auth/providers/credentials";
import { users } from '@/data/users';

export const authConfig: AuthOptions = {
    providers: [
        GoogleProvider ({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            // secret: process.env.NEXTAUTH_SECRET!
        }),
        Credentials({
            credentials: {
                email: {label: "email", type: "email", required: true},
                password: {label: "password", type: "password", required: true},
            },
            // проверяет авторизованы мы или нет
            async authorize(credentials) {
                 if(!credentials?.email || !credentials?.password) return null
                
                 const currentUser = users.find(user => user.email === credentials.email);


                 if (currentUser && currentUser.password === credentials.password) {
                    const { password, ...userWithoutPass} = currentUser;

                    return userWithoutPass as User;
                 }

                 return null
            }
        })
    ],
    pages: {
        signIn: '/signin'
    }
}