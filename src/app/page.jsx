import styles from "../styles/page.module.sass";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className={styles.container}>
      <Header />
    </main>
  );
}
