import Link from "next/dist/client/link";

import MainBarButton from "./MainBarButton";
import { FiMapPin } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

const TopMainScreen = () => {
  return (
    <div className="flex px-2 md:px-24 text-darkBlue justify-center md:justify-between py-2">
      <Link href="/">
        <img src="/logo.png" alt="tecnicos ya" height="200" width="200" className="cursor-pointer"/>
      </Link>

      <div className="hidden md:flex justify-between space-x-4 text-center my-auto p-4">
        <a
          href="https://api.whatsapp.com/send?phone=5491161811533"
          target="_blank"
          rel="noopener"
        >
          <MainBarButton
            logo={
              <FiMapPin className=" text-green text-4xl flex my-auto m-3" />
            }
            text="Mendoza"
            description1="Pueyrredón 758"
            classType="text-green"
          />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5491161811533"
          target="_blank"
          rel="noopener"
        >
          <MainBarButton
            logo={
              <FiMapPin className=" text-green text-4xl flex my-auto m-3" />
            }
            text="CABA"
            description1="Lavalle 579"
            classType="text-green"
          />
        </a>

        <a
          href="mailto:tecnicosya2010@gmail.com"
          target="_blank"
          rel="noopener"
        >
          <MainBarButton
            logo={<FiMail className="text-green text-4xl flex my-auto m-3" />}
            text="Correo y teléfono"
            description1="tecnicosya2010@gmail.com"
            description2="11 6181-1533"
            classType="text-green"
          />
        </a>

        <Link href="/contacto">
          <div className="rounded-lg p-4 text-xl my-auto btn">Te llamamos</div>
        </Link>
      </div>
    </div>
  );
};

export default TopMainScreen;
