import img1 from "../assets/libros_portadas/9788411480192-el-imperio-de-la-depresion.jpg"

const Card = () => {
  return (
      <a href="#" className="bg-blue-300 cursor-pointer grid grid-cols-1 object-cover justify-items-center">
        <div className="bg-[rgb(194,69,17)] h-[100%]  w-[20%] grid justify-center items-center justify-items-center">
          <img src={img1} alt="libro1" className="h-[80%]" />
        </div>
      </a>
  )
}

export default Card
