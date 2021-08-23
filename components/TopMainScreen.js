import Link from "next/dist/client/link";

import MainBarButton from "./MainBarButton";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const TopMainScreen = () => {
  return (
    <div className="flex px-2 md:px-24 text-darkBlue justify-center md:justify-between py-2">
      <Link href="/">
        <img
          src="logo.png"
          alt="tecnicos ya"
          height="200"
          width="200"
        />
      </Link>

      <div className="hidden md:flex justify-between space-x-4 text-center my-auto p-4">
        <MainBarButton
          logo={<FaPhone className=" text-green text-4xl flex my-auto m-3" />}
          text="Neuquén"
          description1="Independencia 498"
          description2="011-22349038"
          classType="text-green"
        />
        <MainBarButton
          logo={<FaWhatsapp className=" text-green text-4xl flex my-auto m-3" />}
          text="Córdoba"
          description1="Mendoza 598"
          description2="0358-5086193"
          classType="text-green"
        />
        <MainBarButton
          logo={<FiMail className="text-green text-4xl flex my-auto m-3" />}
          text="Correo electrónico"
          description1="tecnicosya2010@gmail.com"
          classType="text-green"
        />

        <Link href="/contacto">
          <div className="rounded-lg p-4 text-xl my-auto btn">Te llamamos</div>
        </Link>
      </div>
    </div>
  );
};

export default TopMainScreen;
