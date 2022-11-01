import React from 'react'

import Header from './Header'
import Footer from './Footer'

import * as styles from '@/styles'

type Props = {
  children: React.ReactNode
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div css={styles.layout.wrapper}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
