# Catfish - take-home programming test

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

Then, it has been saved into my FaunaDB database.

The very quick and dirty code that did that is available at generate-database.js. The dependencies are left in devDependencies so you can run it with your own FaunaDB key if you want to.
