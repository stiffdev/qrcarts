import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Opodemy</div>
      <div className={styles.text}>
        Opodemy thoughts agency © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;