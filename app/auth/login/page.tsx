
import { signIn } from "auth"
import styles from './styles.module.css'

export default async function SignInPage() {

  return (
    <div>
      <form
        action={async (formData) => {
          "use server"
          await signIn("credentials", formData)
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


