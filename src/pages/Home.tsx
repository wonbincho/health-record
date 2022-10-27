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
            <span className={cx('writer')}>덕팔아범</span>
            <span className={cx('data')}>2022.10.27</span>
            <div className={cx('thumb')}>
              <img></img>
            </div>
            <div className={cx('contents')}>
            </div>
          </li>
          <li className={cx('list')}>
            <span className={cx('writer')}>덕팔아범</span>
            <span className={cx('data')}>2022.10.26</span>
            <div className={cx('thumb')}>
              <img></img>
            </div>
            <div className={cx('contents')}></div>
          </li>
          <li className={cx('list')}>
            <span className={cx('writer')}>덕팔아범</span>
            <span className={cx('data')}>2022.10.25</span>
            <div className={cx('thumb')}>
              <img></img>
            </div>
            <div className={cx('contents')}></div>
          </li>
        </ul>
      </div>
      <div className={cx('footer')}>
        <button>홈</button>
        <button>운동</button>
        <button>루틴</button>
        <button>설정</button>
      </div>
    </div>
  );
};

export default Home;
