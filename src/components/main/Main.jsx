import { useState, useEffect } from 'react';
import styles from './Main.module.css';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Main 컴포넌트가 마운트될 때 body의 overflow를 hidden으로 설정
    document.body.style.overflow = 'hidden';

    // Main 컴포넌트가 언마운트될 때 원래 overflow로 복구
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className={styles['page-container']}>
      <div className={styles.search}>
        <div className={styles.title}>
          <h2 onClick={() => navigate('/resume')}>CR</h2>
        </div>
        <div className={styles.search_box}>
          <input
            type="text"
            placeholder="기업 검색"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={() => {
            window.open(`https://www.nicebizinfo.com/ep/EP0100M001GE.nice?itgSrch=${searchTerm}`, '', 'width=1500px,height=1500px');
          }}>
            검색
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;