import { FC } from 'react';
import { useQuery, useMutation } from 'react-query';
import LinkToScoreboard from '../components/MenuLink';
import VoteBlock from '../components/VoteBlock';
import { client, paramsToString } from '../utils/client';

function getNextMatch() {
  return client('match-making');
}

function submitVote(params) {
  return client(`vote?${paramsToString(params)}`, { method: 'POST' });
}

const IndexPage: FC = () => {
  const {
    status,
    data,
    refetch,
    isFetching: isFetchingNextPictures,
  } = useQuery('current-match', getNextMatch);
  const [postVote, { isLoading: isPosting }] = useMutation(submitVote, {
    onSuccess: () => refetch(),
  });

  const handleVote = (winnerId) => {
    const looserId = data.find((cat) => cat._id !== winnerId)._id;
    postVote({ winnerId, looserId });
  };

  const showItems =
    status === 'success' && !isFetchingNextPictures && !isPosting;
  const left = showItems ? data[0] : null;
  const right = showItems ? data[1] : null;

  return (
    <>
      <LinkToScoreboard to="/scoreboard">Scoreboard</LinkToScoreboard>
      <VoteBlock item={left} handleVote={handleVote} itemKey="left" />
      <VoteBlock item={right} handleVote={handleVote} itemKey="right" />
    </>
  );
};

export default IndexPage;
