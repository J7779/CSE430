import Navbar from "../components/navbar";
import styles from "../page.module.css";
import Image from "next/image"; // Import Image component

export default function About() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.aboutHero}>
          <Image
            src="/about-hero.png" // You'll need to add an image for your about hero
            alt="About Handcrafted Haven"
            width={1200}
            height={400}
            className={styles.aboutHeroImage}
            priority
          />
          <div className={styles.aboutHeroOverlay}>
            <h1 className={styles.aboutHeroTitle}>Our Story</h1>
            <p className={styles.aboutHeroTagline}>
              Passionately bringing unique artisan crafts to your home.
            </p>
          </div>
        </section>

        <section className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <h2>The Heart Behind Handcrafted Haven</h2>
            <p>
              Handcrafted Haven was born from a deep appreciation for the art of
              handmade goods and the talented artisans who create them. We
              believe that every handmade item carries a piece of its maker's
              soul, telling a unique story of dedication, creativity, and skill.
            </p>
            <p>
              Our mission is to create a vibrant marketplace where these stories
              can be shared, and where customers can discover unique,
              high-quality treasures that add character and warmth to their
              lives. We are committed to supporting independent artisans and
              fostering a community that values craftsmanship and
              sustainability.
            </p>
          </div>
          <div className={styles.aboutImageContainer}>
            <Image
              src="/mission.png" // Another image for your mission/values
              alt="Our Mission"
              width={500}
              height={300}
              className={styles.aboutImage}
            />
          </div>
        </section>

        <section className={styles.valuesSection}>
          <h2>Our Core Values</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueItem}>
              <h3>Quality Craftsmanship</h3>
              <p>
                We stand for excellence in every stitch, stroke, and carve. Each
                product is a testament to meticulous attention to detail.
              </p>
            </div>
            <div className={styles.valueItem}>
              <h3>Artisan Empowerment</h3>
              <p>
                We empower creators by providing a platform that celebrates
                their talent and ensures fair compensation for their hard work.
              </p>
            </div>
            <div className={styles.valueItem}>
              <h3>Unique Expression</h3>
              <p>
                We champion individuality, offering a diverse collection of
                items that reflect a spectrum of artistic visions and styles.
              </p>
            </div>
            <div className={styles.valueItem}>
              <h3>Community & Connection</h3>
              <p>
                We foster a strong connection between makers and buyers,
                building a community that values conscious consumption.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.callToAction}>
          <h2>Join Our Journey</h2>
          <p>
            Explore our collection and become a part of the Handcrafted Haven
            family.
          </p>
          <a href="/shop" className={styles.primary}>
            Shop Now
          </a>
        </section>
      </main>
      <footer className={styles.footer}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Privacy Policy
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Terms of Service
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
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
