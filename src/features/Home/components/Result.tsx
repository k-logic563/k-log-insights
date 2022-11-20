import React from 'react'
import { Box, Title, Text, Grid, Paper } from '@mantine/core'

import { LighthouseList } from './LighthouseList'
import { ImproveList } from './ImproveList'
import Score from '@/components/Elements/Score'

import * as types from '@/types'

type Props = {
  results: types.api.DataResponses[]
}

const isSuccessResponse = (
  data: types.api.DataResponses
): data is types.api.SuccessResponse => {
  return data.status === 200
}

export const Result: React.FC<Props> = ({ results }) => {
  return (
    <Grid gutter={32}>
      {results.map((x, i) =>
        isSuccessResponse(x) ? (
          <Grid.Col key={x.data.id}>
            <Paper shadow="md" py="lg" px="xl" withBorder>
              <Title
                data-test-id={`cy-title-${i}`}
                align="center"
                order={2}
                mb="1em"
              >
                {x.data.id}
              </Title>
              <Box mb={32}>
                <Score
                  score={`${x.data.totalScore}`}
                  color={x.data.totalScoreColor}
                />
              </Box>
              <Box mb={48}>
                <LighthouseList lighthouseResult={x.data.lighthouseResult} />
              </Box>
              <Title order={3} mb="1em">
                改善できる項目
              </Title>
              <ImproveList results={x} />
            </Paper>
          </Grid.Col>
        ) : (
          <Grid.Col key={i}>
            <Paper shadow="md" py="lg" px="xl" withBorder>
              <Text color="red" align="center">
                {x.data?.error?.message ?? 'エラーが発生しました'}
              </Text>
            </Paper>
          </Grid.Col>
        )
      )}
    </Grid>
  )
}
