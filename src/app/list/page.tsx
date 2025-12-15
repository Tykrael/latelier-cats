'use client';
import { use, useState } from "react";
import styles from "@/app/styles/page.module.css";
import MainHeader from "@/components/elements/header";
import MainFooter from "@/components/elements/footer";
import { useData } from "@/components/Providers";
import { compareVotesDesc } from "@/components/utils";
import Card from "./card";


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
					<section className={styles.catsList}>
						{getAllCats().map((cat: { url: string, id: number, votes: number }, index: any) => (
							<Card cat={cat} index={index} podium={podium} key={cat.id} />
						))}
					</section>
				</section>
				<MainFooter />
			</section>
		</main>
	)
}
