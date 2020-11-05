import { NextApiRequest, NextApiResponse } from 'next';
import { getCatsPair } from '../../utils/CatsRepository';

export default async (
  _req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    const cats = await getCatsPair();

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(cats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
