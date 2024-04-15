import "./globals.css"
import type { Metadata } from "next"
import Footer from "@/components/footer/footer"
import Header from "@/components/header/header"
import { auth } from "auth"
import { SessionProvider } from "next-auth/react"
import { GlobalProvider } from '../lib/global-context'

export const metadata: Metadata = {
  title: "Base project",
  description: "This is a base project...",
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
