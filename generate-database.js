/* eslint-disable */
// const fs = require('fs');
const fetch = require('isomorphic-unfetch');
const faker = require('faker');
const Vibrant = require('node-vibrant');
const MongoCLient = require('mongodb').MongoClient;

function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function download(cat) {
  const response = await fetch(cat.url);
  const buffer = await response.buffer();
  return buffer;
}

const main = async () => {
  faker.locale = 'fr';
  fetch('https://latelier.co/data/cats.json')
    .then((r) => r.json())
    .then((cats) => {
      return Promise.all(
        cats.images.map(async (cat, i) => {
          const randomName = faker.name.firstName(randomInt(0, 1));
          const buf = await download(cat);
          const swatches = await Vibrant.from(buf).getSwatches();
          const ret = {};
          // eslint-disable-next-line no-restricted-syntax
          for (const swatch in swatches) {
            if (swatches.hasOwnProperty(swatch) && swatches[swatch]) {
              const { hsl, hex } = swatches[swatch];
              ret[swatch] = {};
              ret[swatch].hex = hex;
              ret[swatch].hsl = [
                (hsl[0] * 360).toFixed(),
                (hsl[1] * 100).toFixed(),
                (hsl[2] * 100).toFixed(),
              ];
            }
          }
          return {
            ...cat,
            name: randomName,
            palette: ret,
            elo: 1000,
          };
        })
      );
    })
    .then((catList) => {
      // fs.writeFileSync('db.json', JSON.stringify(catList, null, 2));
      const { MONGOUSER, MONGOPWD, MONGOHOST, MONGOPORT, MONGODB } = process.env;
      const uri = `mongodb+srv://${MONGOUSER}:${MONGOPWD}@${MONGOHOST}/${MONGODB}?retryWrites=true&w=majority&authSource=admin`;
      const client = new MongoCLient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
      console.log('uri', uri);
      client.connect(async (err, client) => {
        // console.log('err', err, client)
        const collection = client.db('catmash').collection("cats");
        // perform actions on the collection object
        await collection.insertMany(catList)
        client.close();
      });
    });
};

main();
