import React from 'react'
import { AppShell, Navbar } from '@mantine/core'

import { AppHeader } from './AppHeader'
import { AppForm } from '@/features/Home/components/AppForm'
import { AppFooter } from './AppFooter'

type Props = {
  children: React.ReactNode
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <AppShell
      padding="xl"
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
      header={<AppHeader />}
      navbar={
        <Navbar width={{ base: 360 }} p="lg">
          <AppForm />
        </Navbar>
      }
      footer={<AppFooter />}
    >
      {children}
    </AppShell>
  )
}
