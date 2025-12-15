import styles from "@/app/styles/page.module.css";
import MainHeader from "@/components/elements/header";
import MainFooter from "@/components/elements/footer";
import CatDisplay from "@/components/cats/home.article";

export default function Home() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<MainHeader />
				<section className={styles.votingWrapper}>						
					<CatDisplay />
					<CatDisplay />
				</section>
				<MainFooter />
			</main>
		</div>
	);
}
