import React from 'react'

import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'

type Props = {
  children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
