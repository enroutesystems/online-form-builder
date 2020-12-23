import styles from './navbar.module.scss';
import { useSession } from 'next-auth/client';
import NavbarDashboard from "../navbarDashboard";

export default function Navbar() {
  const [session, loading] = useSession();

  if (session) return <NavbarDashboard />

  return(
    <nav className={`${styles["d-flex"]} ${styles.nav}`}>
      <div className={`${styles["d-flex"]} ${styles.container}`}>
        <a className={`${styles["d-flex"]} ${styles.brand}`} href={process.env.NEXT_PUBLIC_HOST}>
          <img src="https://img.icons8.com/ios/50/000000/test.png"/>
          Formify
        </a>
        <ul className={`${styles["d-flex"]} ${styles.menu}`}>
          <li>
            <a className={`${styles.btn} ${styles["log-in"]}`} href="/api/auth/signin">Log In / Register</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
