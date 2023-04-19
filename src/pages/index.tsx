import { Progress } from '@mantine/core'
import { useAtomValue } from 'jotai'
import { NextPage } from 'next'

import { Result } from '@/components'
import { loadingStateAtom, progressStateAtom, resultsAtom } from '@/store'

const Home: NextPage = () => {
  const results = useAtomValue(resultsAtom)
  const loading = useAtomValue(loadingStateAtom)
  const progress = useAtomValue(progressStateAtom)

  return (
    <div>
      {loading ? (
        <Progress
          data-test-id="cy-progress"
          value={progress}
          size="lg"
          striped
          animate
        />
      ) : (
        results.length !== 0 && <Result results={results} />
      )}
    </div>
  )
}

export default Home
