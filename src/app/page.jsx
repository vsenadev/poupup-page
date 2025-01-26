import styles from "../styles/page.module.sass";
import Header from "@/components/Header";
import Benefits from "@/components/Benefits";

export default function Home() {
  return (
    <main className={styles.container}>
      <Header />
      <Benefits/>
    </main>
  );
}
