import { signIn, signOut, useSession } from 'next-auth/react'
import App from '../components/app'

export default function HomePage() {
    const session = useSession()

    return (
        <div>
            {!session
            ? <button onClick={() => signIn()}>Sign in with Discord</button>
            : <div>
                <App/>
                <button onClick={() => signOut()}>Sign out</button>
            </div>}
        </div>
    )
}