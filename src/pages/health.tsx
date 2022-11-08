import React from 'react';
import classNames from 'classnames/bind';
import styles from './Health.scss';
import Footer from '@src/components/Tab';

const cx = classNames.bind(styles);

interface IOwnProps { };

const Health: React.FC<IOwnProps> = ({ }) => {
  return (
    <div className={cx('health')}>
      <div className={cx('page_wrap')}>
        <div className={cx('all_timer')}>
          <span>00</span>
          <span>:</span>
          <span>00</span>
          <span>:</span>
          <span>00</span>
        </div>
        <div className={cx('btn_wrap')}>
          <div className={cx('start_btn')}>
            <button className={cx('btn')}>운동시작</button>
          </div>
          <div className={cx('stop_btn')}>
            <button className={cx('btn')}>일시정지</button>
            <button className={cx('btn')}>운동종료</button>
          </div>
        </div>
        <div className={cx('edit_area')}>
          <div className={cx('add_wrap')}>
            <a href='#'>오늘의 운동 추가하기</a>
          </div>
          <div className={cx('edit_wrap')}>
            <a href='#'>루틴 수정하기</a>
            <a href='#'>운동 추가하기</a>
          </div>
        </div>
        <div className={cx('contents_wrap')}>
          <div className={cx('basic_contents')}>
            <span className={cx('contents_text')}> 루틴 빠른 시작</span>
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
          <div className={cx('health_contents')}>
            <div className={cx('timer_wrap')}>


            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Health;
