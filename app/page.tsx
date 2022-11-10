import Image from 'next/image'

interface ApiResponse {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  title: string;
  family: string;
  image: string;
  imageUrl: string;
}

interface Time {
  unixtime: number;
}

async function getImages() {
  const res = await fetch('https://thronesapi.com/api/v2/Characters', {cache:'force-cache'})

  const data: [] = await res.json();

  return data
} 
  

async function getCurrentTime() {
  const res = await fetch('http://worldtimeapi.org/api/timezone/America/Chicago', {next: {revalidate: 1}})

  const time: Promise<Time> = await res.json();

  return time
}

export default async function Home() {
  const date = await getCurrentTime();
  const data = await getImages();


  return (
   <div className='flex flex-wrap bg-black'>
    <div className='text-white block'>{new Date(date.unixtime * 1000).toString()}</div>
    {data.map((person: ApiResponse) => <Image placeholder='blur' blurDataURL={person.imageUrl} className='object-contain' alt={person.firstName} key={person.id} src={person.imageUrl} width={500} height={500}/>)}
   
   </div>
  )
}
