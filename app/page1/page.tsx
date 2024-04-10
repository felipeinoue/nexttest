"use client"

import { get_user } from "@/lib/apicalls";
import { GlobalContext } from "@/lib/context";
import { useSession } from "next-auth/react"
import { useContext } from "react";

export default function Page1() {
  const { data: session } = useSession()
  const {aaa, bbb} = useContext(GlobalContext);

  const test = async ()=>{
    const user = await get_user()
    console.log(user)
  }

  return (
    <>
      page1
      <br></br>
      <div>{session?.token}</div>
      <div>{aaa}</div>
      <div>{bbb}</div>
      <br></br>
      <button onClick={()=>{test()}}>BTN Test</button>
    </>
  )
}
