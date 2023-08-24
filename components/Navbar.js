import Link from "next/link";
import { useSession, signIn, signOut } from 'next-auth/react'

export default function Navbar() {
  const { data: session } = useSession()
  return (
    <nav className="header"> 
        <h1 className="logo">
            <a href="#">Next Auth</a>
        </h1>
        <ul className={`main-nav`}>
            <li>
                <Link href="/">
                    Home
                </Link>
            </li>
            <li>
                <Link href="/dashboard">
                    Dashboard
                </Link>
            </li>
            <li>
                <Link href="/blog">
                    Blog
                </Link>
            </li>
            <li>
                {
                    !session && (
                        <Link href="/api/auth/signin" onClick={e => { 
                            e.preventDefault()
                            signIn('github')
                        }}>
                            Sign In
                        </Link>
                    )
                }
            </li>
            <li>
                {
                    session && (
                        <Link href="/api/auth/signout" onClick={e => { 
                            e.preventDefault()
                            signOut()
                        }}>
                            Sign Out
                        </Link>
                    )
                }
            </li>
        </ul>
    </nav>
  )
}
