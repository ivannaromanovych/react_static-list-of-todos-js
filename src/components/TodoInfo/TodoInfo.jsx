import './TodoInfo.scss';
import { UserInfo } from '../UserInfo';

const cn = require('classnames');

export const TodoInfo = ({ todo }) => {
  const {
    title,
    completed,
    user,
  } = todo;

  return (
    <article
      className={
        cn({
          TodoInfo: true,
          'TodoInfo--completed': completed,
        })
      }
    >
      <h2 className="TodoInfo__title">
        {title}
      </h2>

      <UserInfo key={user.id} user={user} />
    </article>
  );
};
