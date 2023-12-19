import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
        <ul className="bg-[#b5bac9] max-[639px]:hidden min-[640px]:flex min-[639px]:w-[500px] place-content-around text-4 items-center">
          <li className="hover:bg-blue-100 border-width: 2px" >
            <Link to='./Colecciones'>
              <p>Colecciones</p>
            </Link > 
          </li>
          <li className="hover:bg-blue-100">
            <Link to='./Libros'>
              <p>Libros</p> 
            </Link > 
          </li>
          <li className="hover:bg-blue-100">
            <Link to='./Autores'>
              <p>Autores</p>
            </Link >  
          </li>
          <li className="hover:bg-blue-100">
            <Link to='./Actualidad'>
              <p>Actualidad</p> 
            </Link > 
          </li>
          <li className="hover:bg-blue-100">
            <Link to='./Quienes'>
              <p>Quiénes Somos</p>
            </Link > 
          </li>
      </ul>
    </>
  )
}
