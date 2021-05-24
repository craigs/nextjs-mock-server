import type { NextApiRequest, NextApiResponse } from 'next'
import { findService } from '~lib/findService'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const service = await findService(req)

  if (!service) {
    res
      .status(501)
      .json({
        message: 'the requested handler was not found'
      })

    return
  }

  service(req, res)
}

export default handler
