import { createMocks } from 'node-mocks-http';
import handleVote from '../../pages/api/cats-to-vote';

describe('GET /api/vote', () => {
  it('returns two cats to vote', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: {},
    });

    await handleVote(req, res);

    expect(res._getStatusCode()).toBe(200);
    const data = JSON.parse(res._getData());
    expect(data).toHaveLength(2);
  });

  it('says hello', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: {},
    });
    await handleVote(req, res);
    console.log(JSON.parse(res._getData()));
  });
});
