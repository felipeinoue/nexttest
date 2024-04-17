import Link from "next/link"
import { SignOut } from "../auth-components/auth-components"
import { auth } from "@/auth"

export default async function Header() {
  const session = await auth()

  return (
    <header>
      {
        !session?.user ?
        (
          <></>
        )
        :
        (
          <>
            <SignOut />
            <Link href="/">home</Link>
            <Link href="/page1">page1</Link>
            <hr></hr>
          </>
        )
      }
    </header>
  )
}
