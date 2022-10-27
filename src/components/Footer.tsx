import React from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.scss';

const cx = classNames.bind(styles);

interface IOwnProps { };

const Footer: React.FC<IOwnProps> = ({ }) => {
  return (
    <div className={cx('footer')}>
      <div className={cx('menu')}>
        <a href="#" className={cx('text')}>홈</a>
        <a href="#" className={cx('text')}>운동</a>
        <a href="#" className={cx('text')}>루틴</a>
        <a href="#" className={cx('text')}>설정</a>
      </div>
    </div>
  );
};

export default Footer;
