export async function getData() {
    const response = await fetch('https://data.latelier.co/cats.json')
    const cats = await response.json();
    const enrichedCats = getCatsList(cats);
    return enrichedCats;
}

export function getRandomInt(min: number, max: number): number {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

export function compareVotesDesc(a: any, b: any) {
    return b.votes-a.votes;
}

export async function getCatsList(cats: any) {
    const catsList = cats.images.map((cat: any, index: number) => ({
        ...cat,
        votes: getRandomInt(0, 1000),
    }));
    cats.images = catsList;
    return cats;
}