import { FC } from 'react';
import cn from 'classnames';
import s from './VoteBlock.module.css';
import Avatar from '../Avatar';

interface Props {
  item: { _id: string; url: string; palette: any };
  handleVote: (id: string) => void;
  itemKey: string;
}

const VoteBlock: FC<Props> = ({ item, handleVote, itemKey }: Props) => {
  return (
    <div
      key={itemKey}
      className={cn(s.root, {
        [s.hidden]: !item,
        'bg-gray-900': !item,
      })}
      style={{
        backgroundColor: item && item.palette.Vibrant.hex,
      }}
    >
      {item && <Avatar url={item.url} onClick={() => handleVote(item._id)} />}
    </div>
  );
};

export default VoteBlock;
