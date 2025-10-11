import Navbar from "../components/navbar";
import styles from "../page.module.css";

export default function About() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.aboutHero}>
          <div className={styles.heroBackground}></div>
          <div className={styles.aboutHeroOverlay}>
            <h1 className={styles.aboutHeroTitle}>Our Enchanted Origins</h1>
            <p className={styles.aboutHeroTagline}>
              Where the magic of Livathina meets the art of craftsmanship.
            </p>
          </div>
        </section>

        <section className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <h2>The Magic of Livathina</h2>
            <p>
              In the enchanted realm of Livathina, where ancient forests whisper
              secrets and crystal rivers sing lullabies, our artisans have long
              crafted wonders from the very essence of magic. Handcrafted Haven
              serves as the mystical bridge between this hidden world and yours,
              bringing forth treasures imbued with the pure enchantment of
              Livathina.
            </p>
            <p>
              Each piece tells a story of ancient spells woven into fabric,
              potions distilled into perfumes, and dreams sculpted into art. Our
              mission is to share these magical creations with those who seek
              wonder in their everyday lives, fostering a connection between the
              mundane and the marvelous.
            </p>
          </div>
          <div className={styles.aboutImageContainer}>
            <div className={styles.missionPlaceholder}>
              <p>✨ Enchanted Realm of Livathina ✨</p>
            </div>
          </div>
        </section>

        <section className={styles.valuesSection}>
          <h2>Our Enchanted Principles</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueItem}>
              <h3>Magical Craftsmanship</h3>
              <p>
                Every creation is infused with the ancient magic of Livathina,
                ensuring unparalleled quality and wonder in each enchanted
                piece.
              </p>
            </div>
            <div className={styles.valueItem}>
              <h3>Artisan Harmony</h3>
              <p>
                We unite the mystical artisans of Livathina with seekers of
                magic, providing a realm where creativity flows freely and
                fairly.
              </p>
            </div>
            <div className={styles.valueItem}>
              <h3>Unique Enchantments</h3>
              <p>
                From levitating lanterns to whispering mirrors, our collection
                celebrates the boundless imagination of Livathina's magical
                makers.
              </p>
            </div>
            <div className={styles.valueItem}>
              <h3>Community of Wonder</h3>
              <p>
                Join a fellowship of dreamers and creators, where the magic of
                Livathina brings people together in harmony and enchantment.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.callToAction}>
          <h2>Enter the Realm of Wonder</h2>
          <p>
            Discover the magical creations of Livathina and let enchantment
            enter your world.
          </p>
          <a href="/services" className={styles.primary}>
            Explore Our Magic
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
