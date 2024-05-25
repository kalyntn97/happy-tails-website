import '@/app/ui/globals.css'
import { mulish } from '@/app/ui/fonts'
//components
import TopNav from '@/components/TopNav'
import ThemeProvider from '@/components/ThemeProvider'
import Footer from '@/components/Footer'

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
      <body className={`${mulish.className} antialised text-orange-900 min-h-screen w-screen flex flex-col bg-red-50 dark:bg-gray-800 dark:text-white`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
          <TopNav />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}