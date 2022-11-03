import React from 'react';
import classNames from 'classnames/bind';
import styles from './Routine.scss';
import Footer from '@src/components/Tab';

const cx = classNames.bind(styles);

interface IOwnProps { };

const Routine: React.FC<IOwnProps> = ({ }) => {
  return (
    <div className={cx('routine')}>
      <div className={cx('page_wrap')}>
        <p className={cx('add_routine')}>루틴 추가하기</p>
        <div className={cx('menu_wrap')}>
          <button className={cx('menu')} aria-selected='true'>루틴</button>
          <button className={cx('menu')} aria-selected='false'>운동 추가하기</button>
        </div>
        <ul className={cx('list_set')}>
          <li className={cx('list')}>
            <p className={cx('title')}>상체</p>
            <div className={cx('routine_set')}>
              <span className={cx('item')}>가슴</span>
              <span className={cx('item')}>어깨</span>
              <span className={cx('item')}>등</span>
              <span className={cx('item')}>팔</span>
              <span className={cx('item')}>유산소</span>
              <span className={cx('item')}>전신</span>
            </div>
            <div className={cx('update')}>
              <a href="#" className={cx('text')}>수</a>
              <a href="#" className={cx('text')}>삭</a>
              <a href="#" className={cx('text')}>루틴시작하기</a>
            </div>
          </li>
          <li className={cx('list')}>
            <p className={cx('title')}>하체</p>
            <div className={cx('routine_set')}>
              <span className={cx('item')}>하체</span>
              <span className={cx('item')}>엉덩이</span>
              <span className={cx('item')}>유산소</span>
            </div>
            <div className={cx('update')}>
              <a href="#" className={cx('text')}>수</a>
              <a href="#" className={cx('text')}>삭</a>
              <a href="#" className={cx('text')}>루틴시작하기</a>
            </div>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Routine;
