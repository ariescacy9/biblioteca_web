

export const Navbar = () => {
  return (
    <>
        <ul className="bg-green-50 max-[639px]:hidden min-[640px]:flex min-[639px]:w-[500px] place-content-around text-4 items-center">
          <li className="hover:bg-blue-100 border-width: 2px" >
            <a href="#">Colecciones</a> 
          </li>
          <li className="hover:bg-blue-100">
            <a href="#">Libros</a> 
          </li>
          <li className="hover:bg-blue-100">
            <a href="#">Autores</a> 
          </li>
          <li className="hover:bg-blue-100">
            <a href="#">Actualidad</a> 
          </li>
          <li className="hover:bg-blue-100">
            <a href="#">Quiénes Somos</a>
          </li>
      </ul>
    </>
  )
}
