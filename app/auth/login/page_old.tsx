// "use client"

import { signIn } from "auth"
import styles from './styles.module.css'
// import { useRouter } from "next/router"

export default async function SignInPage() {
  // const searchParams = useSearchParams()
  // const callbackUrl = searchParams.get('callbackUrl')
  // console.log(window.location.origin)
  // const router = useRouter()
  // console.log(router)

  return (
    <div>
      <form
        action={async (formData) => {
          "use server"
          await signIn("credentials", 
            {
              email: "rodrigo@info-rmi.com",
              password: "degade",
              // redirectTo: props.callbackUrl,
              // redirect: false,
              // redirectTo: props.callbackUrl
            }
          )
        }}
      >
        <input 
          name="email" 
          type="email" 
          autoComplete=""
        />
        <input 
          name="password" 
          type="password" 
          autoComplete=""
        />
        <button type="submit">Sign in</button>
      </form>
    </div>
  )
}


