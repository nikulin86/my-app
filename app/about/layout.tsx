import Link from "next/link"

// вложенный лайоут
export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <div className="about">
        <h1>About us</h1>
        <ul>
            <li><Link href="/about/contacts">Contacts</Link></li>
            <li><Link href="/about/team">Team</Link></li>
        </ul>
        {children}
        {/* чилдрен это страница лежащая рядом */}
    </div>
  }