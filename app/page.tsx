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

export default async function Home() {
  const data: [] = await fetch('https://thronesapi.com/api/v2/Characters', {cache:'force-cache'}).then((res) => res.json());

  const date = await fetch('https://thronesapi.com/api/v2/Characters', {cache:'force-cache'}).then((res) => new Date().toLocaleTimeString());

  return (
   <div className='flex flex-wrap bg-black'>
    <div className='text-white block'>{date}</div>
    {data.map((person: ApiResponse) => <Image placeholder='blur' blurDataURL={person.imageUrl} className='object-contain' alt={person.firstName} key={person.id} src={person.imageUrl} width={500} height={500}/>)}
   
   </div>
  )
}
