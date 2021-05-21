import { NextApiRequest, NextApiResponse } from "next"

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res
    .status(200)
    .json({
      firstName: 'Craig',
      lastName: 'Sullivan'
    })
}

export default handler
