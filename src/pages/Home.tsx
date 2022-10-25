import React from 'react';
import classNames from 'classnames/bind';
import styles from './Home.scss';

const cx = classNames.bind(styles);

interface IOwnProps { };

const Home: React.FC<IOwnProps> = ({ }) => {
  return (
    <div className={cx('home')}>
      <div>
        <ul className={cx('list_set')}>
          <li className={cx('list')}>
            <span className={cx('writer')}></span>
            <span className={cx('data')}></span>
            <div className={cx('thumb')}>
              <img></img>
            </div>
            <div className={cx('contents')}></div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
