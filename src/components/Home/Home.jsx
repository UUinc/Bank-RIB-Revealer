import styles from './Home.module.css';

function Home() {
  return (
    <div id='home' className={styles.container}>
      <h2>Find <span className={styles.blue}>🏛️ Bank</span> from <span className={styles.blue}>RIB</span></h2>
      <p>Easy to use, Comprehensive Moroccan Banking 🇲🇦</p>
    </div>
  );
}

export default Home;