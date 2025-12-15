'use client';
import { use, useState } from "react";
import styles from "@/app/styles/page.module.css";
import MainHeader from "@/components/elements/header";
import MainFooter from "@/components/elements/footer";
import { useData } from "@/components/Providers";
import { compareVotesDesc } from "@/components/utils";


export default function List() {
	const { catsPromise } = useData();
	const cats = catsPromise ? use(catsPromise) : [];
	function getAllCats() {
		const allCats = cats as any;
		const catsList = allCats.images || []
		return catsList.sort(compareVotesDesc) || []
	}

	function podium(index: number) {
		if (index === 0) return "first";
		if (index === 1) return "second";
		if (index === 2) return "third";
		return '';
	}
	return (
		<main className={styles.page}>
			<section className={styles.main}>
				<MainHeader />
				<section className={styles.contentList}>
					<header>
						<h2>List Page</h2>
					</header>
					<section className={styles.catsList}>
						{getAllCats().map((cat: { url: string, id: number, votes: number }, index: any) => (
							<article key={cat.id} className={styles.catCard+' '+styles[podium(index)]}>
								<figure className={styles.catFigure}>
									<img src={cat.url} />
								</figure>
								<div className={styles.votesDisplay}>With {cat.votes} votes!</div>
								<div className={styles.position}>#{index+1}</div>
							</article>
						))}
					</section>
				</section>
				<MainFooter />
			</section>
		</main>
	)
}
