import { NextApiRequest, NextApiResponse } from 'next';
import { getScoreBoard } from '../../utils/CatsRepository';

export default async (
  _req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    const cats = await getScoreBoard();

    // // sleep to simulate serverless function lag
    // function sleep(ms) {
    //   return new Promise((resolve) => {
    //     setTimeout(resolve, ms);
    //   });
    // }
    // await sleep(2000);

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(cats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
