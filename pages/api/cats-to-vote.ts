import { NextApiRequest, NextApiResponse } from 'next';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  //   const {
  //     query: { animal },
  //   } = req;

  //   res.statusCode = 200;
  try {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json([{ id: 1 }, { id: 2 }]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
