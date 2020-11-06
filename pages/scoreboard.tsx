import { FC } from 'react';
import { useQuery } from 'react-query';
import { client } from '../utils/client';

function getScoreboard() {
  return client('scoreboard');
}

const ScoreboardPage: FC = () => {
  const { status, data } = useQuery('current-match', getScoreboard);

  if (status !== 'success' || !data || data.length < 3) {
    return null;
  }

  const [theBoss, second, third, ...loosers] = data;

  return 'wip';
};

export default ScoreboardPage;
