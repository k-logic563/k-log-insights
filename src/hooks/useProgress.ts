import { useState } from 'react'
import { AxiosResponse, AxiosError } from 'axios'

export const useProgress = <T extends AxiosResponse | AxiosError>() => {
  const [progressRate, setProgressRate] = useState(0)

  const progressPromise = (promises: Promise<T>[]) => {
    const len = promises.length
    let progress = 0

    function tick(promise: Promise<T>) {
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
