import Link from 'next/link'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
      <header className='h-24 bg-black text-white text-center flex items-center justify-center'>
        <h1 className='text-4xl font-bold'>Next Js Image Testing</h1>
        <Link href="/">Home</Link> 
        <Link href="/test2">Test2</Link> 
      </header>
        {children}
      </body>
    </html>
  )
}
