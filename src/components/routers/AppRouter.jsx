
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Principal from '../pages/Principal'
import Actualidad from '../pages/Actualidad'
import Autores from '../pages/Autores'
import Busqueda from '../pages/Busqueda'
import Colecciones from '../pages/Colecciones'
import Libros from '../pages/Libros'
import Quienes from '../pages/Quienes'
import Header from '../Header'
import Footer from '../Footer'


function AppRouter() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' exact element={<Principal/>} />
        <Route path='/Actualidad' element={<Actualidad/>} />
        <Route path='/Autores' element={<Autores/>} />
        <Route path='/Busqueda' element={<Busqueda/>} />
        <Route path='/Colecciones' element={<Colecciones/>} />
        <Route path='/Libros' element={<Libros/>} />
        <Route path='/Quienes' element={<Quienes/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
export default AppRouter