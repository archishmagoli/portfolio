export const metadata = {
  title: 'Archie Goli',
  description: 'Developer Portfolio',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
