import React from 'react';
import classNames from 'classnames/bind';
import styles from './Routine.scss';

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
              <p className={cx('item')}>가슴</p>
              <p className={cx('item')}>어깨</p>
              <p className={cx('item')}>등</p>
              <p className={cx('item')}>팔</p>
              <p className={cx('item')}>유산소</p>
            </div>
            <div className={cx('update')}>
              <a href="#" className={cx('edit')}>수정</a>
              <a href="#" className={cx('delete')}>삭제</a>
            </div>
          </li>
          <li className={cx('list')}>
            <p className={cx('title')}>하체</p>
            <div className={cx('routine_set')}>
              <p className={cx('item')}>허벅지</p>
              <p className={cx('item')}>엉덩이</p>
              <p className={cx('item')}>유산소</p>
            </div>
            <div className={cx('update')}>
              <a href="#" className={cx('edit')}>수정</a>
              <a href="#" className={cx('delete')}>삭제</a>
            </div>
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

export default Routine;
