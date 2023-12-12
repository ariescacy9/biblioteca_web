import {Link} from 'react-router-dom'
import torre from "../assets/torre.jpg"
import empresa from "../assets/empresa.png"
import { Navbar } from './Navbar'
import buscador from "../assets/search.svg"
import burgerMenu from "../assets/menu.svg"

function Header() {
  return (
    <header className="bg-white lg:flex sw:flex-col place-content-between items-center px-2 py-2 max-[639px]:flex">
      <Link to='./'>
        <div className="flex">
          <img className="h-10 w-10 rounded-full object-cover object-center" src={torre} alt="logo" />
          <img className="h-10 rounded-full object-cover object-center" src={empresa} alt="empresa" />  
        </div>
      </Link>
      <div className="flex place-content-around gap-8 items-center px-2 py-2 max-[1023px]:place-content-between max-[720px]:place-content-between" >
        <img className="h-5 cursor-pointer sm:hidden" src={burgerMenu} alt="menu" />
        <Navbar />
        <img className="h-6 rounded-full object-cover object-center cursor-pointer sm:block hidden" src={buscador} alt="buscados" />
      </div>
    </header>
  )
}

export default Header