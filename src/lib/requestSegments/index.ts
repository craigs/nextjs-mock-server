import type { NextApiRequest } from 'next'

export const requestSegments = (req: NextApiRequest): string[] => {
  const route = req.query.route
  if (typeof route === 'string') return [route]

  return route
}
