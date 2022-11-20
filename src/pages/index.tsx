import { useState, useCallback } from 'react'
import { NextPage } from 'next'
import { Container, Progress } from '@mantine/core'

import { Result } from '@/features/Home/components/Result'
import { AppForm } from '@/features/Home/components/AppForm'

import { axios } from '@/lib/axios'
import { useProgress } from '@/hooks/useProgress'
import { wait } from '@/utils/wait'
import * as types from '@/types'

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false)
  const [results, setResult] = useState<types.api.DataResponses[]>([])
  const { progressRate, setProgressRate, progressPromise } =
    useProgress<types.api.DataResponses>()

  const onSubmit = useCallback(async (data: types.form.FormValues) => {
    // 初期化処理
    results.length = 0
    setProgressRate(0)
    setLoading(true)

    // apiコール処理を配列に格納
    const promises = data.items.map((x) => {
      return axios.get('api/insights', {
        params: {
          strategy: data.strategy,
          url: x.url,
        },
      })
    })

    // api配列を並列処理させる
    const res = await progressPromise(promises)
    const formatRes = res.map((x) => {
      if (x.status === 'fulfilled') {
        return x.value
      }
      return x.reason.response
    })
    setResult(formatRes)
    // 処理後余裕を持たせて100%表示をさせる
    await wait(1000)
    setLoading(false)
  }, [])

  return (
    <div>
      <Container size="xs">
        <AppForm onSubmit={onSubmit} />
      </Container>
      <Container py={52} size="sm">
        {loading ? (
          <Progress
            data-test-id="cy-progress"
            value={progressRate}
            size="lg"
            striped
            animate
          />
        ) : (
          results.length !== 0 && <Result results={results} />
        )}
      </Container>
    </div>
  )
}

export default Home
