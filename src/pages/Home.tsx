import React from 'react';
import classNames from 'classnames/bind';
import styles from './Home.scss';
import Footer from '@src/components/Tab';

const cx = classNames.bind(styles);

interface IOwnProps { };

const Home: React.FC<IOwnProps> = ({ }) => {
  return (
    <div className={cx('home')}>
      <div>
        <div className={cx('advert_area')}></div>
        <ul className={cx('list_set')}>
          <li className={cx('list')}>
            <div className={cx('profile')}>
              <div className={cx('thumb')}>
                <img></img>
              </div>
              <span className={cx('name')}>은모근</span>
            </div>
            <div className={cx('contents_area')}>
              <p className={cx('contents')}>어금니박살 루틴</p>
              <span className={cx('data')}>11월 1일 오전 8:33</span>
              <div className={cx('thumb')}>
                <img></img>
              </div>
              <div className={cx('routine_area')}>
                <span className={cx('title')}>화요일-상체</span>
                <span className={cx('exercise_time')}>1시간 10분(06:56 ~ 08:06)</span>
                <div className={cx('routine_set')}>
                  <span className={cx('item')}>하체</span>
                  <span className={cx('item')}>엉덩이</span>
                  <span className={cx('item')}>유산소</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
