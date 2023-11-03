// React imports
import Link from "next/link";

// Icons 
import { EnvelopeIcon, PhoneIcon} from '@heroicons/react/24/solid'


const Navbar = () => {
  return (
    <>
    <section className="contactInfo">
      <p><EnvelopeIcon className="h-5 w-5"/> kevinmutuc2393@gmail.com</p>
      <p><PhoneIcon className="h-4 w-4"/> +63 9178539914</p>
    </section>
    <nav>
      <Link href='/'><h1>AutoMarket</h1></Link>
      <span>
        <Link href='/about'>About Us</Link>
        <Link href='/models'>Models</Link>
        <Link href='/contact'>Contact Us</Link>
        <Link href='/signIn'>Sign In</Link>
      </span>
    </nav>
    </>
  )
}

export default Navbar