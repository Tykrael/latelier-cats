export async function getData() {
    const response = await fetch('https://data.latelier.co/cats.json')
    const cats = await response.json();
    return cats;
}

export function getRandomInt(min: number, max: number): number {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

