import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar"; // Import the Navbar component

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar /> {/* Include the Navbar here */}
      <main className={styles.main}>
        {/* Top image for Handcrafted Haven */}
        <div className={styles.heroImageContainer}>
          <Image
            className={styles.heroImage}
            src="/sitemain.png" // Using the specified image from the public folder
            alt="Handcrafted Haven main image"
            width={1000} // Adjust as needed
            height={400} // Adjust as needed
            priority
          />
          <h1 className={styles.animatedTitle}>
            Welcome to Handcrafted Haven!
          </h1>
        </div>

        <p className={styles.tagline}>Discover unique handmade treasures.</p>

        <section className={styles.featureSection}>
          <div className={styles.featureItem}>
            <h2>Artisan Quality</h2>
            <p>Every item is lovingly crafted by skilled artisans.</p>
            <div className={styles.featureIcon}> </div>
          </div>
          <div className={styles.featureItem}>
            <h2>Unique Creations</h2>
            <p>Find one-of-a-kind pieces that tell a story.</p>
            <div className={styles.featureIcon}> </div>
          </div>
          <div className={styles.featureItem}>
            <h2>Support Local</h2>
            <p>Empower small businesses and independent makers.</p>
            <div className={styles.featureIcon}> </div>
          </div>
        </section>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="/shop" // Example link to a shop page
          >
            Explore Our Collection
          </a>
          <a
            href="/about" // Example link to an about page
            className={styles.secondary}
          >
            Learn More About Us
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="#" // Placeholder link
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Privacy Policy
        </a>
        <a
          href="#" // Placeholder link
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Terms of Service
        </a>
        <a
          href="#" // Placeholder link
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Contact Us
        </a>
      </footer>
    </div>
  );
}
