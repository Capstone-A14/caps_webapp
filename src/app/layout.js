import './globals.css'

export const metadata = {
  title: "Cardimetry.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}