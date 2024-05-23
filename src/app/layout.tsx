import '@/app/ui/globals.css';
import { mulish } from '@/app/ui/fonts';
import TopNav from './ui/topnav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${mulish.className} antialised text-black h-screen bg-white flex flex-col`}>
        <div>
          <TopNav />
        </div>
        <div>{children}</div>
      </body>
    </html>
  )
}