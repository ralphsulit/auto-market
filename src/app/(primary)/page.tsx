// ** React Imports
import Link from 'next/link'

// ** Components
import Button from "@/components/Button/Button";
import Card from '../ui/dashboard/card';

import { HomeIcon } from '@heroicons/react/24/outline';

const CardInfo = [
  {
    title: 'Interior and Exterior',
    description: 'Enhance the aesthetics of your vehicle with our comprehensive Interior and Exterior service. From meticulous interior cleaning to exterior detailing, we ensure that your car looks and feels brand new.',
    logo:
      <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none">
        <path d="M8 17H16M8 17C8 18.1046 7.10457 19 6 19C4.89543 19 4 18.1046 4 17M8 17C8 15.8954 7.10457 15 6 15C4.89543 15 4 15.8954 4 17M16 17C16 18.1046 16.8954 19 18 19C19.1046 19 20 18.1046 20 17M16 17C16 15.8954 16.8954 15 18 15C19.1046 15 20 15.8954 20 17M10 5V11M4 11L4.33152 9.01088C4.56901 7.58593 4.68776 6.87345 5.0433 6.3388C5.35671 5.8675 5.79705 5.49447 6.31346 5.26281C6.8993 5 7.6216 5 9.06621 5H12.4311C13.3703 5 13.8399 5 14.2662 5.12945C14.6436 5.24406 14.9946 5.43194 15.2993 5.68236C15.6435 5.96523 15.904 6.35597 16.425 7.13744L19 11M4 17H3.6C3.03995 17 2.75992 17 2.54601 16.891C2.35785 16.7951 2.20487 16.6422 2.10899 16.454C2 16.2401 2 15.9601 2 15.4V14.2C2 13.0799 2 12.5198 2.21799 12.092C2.40973 11.7157 2.71569 11.4097 3.09202 11.218C3.51984 11 4.0799 11 5.2 11H17.2C17.9432 11 18.3148 11 18.6257 11.0492C20.3373 11.3203 21.6797 12.6627 21.9508 14.3743C22 14.6852 22 15.0568 22 15.8C22 15.9858 22 16.0787 21.9877 16.1564C21.9199 16.5843 21.5843 16.9199 21.1564 16.9877C21.0787 17 20.9858 17 20.8 17H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
  },
  {
    title: 'Change Oil',
    description: 'Keep your engine running smoothly with our Change Oil service. Our expert technicians will replace your old oil with high-quality lubricants, promoting engine health and longevity.',
    logo:
      <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24">
        <g>
            <path fill="none" d="M0 0h24v24H0z"/>
            <path d="M9.07 7L6 11.606V20h12V7H9.07zM8 5h11a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V11l4-6zm5-4h5a1 1 0 0 1 1 1v2h-7V2a1 1 0 0 1 1-1zM8 12h2v6H8v-6z"/>
        </g>
      </svg>
  },
  {
    title: 'Change of Ownership',
    description: `Experience a seamless transition of vehicle ownership with our Change of Ownership service. We guide you through the necessary paperwork and procedures to ensure a hassle-free transfer of ownership.`,
    logo: 
    <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none">
      <path d="M15 11L15 17" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 12L12 17" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9 14L9 17" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M17.8284 6.82843C18.4065 7.40649 18.6955 7.69552 18.8478 8.06306C19 8.4306 19 8.83935 19 9.65685L19 17C19 18.8856 19 19.8284 18.4142 20.4142C17.8284 21 16.8856 21 15 21H9C7.11438 21 6.17157 21 5.58579 20.4142C5 19.8284 5 18.8856 5 17L5 7C5 5.11438 5 4.17157 5.58579 3.58579C6.17157 3 7.11438 3 9 3H12.3431C13.1606 3 13.5694 3 13.9369 3.15224C14.3045 3.30448 14.5935 3.59351 15.1716 4.17157L17.8284 6.82843Z" stroke="#323232" stroke-width="2" stroke-linejoin="round"/>
    </svg>
  },
]

export default function Home() {
  return (
    <main className='container text-center'>
      <div className="max-w-lg mx-auto flex flex-col items-center py-32">
        <h1 className="text-3xl font-semibold lg:text-4xl">The Best Quality Cars</h1>
        <p className="mt-6 text-gray-500 dark:text-gray-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero similique obcaecati illum mollitia.
        </p>
        <Link href={'/login'}>
          <Button />
        </Link>
      </div>
      <section>
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
      </section>
    </main>
  )
}
