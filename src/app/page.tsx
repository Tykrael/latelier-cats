import styles from "@/app/styles/page.module.css";
import MainHeader from "@/components/elements/header";
import MainFooter from "@/components/elements/footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <MainHeader />        
        <MainFooter />
      </main>
    </div>
  );
}
