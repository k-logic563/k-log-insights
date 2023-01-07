import { Header, Flex, Title, ActionIcon } from '@mantine/core'
import { IconBrandGithub } from '@tabler/icons'

export const AppHeader = () => {
  return (
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
  )
}
