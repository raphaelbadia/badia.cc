import { FC } from 'react';
import { useQuery, useMutation } from 'react-query';
import VoteBlock from '../components/VoteBlock';
import { client, paramsToString } from '../utils/client';

function getNextMatch() {
  return client('match-making');
}

function submitVote(params) {
  return client(`vote?${paramsToString(params)}`, { method: 'POST' });
}

const IndexPage: FC = () => {
  const { status, data, refetch, isFetching } = useQuery(
    'current-match',
    getNextMatch
  );
  const [postVote] = useMutation(submitVote, {
    onSuccess: () => refetch(),
  });

  const handleVote = (winnerId) => {
    const looserId = data.find((cat) => cat._id !== winnerId)._id;
    postVote({ winnerId, looserId });
  };

  const left = status === 'success' && !isFetching ? data[0] : null;
  const right = status === 'success' && !isFetching ? data[1] : null;

  return (
    <>
      <VoteBlock item={left} handleVote={handleVote} itemKey="left" />
      <VoteBlock item={right} handleVote={handleVote} itemKey="right" />
    </>
  );
};

export default IndexPage;
