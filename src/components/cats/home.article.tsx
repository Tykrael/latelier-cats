'use client';
import { use, useState } from "react";
import styles from "@/app/styles/page.module.css";
import { useData } from "@/components/Providers";
import { getRandomInt } from "@/components/utils";

export default function catDisplay() {
    const {catsPromise} = useData();
    const cats = catsPromise ? use(catsPromise) : [];
    const [votes, setLikes] = useState(0);
    const data = useData();

    function handleCatClick() {
        setLikes(getCat().votes + 1);
        /*todo 
        update cat's votes corresponding to cat id
        */
    }
    function getCat(){
        const allCats = cats as any;
        return allCats.images.at( getRandomInt(0, allCats.images.length) )
    }

    return (
        <article className={styles.catCard}>
			<div className={styles.cardWrapper} style={{backgroundImage: `url(${getCat().url})`}}>
				<div className={styles.cardContents}>
					<div className={styles.captionWrapper}>
						<div className={styles.name}>{getCat().id}</div>
						<button className={styles.likeButton} onClick={handleCatClick}>Like</button>
					</div>
				</div>
				
			</div>
        </article>
    );
}
