import Head from 'next/head'
import { Banner, Header, SmallCard } from '../components'

export default function Home(props) {
  const exploreData = props.exploreData
  return (
    <div className=''>
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Banner/>

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>

          {/* Pull some data from a server - API endpoints */}
          {exploreData.map(({img,distance,location})=>(
            <SmallCard 
            key={img}
            img={img} 
            distance={distance} 
            location={location}/>
          ))}
        </section>
      </main>
    </div>
  )
}

// export async function getStaticProps() {
//   const exploreData = await fetch("http://links.papareact.com/pyp/").then((res) => res.json());
//   return {
//     props: {
//       exploreData,
//     },
//   };
// }

import fsPromises from 'fs/promises';
import path from 'path'
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const exploreData = JSON.parse(jsonData);

  return {
    props: exploreData
  }
}