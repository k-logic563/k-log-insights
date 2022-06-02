import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import axios from 'axios'

import Form from '@/components/organisms/applications/Form'
import Result from '@/components/organisms/applications/Result'
import Progress from '@/components/organisms/Progress'

import { useProgress } from '@/hooks/useProgress'
import { wait } from '@/utils/wait'
import * as types from '@/types'

export type Props = types.api.Response | types.api.ErrorResponse

const Main: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [urls, setUrls] = useState<string[]>([])
  const [results, setResult] = useState<Props[]>([])
  const { handleSubmit } = useFormContext<types.form.FormValues>()
  const { progressRate, setProgressRate, progressPromise } = useProgress()

  const onSubmit = async (data: types.form.FormValues) => {
    // 初期化処理
    results.length = 0
    setProgressRate(0)
    setLoading(true)
    setUrls(data.items.map((x) => x.url))

    // apiコール処理を配列に格納
    const promises = data.items.map((x) => {
      return axios.get<Props>(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/insight?url=${x.url}&strategy=${data.strategy}`
      )
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
  }

  return !loading ? (
    <>
      <div className="py-5 bg-white">
        <div className="container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Form />
          </form>
        </div>
      </div>
      {results.length !== 0 && (
        <div className="container py-5" data-cy="result">
          <Result urls={urls} results={results} />
        </div>
      )}
    </>
  ) : (
    <div className="container">
      <Progress now={progressRate} />
    </div>
  )
}

export default Main
