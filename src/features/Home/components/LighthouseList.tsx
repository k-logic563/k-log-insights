import React from 'react'
import { Grid, Text } from '@mantine/core'

import { lighthouseItems } from '@/constants'

import * as types from '@/types'
import * as styles from '@/styles'

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
