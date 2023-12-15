import Card from "./Card"

const Cards = () => {
  return (
    <div className="bg-yellow-300 m-3 p-3">
      <div className="text-center">libros de TITULO</div>
      <div className="bg-blue-900 grid grid-cols-3 gap-4">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
      
      
  )
}

export default Cards