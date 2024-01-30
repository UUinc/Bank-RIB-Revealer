import styles from './Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.container}>
      <div>
        <a href='/' className={styles.title}>Bank RIB Revealer</a>
      </div>
      <div>
        <ul className={styles.navigation}>
          <li><a href='#home'>Home</a></li>
          <li><a href='https://github.com/UUinc/Bank-RIB-Revealer' target='_blank'>Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;