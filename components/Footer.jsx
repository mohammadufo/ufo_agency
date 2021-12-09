import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        <h1 className={styles.title}>UFO CREATIVES.</h1>
        <h1 className={styles.linkTitle}>
          <Link href="/contact">
            <>
            <span className={styles.linkText}>WORK WHIT US</span>
            <Image src="/img/link.png" width="40px" height="40px" alt="" />
            </>
          </Link>
        </h1>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          MASHHAD <br /> IRAN
        </div>
        <div className={styles.cardItem}>
          CONTACT@M.UFO <br /> +98 937 1700 671
        </div>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          FOLLOW US <br /> __FB__IN__BE__TW
        </div>
        <div className={styles.cardItem}>
          © 2022 MUHAMMAD UFO INTERACTIVE <br /> ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
};

export default Footer;
