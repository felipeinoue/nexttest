import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
// import GitHub from "next-auth/providers/github"

import type { NextAuthConfig } from "next-auth"

export const config = {
  theme: {
    logo: "https://next-auth.js.org/img/logo/logo-sm.png",
  },
  providers: [

    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      // credentials: {
      //   email: { label: "email", type: "email", placeholder: "jsmith@example.com" },
      //   password: { label: "Password", type: "password" },
      // },
      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)

        // main api 1.0
        const res = await fetch("https://dev.proj-mgmt.com/main/isapi.dll/login", {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        })
        const user = await res.json()

        // api response
        // [
        //   {
        //     token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJQcm9qLW1nbXQ9JSIsImlhdCI6MTY5NjMzMjQ4OSwiZXhwIjoxNjk4OTI0NDg5LCJzdWIiOiJkYXRhOix1c2VyX2lkPTc1LHBvcnRhbD1uaWwsY2xpZW50X2lkPW5pbCJ9.5NRqfNU0iaAeJ-D8hP-7t-MKciYkYfN36EgFeaUpM-g",
        //     portals: [
        //       {
        //         id: "9",
        //         name: "info",
        //       },
        //       {
        //         id: "10",
        //         name: "king",
        //       },
        //     ],
        //   },
        // ]

        // If no error and we have user data, return it
        if (res.ok && user) {
          return user[0]
        }

        // Return null if user data could not be retrieved
        return null
      }
    }),
    // GitHub,
  ],
  basePath: "/auth",
  callbacks: {
    async session({session, token}){
      // session.user.token = token
      return {...session, ...token}
    },

    authorized({ request, auth }) {
      const { pathname } = request.nextUrl
      // if (pathname === "/middleware-example")
      //   return !!auth
      // else
      //   return true
      if (pathname === "/auth/callback/credentials") //proteger todas as rotas exceto essa para fazer login /FDI
        return true
      else
        return !!auth
    },

    jwt({ token, trigger, session, user }) {
      if (trigger === "update") token.name = session.user.name
      return {...token, ...user}
    },

  },
  pages: {
    signIn: '/auth/login',
  },
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth(config)
