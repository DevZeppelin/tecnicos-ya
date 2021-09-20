import MainBarButton from "./MainBarButton";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

import Link from "next/dist/client/link";

const Footer = () => {
  return (
    <div className="bg-darkBlue text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-6 space-y-8">
        <div className="flex justify-center my-auto">
          <Link href="/">
            <div className="block">
              <img
                src="/lightLogo.png"
                alt="building icon logo construcciones med"
                height="160"
                width="280"

                className="cursor-pointer"
            
              />
            </div>
          </Link>
        </div>
        <div className="text-lg">
          <h2 className="font-extrabold">¡Contactanos hoy!</h2>
          <a
            href="https://api.whatsapp.com/send?phone=5491161811533"
            target="_blank"
            rel="noopener"
          >
            <MainBarButton
              logo={
                <FaWhatsapp className="text-green text-2xl flex my-auto m-2" />
              }
              text="Pueyrredón 758 - Mendoza"
             
              classType=""
            />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5491161811533"
            target="_blank"
            rel="noopener"
          >
            <MainBarButton
              logo={
                <FaWhatsapp className="text-green text-2xl flex my-auto m-2" />
              }
              text="Lavalle 579 - CABA"
              
              classType=""
            />
          </a>
          <a
            href="mailto:tecnicosya2010@gmail.com"
            target="_blank"
            rel="noopener"
          ><MainBarButton
            logo={<FiMail className="text-green text-2xl flex my-auto m-2" />}
            text="Correo electrónico"
            description2="tecnicosya2010@gmail.com"
            classType=""
          /></a>
        </div>
        
      </div>
      <div className="p-4 text-sm bg-darkBlue">
        Make with &#128153; in Mendoza, Argentina<br/> by{" "}
        <a href="https://devzeppelin.ar" target="_blank" rel="noopener" className="font-extrabold text-lowContrast">
          Dev Zeppelin (Gino Pietrobon)
        </a>
        <br/> All rights reserved. &copy; &nbsp; {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Footer;
