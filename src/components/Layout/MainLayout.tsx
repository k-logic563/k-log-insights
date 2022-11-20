import React from 'react'
import {
  AppShell,
  Header,
  Footer,
  Text,
  Flex,
  Title,
  ActionIcon,
} from '@mantine/core'
import { IconBrandGithub } from '@tabler/icons'

type Props = {
  children: React.ReactNode
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <AppShell
      padding="lg"
      header={
        <Header height={70} py="sm" px="lg">
          <Flex justify="space-between" align="center">
            <Title order={1}>k-log-insights</Title>
            <ActionIcon
              variant="subtle"
              component="a"
              href="https://github.com/k-logic563/k-log-insights"
              target="_blank"
            >
              <IconBrandGithub size={24} />
            </ActionIcon>
          </Flex>
        </Header>
      }
      footer={
        <Footer height={50} p="sm">
          <Text size={12} align="center">
            &copy; {new Date().getFullYear()} k-log-insights
          </Text>
        </Footer>
      }
    >
      {children}
    </AppShell>
  )
}
