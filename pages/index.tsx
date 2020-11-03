import Button from '@components/Button';
import { FC } from 'react';
import Nav from '../components/nav';

const IndexPage: FC = () => {
  return (
    <div>
      <Nav />
      <Button>coucou</Button>
      <div className="py-20">
        <h1 className="text-5xl text-center text-accent-1">
          Next.js + Tailwind CSS
        </h1>
      </div>
    </div>
  );
};

export default IndexPage;
