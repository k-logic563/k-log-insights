import { ResponseResolver, MockedRequest, restContext } from 'msw'
import { response } from '../../mocks'

const get: ResponseResolver<MockedRequest, typeof restContext> = (
  req,
  res,
  ctx
) => {
  return res(ctx.status(200), ctx.json(response))
}

export default { get }
