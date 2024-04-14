import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { auth } from "auth"
import { SessionProvider } from "next-auth/react"
import { GlobalProvider } from '../lib/context'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NextAuth.js Example",
  description:
    "This is an example site to demonstrate how to use NextAuth.js for authentication",
}

export default async function RootLayout({ children }: React.PropsWithChildren) {
  const session = await auth()

  return (
    <html lang="en">
      <GlobalProvider>
        <SessionProvider basePath={"/auth"} session={session}>
            <body>
              <Header />
              <main>{children}</main>
              <Footer />
            </body>
        </SessionProvider>
      </GlobalProvider>
    </html>
  )
}
