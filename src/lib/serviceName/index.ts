import type { NextApiRequest } from 'next'
import { constantise } from '../constantise'
import { requestSegments } from '../requestSegments'

export const serviceName = (req: NextApiRequest) => {
  const segments = requestSegments(req)
  return segments.map(segment => constantise(segment)).join('/')
}
