import { FC } from 'react';
import { useQuery } from 'react-query';
import Avatar from '../components/Avatar';
import VoteBlock from '../components/VoteBlock';
import { client } from '../utils/client';

function getNextMatch() {
  return client('match-making');
}

const IndexPage: FC = () => {
  const { status, data, refetch } = useQuery('current-match', getNextMatch);

  return (
    <>
      {status === 'success' &&
        data.map((cat) => {
          return (
            <VoteBlock
              key={cat._id}
              style={{ backgroundColor: cat.palette.Vibrant.hex }}
            >
              <Avatar url={cat.url} />
            </VoteBlock>
          );
        })}
    </>
  );
};

export default IndexPage;
