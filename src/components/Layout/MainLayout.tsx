import React from 'react'

import Header from './Header'
import Footer from './Footer'

type Props = {
  children: React.ReactNode
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
