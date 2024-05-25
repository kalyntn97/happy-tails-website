import '@/app/ui/globals.css'
import { mulish } from '@/app/ui/fonts'
import TopNav from '../components/topnav'

export const metadata = {
  title: "Happy Tails",
  description: "A pet app",
  icons: {
    icon: "/images/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${mulish.className} antialised text-orange-900 h-screen flex flex-col bg-red-50`}>
        <TopNav />
        <div className=''>{children}</div>
      </body>
    </html>
  )
}