import styles from "../styles/page.module.sass";
import Header from "@/components/Header";
import Benefits from "@/components/Benefits";
import Tool from "@/components/Tool";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className={styles.container}>
      <Header />
      <Benefits/>
      <Tool/>
      <Testimonials/>
      <FAQ/>
      <Footer/>
    </main>
  );
}
