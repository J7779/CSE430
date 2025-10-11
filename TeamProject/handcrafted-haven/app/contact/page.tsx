import Navbar from "../components/navbar";
import styles from "../page.module.css";

export default function Contact() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.aboutHero}>
          <div className={styles.heroBackground}></div>
          <div className={styles.aboutHeroOverlay}>
            <h1 className={styles.aboutHeroTitle}>Contact the Elders</h1>
            <p className={styles.aboutHeroTagline}>
              Reach out to the mystical guardians of Livathina.
            </p>
          </div>
        </section>

        <section className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <h2>Whisper Your Wishes</h2>
            <p>
              Have questions about our enchanted crafts? Seeking a custom
              creation? Or simply wish to share your experiences with the magic
              of Livathina? Send us a message through our mystical portal, and
              our elders will respond with wisdom and wonder.
            </p>
          </div>
        </section>

        <section className={styles.valuesSection}>
          <h2>Send Us Your Enchantment</h2>
          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="subject">Subject of Enchantment</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.primary}>
              Send Magical Message
            </button>
          </form>
        </section>

        <section className={styles.callToAction}>
          <h2>Other Ways to Connect</h2>
          <p>
            Prefer to speak directly with our mystical representatives? Reach
            out through these enchanted channels.
          </p>
          <div className={styles.contactInfo}>
            <p>
              <strong>Enchanted Email:</strong> elders@livathina.haven
            </p>
            <p>
              <strong>Mystical Phone:</strong> +1 (555) ENCHANT
            </p>
            <p>
              <strong>Realm Address:</strong> The Whispering Woods, Livathina
            </p>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          📜 Enchantment Policy
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          🪄 Magical Terms
        </a>
        <a href="/contact" target="_blank" rel="noopener noreferrer">
          🌍 Contact the Elders
        </a>
      </footer>
    </div>
  );
}
