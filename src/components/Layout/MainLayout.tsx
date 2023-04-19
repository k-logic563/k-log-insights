import { AppShell, Navbar } from '@mantine/core'
import React from 'react'

import { AppFooter } from './AppFooter'
import { AppHeader } from './AppHeader'

import { AppForm } from '@/components/Form/AppForm'

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
