import { withMongo } from './mongodb';

export const getCatsPair = async () =>
  withMongo(async (db) => {
    const [randomCat] = await db
      .collection('cats')
      .aggregate([
        {
          $sample: { size: 1 },
        },
      ])
      .toArray();
    const cats = await db
      .collection('cats')
      .aggregate([
        {
          $project: {
            diff: {
              $abs: {
                $subtract: [randomCat.elo, '$elo'],
              },
            },
            doc: '$$ROOT',
          },
        },
        {
          $sort: {
            diff: 1,
          },
        },
        { $limit: 2 },
      ])
      .toArray();
    return cats;
  });
