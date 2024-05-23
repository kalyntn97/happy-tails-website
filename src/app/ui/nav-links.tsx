import Link from "next/link"

const links = [
  { name: 'About', href: '/about', icon: '', darkIcon: '' },
  { name: 'Contact', href: '/contact', icon: '', darkIcon: '' },
]

export default function NavLinks() {
  return (
    <>
      {links.map(link => {
        const LinkIcon = link.icon
        return (
          <Link key={link.name} href={link.href}>
            {/* <LinkIcon /> */}
            <p>{link.name}</p>
          </Link>
        )
      })}
    </>
  )
}
