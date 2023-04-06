// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { extraIngredients } from '@/components/04-validating-ajax-data/menu'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if(!extraIngredients) return res.status(404).json({ message:"ExtraIngedients not found"})

    return res.status(200).json({data:extraIngredients})
  }catch(err) {
    return res.status(500).json(err)
  }

}
