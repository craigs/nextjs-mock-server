import type { NextApiRequest, NextApiResponse } from 'next'
import { constantise } from '../constantise'

interface Service {
  (req: NextApiRequest, res: NextApiResponse): any
}
export const findService = async (req: NextApiRequest): Promise<Service> => {
  const route = req.query.route
  const routes = (typeof route === 'string') ? [route] : route
  const path = routes.map(segment => constantise(segment)).join('/')

  try {
    return (await import(`../../services/${path}`)).default
  } catch {
    return
  }
}
