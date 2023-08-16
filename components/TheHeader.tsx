import Link from 'next/link'
import { Navigation } from './Navigation'

const navItems = [
    {label: "Home", href: "/"},
    {label: "Blog", href: "/blog"},
    {label: "About", href: "/about"},
]

const TheHeader = () => {
    return (
        <header className='header'>
            {/* <div className='container'>
                <Link href="/">Home</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/about">About</Link>
            </div> */}
            <Navigation navLinks={navItems}/>
        </header>
    )
}

export default TheHeader