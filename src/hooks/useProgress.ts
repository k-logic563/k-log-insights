import { AxiosResponse, AxiosError } from 'axios'
import { useSetAtom } from 'jotai'

import { progressStateAtom } from '@/store'

export const useProgress = <T extends AxiosResponse | AxiosError>() => {
  const setProgressState = useSetAtom(progressStateAtom)

  const progressPromise = (promises: Promise<T>[]) => {
    const len = promises.length
    let progress = 0

    function tick(promise: Promise<T>) {
      promise.then(() => {
        progress++
        setProgressState(Math.round((progress / len) * 100))
      })
      return promise
    }

    return Promise.allSettled(promises.map(tick))
  }

  return {
    progressPromise,
  }
}
