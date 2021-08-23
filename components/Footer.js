import MainBarButton from "./MainBarButton";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { FiMail, FiYoutube } from "react-icons/fi";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import Link from "next/dist/client/link";

const Footer = () => {
  return (
    <div className="bg-darkBlue text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 md:p-6 space-y-8">
        <div className="flex justify-center my-auto">
          <Link href="/">
            <div className="block">
              <img
                src="lightLogo.png"
                alt="building icon logo construcciones med"
                height="160"
                width="280"
            
              />
            </div>
          </Link>
        </div>
        <div className="text-lg">
          <h2 className="font-extrabold">¡Contactanos hoy!</h2>
          <a
            href="https://api.whatsapp.com/send?phone=5492616708100"
            target="_blank"
            rel="noopener"
          >
            <MainBarButton
              logo={
                <FaPhone className="text-green text-2xl flex my-auto m-2" />
              }
              text="Independencia 948 - Neuquen"
              description2="011-22349038"
              classType=""
            />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5492616708100"
            target="_blank"
            rel="noopener"
          >
            <MainBarButton
              logo={
                <FaWhatsapp className="text-green text-2xl flex my-auto m-2" />
              }
              text="Mendoza 598 - Cordoba"
              description2="0358-5086193"
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

        <div className="text-xl">
          <h2 className="font-extrabold">Síguenos!</h2>
          <div className="flex justify-between m-4 text-4xl w-36 ">
            <a
              href="https://www.facebook.com/Gini77o"
              target="_blank"
              rel="noopener"
            >
              <button aria-label="go to my fabecook" alt="facebook-logo">
                <FaFacebook className="hover:text-blue-800" />
              </button>
            </a>
            <a
              href="https://youtube.com/DevZeppelin"
              target="_blank"
              rel="noopener"
            >
              <button aria-label="go to my youtube channel" alt="youtube-logo">
                <FiYoutube className="hover:text-green" />
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/gino-pietrobon"
              target="_blank"
              rel="noopener"
            >
              <button aria-label="go to my linked in" alt="linkedin-logo">
                <FaLinkedinIn className="hover:text-yellow-400" />
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="p-4 text-sm bg-darkBlue">
        Make with &#128153; in Mendoza, Argentina, by{" "}
        <a href="https://moonblog.ar" target="_blank" rel="noopener">
          Gino Pietrobon
        </a>
        . All rights reserved. &copy; &nbsp; {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Footer;
