import styles from "@/app/styles/page.module.css";

export default function MainHeader() {
	return (
		<header className={styles.header}>
			<a href="/"><img src="/cat-logo.png" alt="Cat Smash Logo" /></a>
			<h1>Welcome to Cat Smash!</h1>
		</header>
    );
}

