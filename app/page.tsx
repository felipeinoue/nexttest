"use client"

import styles from './styles.module.css'
import { get_user } from "@/lib/apicalls";
import { GlobalContext } from "@/lib/global-context";
import { useSession } from "next-auth/react"
import { useContext } from "react";

export default function Index() {
  const { data: session } = useSession()
  const {aaa, bbb} = useContext(GlobalContext);

  const test = async ()=>{
    const user = await get_user()
    console.log(user)
  }

  return (
    <div className={styles.main}>
      HOME PAGE
      <br></br>
      <br></br>
      <div>
        <div>using session</div>
        <div>{session?.token}</div>
      </div>
      <br></br>
      <br></br>
      <div>
        <div>using global var</div>
        <div>{aaa}</div>
        <div>{bbb}</div>
      </div>
      <br></br>
      <br></br>
      <div>
        <div>calling api</div>
        <button onClick={()=>{test()}}>BTN Test</button>
      </div>
      <br></br>
      <br></br>
      <div className={styles.hero}>
        <div>Using next module.CSS</div>
      </div>
      <br></br>
      <br></br>
      <div>image source example</div>
      <img src='/instagram.svg'></img>
      <br></br>
      <br></br>
      <div className={styles.facebook}>class background image example</div>
    </div>
  )
}
