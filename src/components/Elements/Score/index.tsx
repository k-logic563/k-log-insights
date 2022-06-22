import React from 'react'

import * as styles from '@/styles'

type Props = {
  score: string
  color: string
}

const Score: React.FC<Props> = ({ score, color }) => {
  return <div css={styles.form.score(score, color)} data-score={score} />
}

export default Score
