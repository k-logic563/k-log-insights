import { ResponseResolver, MockedRequest, restContext } from 'msw'
import { errorResponse } from '../../mocks'

const get: ResponseResolver<MockedRequest, typeof restContext> = (
  req,
  res,
  ctx
) => {
  return res(ctx.status(500), ctx.json(errorResponse))
}

export default { get }
