// клиентский компонет
"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react"

type NavLink = {
    label: string;
    href: string;
};


type Props = {
    navLinks: NavLink[];
}

const Navigation = ({ navLinks }: Props) => {
    const pathname = usePathname();
    const session = useSession();

    console.log(session)

    return (
        <div className="links">

            {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                    <Link
                        key={link.label}
                        href={link.href}
                        className={isActive ? "active" : "link"}>
                        {link.label}
                    </Link>)
            })}

            {session?.data && (<Link className="auth__link" href="/profile">Profile
            </Link>)}
            {session?.data ? <Link className="auth__link" href="#" onClick={() => signOut({ callbackUrl: "/" })}>Sing Out
            </Link> : <Link className="auth__link" href="/signin">SingIn</Link>}

        </div>
    )
}


export { Navigation };