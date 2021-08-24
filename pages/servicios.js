import Head from "next/head";
import Layout from "../components/Layout";
import { FaIndustry } from "react-icons/fa";
import { AiOutlineBuild, AiOutlineStar } from "react-icons/ai";
import { RiBuilding2Line } from "react-icons/ri";
import { WiSolarEclipse } from "react-icons/wi";
import { GiMechanicalArm } from "react-icons/gi";
import { FiCpu } from "react-icons/fi";

import { ServiciosItem } from "../components/ServiciosItem";
import Fade from "react-reveal/Fade";

const Servicios = () => {
  return (
    <div>
      <Head>
        <title>Servicios</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout classServicios={"bg-green"}>
        <div>
          <div className="bg-hero-pages bg-cover text-center py-20 md:py-40">
            <h1 className="text-4xl font-bold text-lowContrast uppercase">
              Servicios
            </h1>
          </div>
          <div>
            <section className="text-darkBlue-400 body-font">
              <div className="p-6 md:p-24 py-16 mx-auto">
                <Fade big>
                  <div className="flex flex-wrap -m-4">
                    <ServiciosItem
                      titulo={"Soporte General"}
                      icono={
                        <AiOutlineStar className="mx-auto text-6xl text-green" />
                      }
                    />
                    <ServiciosItem
                      titulo={"Outsourcing"}
                      icono={
                        <AiOutlineStar className="mx-auto text-6xl text-green" />
                      }
                    />
                    <ServiciosItem
                      titulo={"Recursos Humanos"}
                      icono={
                        <AiOutlineStar className="mx-auto text-6xl text-green" />
                      }
                    />
                  </div>
                </Fade>

                <div className="flex flex-wrap w-full mb-12 flex-col items-center text-center">
                  <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 mt-20 text-darkBlue">
                    Nuestra variedad de servicios
                  </h1>
                  <p className="lg:w-1/2 w-full text-lg px-2 md:px-32  leading-relaxed text-opacity-80">
                    Somos una empresa argentina. Contamos con profesionales y
                    técnicos experimentados en el campo, lo cual nos permite
                    entregar soluciones reales y servicios de calidad.
                  </p>
                </div>
                <Fade big>
                  <div className="flex flex-wrap -m-4">
                    <ServiciosItem
                      titulo={"Tecnologías IT"}
                      icono={
                        <FiCpu className="mx-auto text-6xl text-green" />
                      }
                    />
                    <ServiciosItem
                      titulo={"Capacitaciones"}
                      icono={
                        <AiOutlineBuild className="mx-auto text-6xl text-green" />
                      }
                    />
                    <ServiciosItem
                      titulo={"Electromecánica"}
                      icono={
                        <GiMechanicalArm className="mx-auto text-6xl text-green" />
                      }
                    />
                    <ServiciosItem
                      titulo={"Consultoría y Proyectos"}
                      icono={
                        <RiBuilding2Line className="mx-auto text-6xl text-green" />
                      }
                    />

                    <ServiciosItem
                      titulo={"Mantenimiento Industrial"}
                      icono={
                        <FaIndustry className="mx-auto text-6xl text-green" />
                      }
                    />
                    <ServiciosItem
                      titulo={"Energías Alternativas"}
                      icono={
                        <WiSolarEclipse className="mx-auto text-6xl text-green" />
                      }
                    />
                  </div>
                </Fade>
              </div>
            </section>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Servicios;
