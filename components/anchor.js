import Link from "next/link";
import styles from "../styles/anchor.module.css";

function Anchor({text, href}) {
  return (
    <Link href={href}>
      <a className={styles.anchor}>{text}</a>
    </Link>
  );
}

export default Anchor;
