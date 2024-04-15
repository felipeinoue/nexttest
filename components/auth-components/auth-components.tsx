import { signIn, signOut } from "auth"


export function SignIn({
  provider,
  ...props
}: { provider?: string }) {
  return (
    <form
      action={async () => {
        "use server"
        await signIn(provider)
      }}
    >
      <button {...props}>Sign In</button>
      {/* <Button {...props}>Sign In</Button> */}
    </form>
  )
}

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
      className="w-full"
    >
      <button>Sign Out</button>
      {/* <Button variant="ghost" className="w-full p-0" {...props}>
        Sign Out
      </Button> */}
    </form>
  )
}

// export function SignIn({
//   provider,
//   ...props
// }: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
//   return (
//     <form
//       action={async () => {
//         "use server"
//         await signIn(provider)
//       }}
//     >
//       <Button {...props}>Sign In</Button>
//     </form>
//   )
// }

// export function SignOut(props: React.ComponentPropsWithRef<typeof Button>) {
//   return (
//     <form
//       action={async () => {
//         "use server"
//         await signOut()
//       }}
//       className="w-full"
//     >
//       <Button variant="ghost" className="w-full p-0" {...props}>
//         Sign Out
//       </Button>
//     </form>
//   )
// }
