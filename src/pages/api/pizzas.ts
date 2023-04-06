// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { pizzas } from '@/components/04-validating-ajax-data/menu'
// type Data = {
//   name: string
// }

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if(!pizzas) return res.status(404).json({ message:"Pizzas not found"})

    return res.status(200).json({data:pizzas})
  }catch(err) {
    return res.status(500).json(err)
  }

}
