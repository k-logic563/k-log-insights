import { useState } from 'react'
import { AxiosResponse } from 'axios'

import { Props } from '@/pages'

export const useProgress = () => {
  const [progressRate, setProgressRate] = useState(0)

  const progressPromise = (promises: Promise<AxiosResponse<Props>>[]) => {
    const len = promises.length
    let progress = 0

    function tick(promise: Promise<AxiosResponse<Props>>) {
      promise.then(() => {
        progress++
        setProgressRate(Math.round((progress / len) * 100))
      })
      return promise
    }

    return Promise.allSettled(promises.map(tick))
  }

  return {
    progressPromise,
    progressRate,
    setProgressRate,
  }
}
