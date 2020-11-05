import { ObjectId } from 'mongodb';
import Arpad from 'arpad';
import { withMongo } from './mongodb';

export const getCatsPair = async () =>
  withMongo(async (client) => {
    const db = client.db('catmash');
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
    return cats.map((cat) => cat.doc);
  });

export const updateRankingAfterMatch = async (
  winnerId: string,
  looserId: string
) =>
  withMongo(async (client) => {
    const db = client.db('catmash');
    const collection = db.collection('cats');
    const winner = await collection.findOne({ _id: ObjectId(winnerId) });
    const looser = await collection.findOne({ _id: ObjectId(looserId) });
    const session = client.startSession();
    const elo = new Arpad();

    await session.withTransaction(async () => {
      await collection.updateOne(
        { _id: ObjectId(winnerId) },
        { $set: { elo: elo.newRatingIfWon(winner.elo, looser.elo) } },
        { session }
      );
      await collection.updateOne(
        { _id: ObjectId(looserId) },
        { $set: { elo: elo.newRatingIfLost(looser.elo, winner.elo) } },
        { session }
      );
    });
  });
