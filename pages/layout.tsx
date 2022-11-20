import { SessionProvider } from 'next-auth/react'
import '../styles/globals.css'

type props = {
    children: JSX.Element
}

export default function RootLayout({ children }: props) {
    return (
        <html>
            <head></head>
            <body>
                <SessionProvider>{children}</SessionProvider>
            </body>
        </html>
    )
}