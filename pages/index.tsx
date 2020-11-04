import { FC } from 'react';
import Avatar from '../components/Avatar';
import VoteBlock from '../components/VoteBlock';

const IndexPage: FC = () => {
  return (
    <>
      <VoteBlock style={{ backgroundColor: 'lightblue' }}>
        <Avatar url="https://64.media.tumblr.com/tumblr_m82woaL5AD1rro1o5o1_1280.jpg" />
      </VoteBlock>
      <VoteBlock>
        <Avatar url="https://64.media.tumblr.com/tumblr_m2gyauUXoh1qbe5pxo1_500.jpg" />
      </VoteBlock>
    </>
  );
};

export default IndexPage;
