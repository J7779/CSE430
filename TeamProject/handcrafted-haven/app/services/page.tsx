import Navbar from "../components/navbar";
import styles from "../page.module.css";

export default function Services() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.aboutHero}>
          <div className={styles.heroBackground}></div>
          <div className={styles.aboutHeroOverlay}>
            <h1 className={styles.aboutHeroTitle}>Our Enchanted Services</h1>
            <p className={styles.aboutHeroTagline}>
              Discover the magical offerings from the artisans of Livathina.
            </p>
          </div>
        </section>

        <section className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <h2>Services from the Realm</h2>
            <p>
              At Handcrafted Haven, we offer a variety of services that bring
              the magic of Livathina directly to you. From custom enchanted
              creations to immersive workshops, our services are designed to
              infuse your life with wonder and enchantment.
            </p>
          </div>
        </section>

        <section className={styles.valuesSection}>
          <h2>Our Magical Offerings</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueItem}>
              <h3>Custom Enchanted Crafts</h3>
              <p>
                Commission bespoke magical items tailored to your desires.
                Whether it&apos;s a whispering amulet or a levitating sculpture, our
                artisans will craft it with Livathina&apos;s ancient magic.
              </p>
            </div>
            <div className={styles.valueItem}>
              <h3>Magical Workshops</h3>
              <p>
                Join our immersive workshops where you&apos;ll learn to infuse
                everyday items with enchantment. Perfect for those seeking to
                bring a touch of Livathina into their creations.
              </p>
            </div>
            <div className={styles.valueItem}>
              <h3>Enchantment Consultations</h3>
              <p>
                Seek guidance from our mystical consultants to discover which
                enchanted items would best suit your needs and harmonize with
                your personal aura.
              </p>
            </div>
            <div className={styles.valueItem}>
              <h3>Realm Tours & Experiences</h3>
              <p>
                Embark on virtual journeys through Livathina, exploring the
                workshops of our artisans and witnessing the magic firsthand
                through our enchanted portals.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.callToAction}>
          <h2>Begin Your Enchantment</h2>
          <p>
            Ready to experience the magic of Livathina? Contact us to start your
            journey.
          </p>
          <a href="/contact" className={styles.primary}>
            Contact Us
          </a>
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
