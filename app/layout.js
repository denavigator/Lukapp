import '../styles/globals.css'
export const metadata = {
  title: 'LUKTECH Hub – Free Tech Services',
  description: 'Free tech services and WhatsApp support',
  manifest: '/manifest.json',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
    }
