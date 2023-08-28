import Header from './components/header'
import './globals.css'
import StoreProvider from './store/authProvider'
import { getUserFromCookie } from '@/lib/cookies'



export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const userFromCookie = await getUserFromCookie()
  return (
    <html lang="en">
      <body>
        <StoreProvider initialState={userFromCookie}>
          <Header></Header>
          {children}
        </StoreProvider>
      </body>
    </html>
  )
}
