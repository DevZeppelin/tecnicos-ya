import Head from "next/head";
import Layout from "../components/Layout";
import MainBarButton from "../components/MainBarButton";
import { FiMapPin } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import Fade from "react-reveal/Fade";

const Contacto = () => {
  return (
    <div>
      <Head>
        <title>Contacto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout classContacto={"bg-green"}>
        <div className="bg-hero-pages bg-cover text-center py-20 md:py-40">
          <h1 className="text-4xl font-bold text-lowContrast uppercase">
            Contactanos
          </h1>
        </div>
        <div className="text-center space-y-6 pt-12">
          <h2 className="text-2xl font-bold text-darkBlue p-6">
            Trabajá con profesionales
          </h2>
          <p className="text-lg md:w-1/2 mx-auto p-4">
            Ponemos a su alcance una amplio abanico de profesionales dispuestos
            a buscar la mejor solución a sus necesidades
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-2 md:p-12 ">
            <Fade big>
              <div>
                <a
                  href="https://api.whatsapp.com/send?phone=5491161811533"
                  target="_blank"
                  rel="noopener"
                >
                  <MainBarButton
                    logo={
                      <FiMapPin className="text-green text-2xl md:text-6xl flex my-auto m-4" />
                    }
                    text="CABA"
                    description1="Lavalle 579"
                    classType="text-green text-2xl my-2"
                  />
                </a>
              </div>
            </Fade>
            <Fade big>
              <div>
                <a
                  href="https://api.whatsapp.com/send?phone=5491161811533"
                  target="_blank"
                  rel="noopener"
                >
                  <MainBarButton
                    logo={
                      <FiMapPin className="text-green text-2xl md:text-6xl flex my-auto m-4" />
                    }
                    text="Mendoza"
                    description1="Pueyrredón 758"
                    
                    classType="text-green text-2xl my-2"
                  />
                </a>
              </div>
            </Fade>
            <Fade big>
              <div>
                <a
                  href="mailto:construmed@gmail.com"
                  target="_blank"
                  rel="noopener"
                >
                  <MainBarButton
                    logo={
                      <FiMail className="text-green text-2xl md:text-6xl flex my-auto m-4" />
                    }
                    text="Correo y teléfono"
                    description1="tecnicosya2010@gmail.com"
                    description2="11 6181-1533"
                    classType="text-green text-xl my-2"
                  />
                </a>
              </div>
            </Fade>
          </div>
        </div>
        <section className="text-darkBlue-400 bg-darkBlue-900 body-font relative">
          <div className="absolute inset-0 bg-darkBlue-900">
            <iframe
              title="map"
              width="100%"
              height="100%"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=caba,lavalle,579, caba,(tecnicos ya)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
          <div className="container px-5 py-24 mx-auto flex">
            <Fade right>
              <div className="lg:w-1/3 md:w-1/2 bg-darkBlue-900 shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
                <h2 className="text-darkBlue text-xl mb-1 font-extrabold title-font">
                  Contactanos!
                </h2>
                <p className="leading-relaxed mb-5 font-bold">
                  Envíanos tu consulta y nos pondremos en contacto con vos en
                  breve!
                </p>
                <div className="relative mb-4">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-darkBlue-400 font-bold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-darkBlue-800 rounded border border-darkBlue-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-darkBlue-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-darkBlue-400 font-bold"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-darkBlue-800 rounded border border-darkBlue-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-darkBlue-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
                <button className="btn">Enviar</button>
                <p className="text-xs text-darkBlue-400 text-opacity-90 mt-3">
                  Técnicos Ya! Soluciones Inteligentes
                </p>
              </div>
            </Fade>
          </div>
        </section>
      </Layout>
    </div>
  );
};

/* style="" */

export default Contacto;
