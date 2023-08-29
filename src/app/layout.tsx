import Header from './components/header'
import './globals.css'
import StoreProvider from './store/authProvider'
import { getUserFromCookie } from '@/lib/cookies'
import { CharacterProvider } from '@/app/contexts/CharacterContext'

import type { Metadata } from 'next'
import Footer from './components/footer'
export const metadata: Metadata = {
  title: 'star wars character search',
  description: 'search with a keyword and check your characters info'
}

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
        <CharacterProvider>
          <Header></Header>
          {children}
          <Footer></Footer>
          </CharacterProvider>
        </StoreProvider>
      </body>
    </html>
  )
}
