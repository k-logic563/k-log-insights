import React from 'react'
import { Footer, Text } from '@mantine/core'

export const AppFooter = () => {
  return (
    <Footer height={50} p="sm">
      <Text size={12} align="center">
        &copy; {new Date().getFullYear()} k-log-insights
      </Text>
    </Footer>
  )
}
