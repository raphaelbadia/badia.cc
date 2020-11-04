import { NextApiRequest, NextApiResponse } from 'next';
import { updateRankingAfterMatch } from '../../utils/CatsRepository';

interface PostVoteRequest extends NextApiRequest {
  query: {
    winnerId: string;
    looserId: string;
  };
}

export default async (
  req: PostVoteRequest,
  res: NextApiResponse
): Promise<void> => {
  const {
    query: { winnerId, looserId },
  } = req;

  try {
    await updateRankingAfterMatch(winnerId, looserId);

    res.setHeader('Content-Type', 'application/json');
    res.status(204).send(null);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
