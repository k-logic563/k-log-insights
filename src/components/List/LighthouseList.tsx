import { Grid, Text } from '@mantine/core'
import React from 'react'

import { lighthouseItems } from '@/constants'
import * as styles from '@/styles'
import * as types from '@/types'

type Props = {
  lighthouseResult: types.api.SuccessResponse['data']['lighthouseResult']
}

export const LighthouseList: React.FC<Props> = ({ lighthouseResult }) => {
  return (
    <Grid>
      {lighthouseItems.map((x, i) => (
        <Grid.Col span={4} key={i}>
          <Text
            css={styles.content.listTitle(
              lighthouseResult.audits[x.prop].color
            )}
          >
            {x.title}
          </Text>
          <Text color={lighthouseResult.audits[x.prop].color}>
            {lighthouseResult.audits[x.prop].displayValue}
          </Text>
        </Grid.Col>
      ))}
    </Grid>
  )
}
