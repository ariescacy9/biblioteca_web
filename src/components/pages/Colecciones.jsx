

import col1 from "../../assets/libros_portadas/1.jpg"
import col2 from "../../assets/libros_portadas/2.jpg"
import col3 from "../../assets/libros_portadas/3.jpg"
import col4 from "../../assets/libros_portadas/4.jpg"
import col5 from "../../assets/libros_portadas/5.jpg"
import col6 from "../../assets/libros_portadas/6.jpg"
import col7 from "../../assets/libros_portadas/7.jpg"
import col8 from "../../assets/libros_portadas/8.jpg"
import col9 from "../../assets/libros_portadas/9.jpg"
import col10 from "../../assets/libros_portadas/10.jpg"
import col11 from "../../assets/libros_portadas/11.jpg"
import col12 from "../../assets/libros_portadas/12.jpg"
import flecha from "../../assets/arrow.png"

const Colecciones = () => {
  return (
    <div>
      <div className="bg-[#FEF6E4] p-6 flex flex-col center text-center gap-6">
        <div className="font-bold text-[#1F232A] text-2xl">El Libro de Bolsillo</div>
        <div className="flex justify-between gap-6 max-[877px]:flex-col max-[877px]:place-items-center">
          <div className="bg-green-300 cursor-pointer w-[30%] h-[400px] flex justify-center place-items-center
          max-[877px]:w-[100%]"> 
            <img className="shadow-[2px_2px_8px_2px_rgba(0,0,0,0.4)] w-[136px] h-[204px] max-[877px]:w-[150px] max-[877px]:h-[220px]" src={col1} alt="1" />
          </div>
          <div className=" bg-orange-300 cursor-pointer w-[30%] h-[400px] flex justify-center place-items-center max-[877px]:w-[100%]">
            <img className="shadow-[2px_2px_8px_2px_rgba(0,0,0,0.4)] top-[20%] left-[20%] w-[136px] h-[204px]" src={col2} alt="2" />
          </div>
          <div className="bg-pink-400 cursor-pointer w-[30%] h-[400px] flex justify-center place-items-center
          max-[877px]:w-[100%]">
            <img className="shadow-[2px_2px_8px_2px_rgba(0,0,0,0.4)] w-[136px] h-[204px]" src={col3} alt="3" />
          </div>
        </div>
        <div><button className="bg-yellow-200 p-1 w-[180px] hover:bg-yellow-500" href="#">Ver Colección <img className="inline h-[30px]" src={flecha} alt="flecha" /></button></div>
      </div>

      <div className="bg-[#FFFFFF] p-6 flex flex-col center text-center gap-6">
        <div className="font-bold text-[#1F232A] text-2xl">Estructuras Rotas Ensayo</div>
        <div className="flex justify-between gap-6 max-[877px]:flex-col max-[877px]:place-items-center">
          <div className="bg-red-300 cursor-pointer w-[30%] h-[400px] flex justify-center place-items-center
          max-[877px]:w-[100%]"> 
            <img className="shadow-[2px_2px_8px_2px_rgba(0,0,0,0.4)] w-[136px] h-[204px] max-[877px]:w-[150px] max-[877px]:h-[220px]" src={col4} alt="1" />
          </div>
          <div className="bg-blue-900 cursor-pointer w-[30%] h-[400px] flex justify-center place-items-center max-[877px]:w-[100%]">
            <img className="shadow-[2px_2px_8px_2px_rgba(0,0,0,0.4)] top-[20%] left-[20%] w-[136px] h-[204px]" src={col5} alt="2" />
          </div>
          <div className="bg-purple-400 cursor-pointer w-[30%] h-[400px] flex justify-center place-items-center
          max-[877px]:w-[100%]">
            <img className="shadow-[2px_2px_8px_2px_rgba(0,0,0,0.4)] w-[136px] h-[204px]" src={col6} alt="3" />
          </div>
        </div>
        <div><button className="bg-yellow-200 p-1 w-[180px] hover:bg-yellow-500" href="#">Ver Colección <img className="inline h-[30px]" src={flecha} alt="flecha" /></button></div>
      </div>

      <div className="bg-[#B5D9E6] p-6 flex flex-col center text-center gap-6">
        <div className="font-bold text-[#1F232A] text-2xl">Literatura</div>
        <div className="flex justify-between gap-6 max-[877px]:flex-col max-[877px]:place-items-center">
          <div className="bg-green-300 cursor-pointer w-[30%] h-[400px] flex justify-center place-items-center
          max-[877px]:w-[100%]"> 
            <img className="shadow-[2px_2px_8px_2px_rgba(0,0,0,0.4)] w-[136px] h-[204px] max-[877px]:w-[150px] max-[877px]:h-[220px]" src={col7} alt="1" />
          </div>
          <div className=" bg-orange-300 cursor-pointer w-[30%] h-[400px] flex justify-center place-items-center max-[877px]:w-[100%]">
            <img className="shadow-[2px_2px_8px_2px_rgba(0,0,0,0.4)] top-[20%] left-[20%] w-[136px] h-[204px]" src={col8} alt="2" />
          </div>
          <div className="bg-pink-400 cursor-pointer w-[30%] h-[400px] flex justify-center place-items-center
          max-[877px]:w-[100%]">
            <img className="shadow-[2px_2px_8px_2px_rgba(0,0,0,0.4)] w-[136px] h-[204px]" src={col9} alt="3" />
          </div>
        </div>
        <div><button className="bg-yellow-200 p-1 w-[180px] hover:bg-yellow-500" href="#">Ver Colección <img className="inline h-[30px]" src={flecha} alt="flecha" /></button></div>
      </div>

      <div className="bg-white p-6 flex flex-col center text-center gap-6">
        <div className="font-bold text-[#1F232A] text-2xl">otros libros</div>
        <div className="flex justify-between gap-6 max-[877px]:flex-col max-[877px]:place-items-center">
          <div className="bg-[#558078] cursor-pointer w-[30%] h-[400px] flex justify-center place-items-center
          max-[877px]:w-[100%]"> 
            <img className="shadow-[2px_2px_8px_2px_rgba(0,0,0,0.4)] w-[136px] h-[204px] max-[877px]:w-[150px] max-[877px]:h-[220px]" src={col10} alt="1" />
          </div>
          <div className=" bg-[#BB9373] cursor-pointer w-[30%] h-[400px] flex justify-center place-items-center max-[877px]:w-[100%]">
            <img className="shadow-[2px_2px_8px_2px_rgba(0,0,0,0.4)] top-[20%] left-[20%] w-[136px] h-[204px]" src={col11} alt="2" />
          </div>
          <div className="bg-[#C2C2C2] cursor-pointer w-[30%] h-[400px] flex justify-center place-items-center
          max-[877px]:w-[100%]">
            <img className="shadow-[2px_2px_8px_2px_rgba(0,0,0,0.4)] w-[136px] h-[204px]" src={col12} alt="3" />
          </div>
        </div>
        <div><button className="bg-yellow-200 p-1 w-[180px] hover:bg-yellow-500" href="#">Ver Colección <img className="inline h-[30px]" src={flecha} alt="flecha" /></button></div>
      </div>
    </div>
  )
}
export default Colecciones
