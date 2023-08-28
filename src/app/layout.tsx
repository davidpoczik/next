import Header from './components/header'
import './globals.css'
import StoreProvider from './store/authProvider'
import { getUserFromCookie } from '@/lib/cookies'



export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <body>
        <StoreProvider initialState={getUserFromCookie()}>
          <Header></Header>
          {children}
        </StoreProvider>
      </body>
    </html>
  )
}
