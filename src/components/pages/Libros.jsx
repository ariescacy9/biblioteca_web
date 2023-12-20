

const Libros = () => {
  return (
    <div className="flex p-6">
      <div className="w-[30%] flex flex-col gap-4">
        <p>Autores</p>
        <input className="bg-green-200 m-4" type="search" placeholder="Buscar" />
        <p>escriba el nombre del autor</p>
      </div>
      <div className="w-[70%]">
        <div className="bg-pink-200 flex justify-between cursor-pointer" href="#">
          <span className="text-[#b5bac9] text-[100px] w-[110px] h-[133px] font-bold underline underline-offset-8 flex justify-center place-items-center ">A</span>
          <div className="text-end flex flex-col gap-4 p-2">
            <p className="text-[#89b1bf] w-[200px] italic">“He aprendido todo tipo de cosas de mis muchos errores . Lo único que nunca aprendo es a dejar de hacerlos.”</p>
            <p>Abercrombie, Joe</p>
          </div>
        </div>
        <div className="bg-blue-100 flex justify-between cursor-pointer" href="#">
          <span className="text-[#b5bac9] text-[100px] w-[110px] h-[133px] font-bold underline underline-offset-8 flex justify-center place-items-center ">B</span>
          <div className="text-end flex flex-col gap-4 p-2">
            <p className="text-[#89b1bf] w-[200px] italic">“He aprendido todo tipo de cosas de mis muchos errores . Lo único que nunca aprendo es a dejar de hacerlos.”</p>
            <p>bercrombie, Noe</p>
          </div>
        </div>
        <div className="bg-orange-100 flex justify-between cursor-pointer" href="#">
          <span className="text-[#b5bac9] text-[100px] w-[110px] h-[133px] font-bold underline underline-offset-8 flex justify-center place-items-center ">C</span>
          <div className="text-end flex flex-col gap-4 p-2">
            <p className="text-[#89b1bf] w-[200px] italic">“He aprendido todo tipo de cosas de mis muchos errores . Lo único que nunca aprendo es a dejar de hacerlos.”</p>
            <p>Cervantes Laura, Sam</p>
          </div>
        </div>
        <div className="bg-blue-200 flex justify-between cursor-pointer" href="#">
          <span className="text-[#b5bac9] text-[100px] w-[110px] h-[133px] font-bold underline underline-offset-8 flex justify-center place-items-center ">D</span>
          <div className="text-end flex flex-col gap-4 p-2">
            <p className="text-[#89b1bf] w-[200px] italic">“He aprendido todo tipo de cosas de mis muchos errores . Lo único que nunca aprendo es a dejar de hacerlos.”</p>
            <p>Dombuldore, Danny</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Libros