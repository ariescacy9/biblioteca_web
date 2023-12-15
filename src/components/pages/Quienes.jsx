import logo from "../../assets/logo.png"

const Quienes = () => {
  return (
    <div>
      <div >
        <div className="m-4 gap-5 bg-[rgba(237,247,252,0.5)]">
          <div className="flex justify-center">
            <img className="opacity-50" src={logo}/>
          </div >
          <h1 className="text-[40px] text-[#575A58] font-bold">Quiénes somos</h1>
          <p className="flex flex-row-reverse">
            <span>Estructuras Rotas Ediciones fue fundada en 
              <span className="text-[60px] text-[#F8CF6B] font-bold"> 2019</span> 
            </span>
          </p>
          <p className="w-[50%]">Desde su germinación se constituye como unatrinchera linguítica con libertad de reflexión y de crítica frente al mercado y el capital cotidiano,metamorfizando sus grietas. Es decir, se busca publicar lenguajes que interrogan e interpelan desde los bordes de destrución, reconstrucción y desconstruccion del sentido.</p>
          <div className="flex flex-row-reverse">
            <p className="w-[50%]  text-right">De esta manera, la editorial pretende contribuir al pensamiento reflexivo de la resistencia, solidaridad y creatividad en el contexto político, social e histórico de diferentes territorios. En suma, la editorial práctica, publica y edita material literario, desde un punto de vista artístico, poético, expropiador y expansivo a nivel visual.</p>
          </div>
        </div>     
      </div>
    </div>    
  )
}

export default Quienes