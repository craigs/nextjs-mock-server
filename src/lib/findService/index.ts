import type { NextApiRequest, NextApiResponse } from 'next'
import { serviceName } from '../serviceName'
interface Service {
  (req: NextApiRequest, res: NextApiResponse): any
}

export const findService = async (req: NextApiRequest): Promise<Service> => {
  try {
    return (await import(`../../services/${serviceName(req)}`)).default
  } catch {
    return
  }
}
