import facebook from "../assets/red_social/facebook.svg"
import instagram from "../assets/red_social/instagram.svg"
import tiktok from "../assets/red_social/tiktok.svg"
import twitter from "../assets/red_social/twitter.svg"
import whatsapp from "../assets/red_social/whatsapp.svg"
import youtube from "../assets/red_social/youtube.svg"
import empresa from "../assets/empresa.png"
import torre from "../assets/torre.jpg"

const Footer = () => {
  return (
    <footer className="bg-[#1F232A]">
      <div className="flex place-content-between px-3 py-3 max-[448px]:flex-col max-[448px]:items-center max-[448px]:space-y-2 ">
        <div className="place-items-center">
          <a href="#" className="flex ">
            <img className="h-10 rounded-l" src={torre} alt="torre" /> 
            <img className="h-10 rounded-r bg-white" src={empresa} alt="empresa" />
          </a>
        </div>
        <div className="flex place-content-around gap-9 max-[770px]:flex-col max-[448px]:flex-row">
          <ul className="text-white text-xs space-y-2">
            <li className="text-[#575A58]">SOBRE NOSOTROS</li>
            <li><a href="#">Actualidad</a></li>
            <li><a href="#">Quiénes somos</a></li>
            <li><a href="#" target="_blank" >Grupo Anaya</a></li>
            <li><a href="#">Foreign Rights</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
          <ul className="text-white text-xs space-y-2">
            <li className="text-[#575A58]" >OTROS LINKS</li>
            <li ><a href="#">Aviso legal</a></li>
            <li ><a href="#">Cookies</a></li>
            <li ><a href="#">Política de privacidad</a></li>
            <li ><a href="#">Línea ética / Denuncias</a></li>
          </ul>
        </div>
        <div className="space-y-4 max-[654px]:space-y-2">
          <div className="text-[#575A58]">SÍGUENOS</div>
          <div className="flex gap-5 max-[654px]:grid max-[448px]:flex">
            <a href="#" target="_blank">
              <img className="h-7 object-cover object-center max-[448px]:h-5" src={facebook} alt="facebook" />
            </a>
            <a href="#" target="_blank">
              <img className="h-7  object-cover object-center max-[448px]:h-5" src={instagram} alt="instagram" />
            </a>
            <a href="#" target="_blank">
              <img className="h-7 object-cover object-center max-[448px]:h-5" src={tiktok} alt="tiktok" />
            </a>
            <a href="#" target="_blank">
              <img className="h-7 object-cover object-center max-[448px]:h-5" src={twitter} alt="twitter" />
            </a>
            <a href="#" target="_blank">
              <img className="h-7 object-cover object-center max-[448px]:h-5" src={whatsapp} alt="whatsapp" /> 
            </a>
            <a href="#" target="_blank">
              <img className="h-7 object-cover object-center max-[448px]:h-5" src={youtube} alt="youtube" />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-[#1F232A] flex justify-end">
        <div className="px-3 text-white">@creado por CACY-2023</div>
      </div>
    </footer>
  )
}

export default Footer