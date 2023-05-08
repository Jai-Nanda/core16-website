
export const metadata = {
    title: 'CORE',
    description: 'MADE WITH <3 BY CORE',
  }
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
          {children}
          </body>
      </html>
    )
  }
  