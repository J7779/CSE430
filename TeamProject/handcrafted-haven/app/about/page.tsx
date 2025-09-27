import Navbar from "../components/navbar";
import styles from "../page.module.css";

export default function About() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <h1>About Us</h1>
        <p>This is the about page content.</p>
        <p>Learn more about our mission and values here.</p>
      </main>
      <footer className={styles.footer}>
        <p>© 2023 My Next.js App</p>
      </footer>
    </div>
  );
}
