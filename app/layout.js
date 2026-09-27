export const metadata = {
  title: 'GEGH 1.0 Language Observatory',
  description: 'Epistemic and Lexical Audit Engine',
}

export default function RootLayout({ children }) {
  return (
    <html lang="sq">
      <body style={{ margin: 0, padding: 0, background: '#0f172a', color: '#f8fafc' }}>
        {children}
      </body>
    </html>
  )
}
