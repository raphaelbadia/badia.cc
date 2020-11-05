import { FC } from 'react';
import { useQuery, useMutation } from 'react-query';
import Avatar from '../components/Avatar';
import VoteBlock from '../components/VoteBlock';
import { client, paramsToString } from '../utils/client';

function getNextMatch() {
  return client('match-making');
}

function submitVote(params) {
  return client(`vote?${paramsToString(params)}`, { method: 'POST' });
}

const IndexPage: FC = () => {
  const { status, data, refetch } = useQuery('current-match', getNextMatch);
  const [sendVote] = useMutation(submitVote, {
    onSuccess: () => refetch(),
  });

  const handleVote = (winnerId) => {
    const looserId = data.find((cat) => cat._id !== winnerId)._id;
    sendVote({ winnerId, looserId });
  };

  return (
    <>
      {status === 'success' &&
        data.map((cat) => {
          return (
            <VoteBlock
              key={cat._id}
              style={{ backgroundColor: cat.palette.Vibrant.hex }}
            >
              <Avatar url={cat.url} onClick={() => handleVote(cat._id)} />
            </VoteBlock>
          );
        })}
    </>
  );
};

export default IndexPage;
