# Catmash - take-home programming test

A programming test for _L'atelier_

DEMO : https://catmash.raphaelbadia.vercel.app/

## Best practices

To ensure global quality on the projet, the following tools are used:

- typescript for type-checking
- commitlint to ensure that commits follow the [conventional commits syntax](https://www.conventionalcommits.org/en/v1.0.0/)
- stylelint, eslint and prettier linting
- husky to run linters before every commit

## Markup and style

I'm using tailwindcss (I've only used it once and wanted to play with it again plus it has good defaults) and css modules. The css modules approach is probably overkill because of the way tailwind works, but I wanted to try it.

## Dataset

The data from https://latelier.co/data/cats.json has been enrished by generating for each cat :

- a name with `fakerjs`
- a color palette extracted from the image using `Vibrantjs`

Then, it has been saved into my MongoDB database.

The very quick and dirty code that did that is available at generate-database.js. The dependencies are left in devDependencies so you can run it with your own MongoDB access codes if you want to.

## api

I've been eager to try [Nextjs api routes](https://nextjs.org/docs/api-routes/introduction) for a while, so here it is.

Each file located in pages/api is a serverless function.

## A pinch of accessibility

I never had the chance to work on accessibility, and I've been dreaming to try [Reakit](https://reakit.io/) since its release. That dream just came true and you can navigate the site using tab and enter.

## Responsive

Try it on your phone ! I didn't put a lot of work into this, but it should work.

## Testing

I only wrote a single test to test an API route, I'm sorry that I didn't write more tests but Antoine told me that the job is no longer available so I need to move on.

I usually use jest, react-testing-library and cypress (💞) to test my applications.

## about me

My name is Raphaël Badia, I'm a frontend developer that loves Next, design systems, startups and sushis 🍣

You can find my resume [here](https://raphael.badia.cc)
