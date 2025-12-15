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
        <article className={styles.catDisplay}>
            <h2>Cat Display Component</h2>            
            <figure>
                <img
                    src={getCat().url} /*"/figure-placeholder.png"*/
                    alt="Placeholder Cat"
                    width="250"
                />
                <figcaption>Adorable Cat</figcaption>
            </figure>
            <button onClick={handleCatClick}>Like</button>
            <p>Likes: {getCat().votes}</p>
        </article>
    );
}