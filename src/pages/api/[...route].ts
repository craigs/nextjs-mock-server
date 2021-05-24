import type { NextApiRequest, NextApiResponse } from 'next'
import { findService, serviceName } from '~lib'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const service = await findService(req)

  if (!service) {
    res
      .status(501)
      .json({
        message: 'the requested handler was not found',
        route: req.url,
        service: serviceName(req)
      })

    return
  }

  service(req, res)
}

export default handler
