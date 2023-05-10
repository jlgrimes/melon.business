import { font } from '@/styles/fonts'
import './globals.css'

export const metadata = {
  title: 'melon',
  description: 'melon business',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
