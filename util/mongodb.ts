import { MongoClient } from 'mongodb';

const { MONGOUSER, MONGOPWD, MONGOHOST, MONGODB } = process.env;

const uri = `mongodb+srv://${MONGOUSER}:${MONGOPWD}@${MONGOHOST}/${MONGODB}?retryWrites=true&w=majority&authSource=admin`;

if (!MONGOUSER) {
  throw new Error(
    'Please define the MONGOUSER environment variable inside .env.local'
  );
}

if (!MONGOPWD) {
  throw new Error(
    'Please define the MONGOPWD environment variable inside .env.local'
  );
}

if (!MONGOHOST) {
  throw new Error(
    'Please define the MONGOHOST environment variable inside .env.local'
  );
}

if (!MONGODB) {
  throw new Error(
    'Please define the MONGODB environment variable inside .env.local'
  );
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentiatlly
 * during API Route usage.
 */
let cached = global.mongo;
// eslint-disable-next-line no-multi-assign
if (!cached) cached = global.mongo = {};

export default async function connectToDatabase() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    const conn = { client: undefined, db: undefined };
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    cached.promise = MongoClient.connect(uri, opts)
      .then((client) => {
        conn.client = client;
        return client.db(MONGODB);
      })
      .then((db) => {
        conn.db = db;
        cached.conn = conn;
      });
  }
  await cached.promise;
  return cached.conn;
}
