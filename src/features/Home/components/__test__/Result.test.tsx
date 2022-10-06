import { render } from '@testing-library/react'
import axios from 'axios'

import { Result } from '@/features/Home/components/Result'
import { DataProps } from '@/types/api'
import { urls } from '../mocks'
import { server } from '../mocks/server'

describe('レンダリング表示', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test('URL表示がサイドバー、リストの2つ', async () => {
    const response = await axios.get<DataProps>('/api/insights')
    const { getAllByText, getByTestId } = render(
      <Result urls={urls} results={[response]} />
    )
    expect(getByTestId('sidebar-url-0').textContent).toBe(
      'https://iwtttter.tech'
    )
    expect(getByTestId('title-0').textContent).toBe('https://iwtttter.tech')
    expect(getAllByText('https://iwtttter.tech').length).toBe(2)
  })

  test('スコア表示', async () => {
    const response = await axios.get<DataProps>('/api/insights')
    const { getByTestId } = render(<Result urls={urls} results={[response]} />)
    expect(getByTestId('score').dataset.score).toBe('99')
  })

  test('エラーレスポンス表示', async () => {
    const response = axios.get<DataProps>('/api/insights')
    const errorResponse = axios.get<DataProps>('/api/insights/error')
    const promises = await Promise.allSettled([response, errorResponse])
    const formatRes = promises.map((x) => {
      if (x.status === 'fulfilled') {
        return x.value
      }
      return x.reason.response
    })
    const { getByTestId } = render(<Result urls={urls} results={formatRes} />)
    expect(getByTestId('error-text-1').textContent).toBe('エラーが発生しました')
  })
})
