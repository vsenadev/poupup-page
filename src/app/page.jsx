import styles from "../styles/page.module.sass";
import Header from "@/components/Header";
import Benefits from "@/components/Benefits";
import Tool from "@/components/Tool";

export default function Home() {
  return (
    <main className={styles.container}>
      <Header />
      <Benefits/>
      <Tool/>
    </main>
  );
}
