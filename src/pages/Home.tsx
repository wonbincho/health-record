import React from 'react';
import classNames from 'classnames/bind';
import styles from './Home.scss';
import Footer from '@src/components/Tab';

const cx = classNames.bind(styles);

interface IOwnProps { };

const Home: React.FC<IOwnProps> = ({ }) => {
  return (
    <div className={cx('home')}>
      <div className={cx('page_wrap')}>
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
                <div className={cx('title_area')}>
                  <span className={cx('title')}>화요일-상체1</span>
                  <div className={cx('exercise_time')}>
                    <span>1시간 10분</span>
                    <span className={cx('time')}>(06:56 ~ 08:06)</span>
                  </div>
                </div>
                <div className={cx('routine_set')}>
                  <span className={cx('item')}>등</span>
                  <span className={cx('item')}>가슴</span>
                  <span className={cx('item')}>팔</span>
                </div>
              </div>
            </div>
            <div className={cx('view_more')}>
              <a className={cx('detail')} href={'#'}>상세 보기</a>
              <div className={cx('comment_btn')}>
                <button>댓</button>
              </div>
            </div>
            <div className={cx('comment_area')}>
              <form className={cx('comment')}>
                <input className={cx('input_text')} type="text" placeholder="" id="comment"></input>
                <input className={cx('submit')} type="submit" value="전송"></input>
              </form>
              <div className={cx('comment_window')}>
                <p>잘하네</p>
                <p>ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ</p>
              </div>
            </div>
          </li>
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
                <div className={cx('title_area')}>
                  <span className={cx('title')}>화요일-상체1</span>
                  <div className={cx('exercise_time')}>
                    <span>1시간 10분</span>
                    <span className={cx('time')}>(06:56 ~ 08:06)</span>
                  </div>
                </div>
                <div className={cx('routine_set')}>
                  <span className={cx('item')}>등</span>
                  <span className={cx('item')}>가슴</span>
                  <span className={cx('item')}>팔</span>
                </div>
              </div>
            </div>
            <div className={cx('view_more')}>
              <a className={cx('detail')} href={'#'}>상세 보기</a>
              <div className={cx('comment_btn')}>
                <button>댓</button>
              </div>
            </div>
            <div className={cx('comment_area')}>
              <form className={cx('comment')}>
                <input className={cx('input_text')} type="text" placeholder="" id="comment"></input>
                <input className={cx('submit')} type="submit" value="전송"></input>
              </form>
              <div className={cx('comment_window')}>
                <p>잘하네</p>
                <p>ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ</p>
              </div>
            </div>
          </li>
        </ul>
        <a href='#' className={cx('writing')}>
          <div className={cx('thumd')}>
            <img></img>
          </div>
        </a>
      </div>
      <Footer />
    </div >
  );
};

export default Home;
