// ** React Imports
import Link from 'next/link'

// ** Components
import Button from '@/components/button/button';
import Card from '../../components/UI/dashboard/card';

import CardInfo from '../../assets/CardInfo'

import { HomeIcon } from '@heroicons/react/24/outline';


export default function Home() {
  return (
    <main className='container px-6 py-16 mx-auto text-center'>
      <div className="max-w-lg mx-auto flex flex-col items-center">
        <h1 className="text-3xl font-semibold lg:text-4xl">The Best Quality Cars</h1>
        <p className="mt-6 text-gray-500 dark:text-gray-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero similique obcaecati illum mollitia.
        </p>
        <Link href={'/login'}>
          <Button title='Get Started'/>
        </Link>
      </div>
      {/* <section>
        <div className="container px-6 py-10 mx-auto my-8">
          <h1 className='text-2xl font-semibold text-gray-800 capitalize lg:text-3xl'>Our Services</h1>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <Card
              logo={CardInfo[0].logo}
              title={CardInfo[0].title}
              description={CardInfo[0].description}
            />
            <Card
              logo={CardInfo[1].logo}
              title={CardInfo[1].title}
              description={CardInfo[1].description}
            />
            <Card
              logo={CardInfo[2].logo}
              title={CardInfo[2].title}
              description={CardInfo[2].description}
            />
          </div>
        </div>
      </section> */}
    </main>
  )
}
