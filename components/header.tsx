import Link from "next/link"
import { SignIn, SignOut } from "./auth-components"
import { auth } from "@/auth"

export default async function Header() {
  const session = await auth()

  return (
    <header>
      <div>
        {
          !session?.user ?
          (
            <SignIn />
          )
          :
          (
            <SignOut />
          )
        }
        <Link href="/">home</Link>
        <Link href="/page1">page1</Link>
      </div>
      <hr></hr>
    </header>
  )
}
