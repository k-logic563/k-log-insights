import { Box } from '@mantine/core'
import React from 'react'

import * as styles from '@/styles'

type Props = {
  score: string
  color: string
}

export const Score: React.FC<Props> = ({ score, color }) => {
  return (
    <Box
      data-testid="score"
      css={styles.form.score(score, color)}
      data-score={score}
    />
  )
}
