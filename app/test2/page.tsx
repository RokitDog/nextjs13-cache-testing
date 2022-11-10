
async function getRandomQuote() {
    const res = await fetch('https://api.quotable.io/random', {cache: 'no-cache'})

    const data: Promise<DataApi> = await res.json();
    return data
}
interface DataApi {
    _id: string;
    content: string;
    author: string;
    tags: string[];
    authorSlug: string;
    length: number;
    dateAdded: string;
    dateModified: string;
}

async function page() {

    const data = await getRandomQuote()
  return (
    <div className="text-black">Data: {data.content}</div>
  )
}

export default page