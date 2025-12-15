import styles from '@/app/styles/page.module.css'



export default function Card({cat, index, podium}: {cat: { url: string, id: number, votes: number }, index: number, podium: (index: number) => string}) {
    return (
        <article key={cat.id} className={styles.catCard+' '+styles[podium(index)]}>
            <div className={styles.cardWrapper} style={{backgroundImage: `url(${cat.url})`}}>
                <div className={styles.position}>#{index+1}</div>
                <figcaption>
                    <div className={styles.captionWrapper}>
                        <div className={styles.name}>{cat.id}</div>
                        <div className={styles.votesDisplay}>With {cat.votes} votes!</div>
                    </div>
                </figcaption>
            </div>
        </article>
    )
}

