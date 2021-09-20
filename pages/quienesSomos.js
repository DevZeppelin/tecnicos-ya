import Head from "next/head";
import Layout from "../components/Layout";
import { BiCheckShield } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import Fade from "react-reveal/Fade";

const QuienesSomos = () => {
  return (
    <div>
      <Head>
        <title>La empresa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout classQuienesSomos={"bg-green"}>
        <section>
          <div className="bg-hero-pages bg-cover text-center py-20 md:py-40">
            <h1 className="text-4xl font-bold text-lowContrast uppercase">La empresa</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center space-y-8 md:space-y-4 p-8 md:p-16">
              <h2 className="text-2xl font-extrabold text-darkBlue">Nuestra empresa</h2>
              <div className="bg-green w-32 h-1 mx-auto"></div>
              <p>
                Desde 2010, <strong>Técnicos ya!</strong> ha pensado y actuado fuera de los
                límites tradicionales de la empresa.
              </p>
              <p>
                El motivo es que creemos que todas las dificultades brindan
                nuevas oportunidades; estamos decididos a identificar estas
                posibilidades en cada momento.
              </p>
              <p>
                <strong>Técnicos ya!</strong> es una empresa dedicada a brindar soluciones de
                tecnología, con una amplia cantidad de servicios orientados a
                satisfacer las más exigentes demandas. Para <strong>Técnicos ya!</strong> los
                clientes son el principal objetivo, y centra todos sus esfuerzos
                para lograr una relación que nos permita establecer compromisos
                a largo plazo.
              </p>
              <p>
                <strong>Técnicos ya!</strong> entiende, que el valor agregado que puede aportar
                se haya en el profesionalismo e idoneidad de nuestros recursos
                humanos, buscando así, los mejores perfiles para cada necesidad.
                <strong>Técnicos ya!</strong> se encuentra en todo el territorio nacional a
                través de una estructura de “Partners”, que permite ofrecer
                soluciones en todas las oficinas de sus clientes.
              </p>
            </div>
            <div className="my-auto">
              <img
                src="logo.png"
                alt="building icon logo construcciones med"
                className="p-8"
              />
            </div>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 px-8 md:px-32 pb-16 text-center">
          <Fade bottom>
            <div className="space-y-4">
              <FaEye className="mx-auto text-4xl text-green" />
              <h2 className="text-2xl text-darkBlue">Nuestra Visión</h2>
              <p>
              Acompañar a nuestros clientes en el proceso de gestión de la información, ofreciéndoles todos nuestros servicios.

              </p>
            </div>
          </Fade>
          <Fade bottom>
            <div className="space-y-4">
              <BiCheckShield className="mx-auto text-4xl text-green " />
              <h2 className="text-2xl text-darkBlue">Nuestro Objetivo</h2>
              <p>
              Ser una empresa capaz de lograr con todos los clientes una relación “de confianza”. Conociendo en profundidad a cada uno de ellos, con el objetivo claro de brindar soluciones integrales a medida que perduren en el tiempo.
              </p>
            </div>
          </Fade>
        </section>
      </Layout>
    </div>
  );
};

export default QuienesSomos;
