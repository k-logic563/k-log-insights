import { rest } from 'msw'
import data from './api/data'
import error from './api/error'

export const handlers = [
  rest.get('/api/insights', data.get),
  rest.get('/api/insights/error', error.get),
]
