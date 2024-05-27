import '@/app/ui/globals.css'
import { mulish } from '@/app/ui/fonts'
//components
import ThemeProvider from '@/components/ThemeProvider'
import Footer from '@/components/Footer'
import TopNavigation from '@/components/TopNavigation'

export const metadata = {
  title: "Happy Tails",
  description: "A pet app",
  icons: {
    icon: "/icons/favicon.ico",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${mulish.className} antialised text-orange-900 min-h-screen max-w-full w-full overflow-x-hidden flex flex-col bg-stone-50 dark:bg-stone-950 dark:text-red-50`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
          <TopNavigation />
          <main className='w-full content-container'>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}