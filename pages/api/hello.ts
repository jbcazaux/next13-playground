// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export async function getHello(name: string) {
  const data = await Promise.resolve(`Hello ${name}`)
  return data
}

export default async (
    req: NextApiRequest,
    res: NextApiResponse<Data>
) => {
  const data = await getHello('default world')
  res.status(200).json({ name: data })
}
