import { createMocks } from 'node-mocks-http';
import handleMatchMaking from '../../pages/api/match-making';
import { buildCat } from '../utils/generate';
import * as CatsRepository from '../../utils/CatsRepository';

jest.mock('../../utils/CatsRepository');
const mockedCatsRepository = CatsRepository as jest.Mocked<
  typeof CatsRepository
>;

beforeEach(() => {
  jest.clearAllMocks();
});

describe('GET /api/vote', () => {
  it('returns two cats to vote', async () => {
    const fakeCats = [buildCat(), buildCat()];
    mockedCatsRepository.getCatsPair.mockResolvedValueOnce(fakeCats);

    const { req, res } = createMocks({
      method: 'GET',
      query: {},
    });

    await handleMatchMaking(req, res);

    expect(res._getStatusCode()).toBe(200);
    const data = JSON.parse(res._getData());
    expect(data).toHaveLength(2);
    expect(data).toEqual(fakeCats);
  });
});
