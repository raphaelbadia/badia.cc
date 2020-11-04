import faker from 'faker';

const getId = faker.random.uuid;

export function buildVariation(overrides?: Record<string, null>) {
  return {
    hex: faker.internet.color(),
    hsl: [
      faker.random.number({ min: 0, max: 360 }),
      faker.random.number({ min: 0, max: 100 }),
      faker.random.number({ min: 0, max: 100 }),
    ],
    ...overrides,
  };
}

export function buildPalette(overrides?: Record<string, null>) {
  return {
    Vibrant: buildVariation(),
    DarkVibrant: buildVariation(),
    LightVibrant: buildVariation(),
    Muted: buildVariation(),
    DarkMuted: buildVariation(),
    LightMuted: buildVariation(),
    ...overrides,
  };
}

export function buildCat(overrides?: Record<string, null>) {
  return {
    id: getId(),
    url: faker.image.nature(),
    name: faker.name.firstName(faker.random.number(1)),
    elo: faker.random.number({ min: 1000, max: 2800 }),
    palette: buildPalette(),
    ...overrides,
  };
}
