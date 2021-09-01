import Head from "next/head";
import Link from "next/dist/client/link";
import Layout from "../components/Layout";
import SectionWelcome from "../components/sections/SectionWelcome";
import { IndexGridImageContent } from "../components/IndexGridImageContent";
import { AiFillStar } from "react-icons/ai";
import Fade from "react-reveal/Fade";

import { Help } from "./IT/help";

//Comilla invertida ````````

export default function Home() {
  return (
    <div>
      <Head>
        <title>Técnicos Ya! Soluciones Inteligentes</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="tecnicos ya, tecnicos, empresa, mendoza, pc, soluciones, tecnologia, informatica, digital, servicios informaticos"
        />
        <meta
          name="keywords"
          content="tecnicos ya, tecnicos, pc, soluciones, tecnologia, informatica, digital, servicios informaticos, mendoza, argentina, it"
        />
        <meta name="author" content="Gino Pietrobon" />
      </Head>
      <Layout classHome={"bg-green"}>
        <SectionWelcome />
        <section>
          <div className="space-y-2 text-center p-12 px-8 md:px-32 pt-8 bg-lowContrast">
            <h1 className="font-bold text-2xl tracking-wider text-darkBlue uppercase">
              Asesoramiento Inicial sin Cargo
            </h1>
            <p className="text-darkBlue text-lg">
              Nuestros expertos le brindaraan un informe inicial completamente
              sin cargo. Buscando las mejores soluciones de acuerdo con sus
              necesidades Solicite su asesoramiento gratuito hoy mismo. No
              espere más!!!
            </p>
          </div>
        </section>
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-4 md:m-24 text-center fadeIn element">
            <Fade left>
              <div className="my-auto font-bold flex">
                <div className="w-3 h-44 md:h-32 bg-green my-auto"></div>
                <p className="text-3xl m-3 md:m-6 my-auto text-darkBlue text-left">
                  <p className="text-xl md:text-3xl">INFRAESTRUCTURA</p>
                  <p className="text-6xl">IT</p>
                </p>
              </div>
            </Fade>
            <Fade bottom>
              <Link href="../IT/help">
                <div className="relative overflow-hidden cursor-pointer">
                  <div className="indexGridContainer">
                    <div className="indexGridImageText">
                      Help Desk, Soporte y Mantenimiento
                    </div>
                    <IndexGridImageContent
                      textDescription="Cuente con técnicos e ingenieros con más de 10 años de experiencia en implementación de las soluciones más complejas e innovadoras. Podemos garantizar la satisfacción de nuestros clientes para alcanzar las soluciones tecnológicas deseadas para su negocio."
                      src="/ITImages/01-helpdesk.png"
                      alt="lalala"
                    />
                  </div>
                </div>
              </Link>
            </Fade>
            <Fade bottom>
              <div className="relative overflow-hidden cursor-pointer">
                <div className="indexGridImageText">Electricidad</div>
                <IndexGridImageContent
                  textDescription="UPS, Grupos electrógenos y electricidad en general. Contamos con recursos que nos permiten garantizar excelencia en servicios e instalaciones electricas"
                  src="/ITImages/02-electricity.png"
                  alt="lalala"
                />
              </div>
            </Fade>
            <Fade bottom>
              <Link href="../IT/redes">
                <div className="relative overflow-hidden cursor-pointer">
                  <div className="indexGridImageText">Redes y CCTV</div>
                  <IndexGridImageContent
                    textDescription="Cuente con una solución confiable en cableado estructurado de UTP y fibre óptica. Como también inalámbrica. Instalaciones de Rack de telecomunicaciones y sistemas de CCTV, control y mantenimiento."
                    src="/ITImages/03-cctv.png"
                    alt="lalala"
                  />
                </div>
              </Link>
            </Fade>
            <Fade bottom>
            <Link href="../IT/energia">
              <div className="relative overflow-hidden cursor-pointer">
                <div className="indexGridImageText">Soluciones de Energía</div>
                <IndexGridImageContent
                  textDescription="Cuente con técnicos especializados y dedicados a brindar servicios de mantenimiento preventivo, correctivo en UPS y Generadores. Ofrecemos una solución alternativa en la implementación de la Energía Solar."
                  src="/ITImages/04-solar.png"
                  alt="lalala"
                />
              </div>
              </Link>
            </Fade>
            <Fade bottom>
            <Link href="../IT/microinfo">
              <div className="relative overflow-hidden cursor-pointer">
                <div className="indexGridImageText">Microinformática</div>
                <IndexGridImageContent
                  textDescription="Mejore  la productividad y eficiencia en su organización. Obtenga personal técnico especializado para Instalar, configurar y mantener servicios de su parque informático optimizando sus recursos."
                  src="/ITImages/05-microinfo.png"
                  alt="lalala"
                />
              </div>
              </Link>
            </Fade>
            <Fade bottom>
            <Link href="../IT/gerenciamiento">
              <div className="relative overflow-hidden cursor-pointer">
                <div className="indexGridImageText">
                  Gerenciamiento de proyectos y RRHH
                </div>
                <IndexGridImageContent
                  textDescription="Brindamos la organización, administración, optimización y desarrollo completo de los recursos; de forma tal que; un proyecto sea terminado completamente dentro de las restricciones de alcance, calidad, plazo y costo planteados a su inicio."
                  src="/ITImages/06-rrhh.png"
                  alt="lalala"
                />
              </div>
              </Link>
            </Fade>
            <Fade bottom>
              <div className="relative overflow-hidden cursor-pointer">
                <div className="indexGridImageText">Básculas y Balanzas</div>
                <IndexGridImageContent
                  textDescription="Obtenga un servicio de control y calidad en reparación, calibración, mantenimiento de básculas y balanzas. Contamos con especialistas y herramientas necesarias para brindar un servicio on-site en todo el país."
                  src="/ITImages/07-balance.png"
                  alt="lalala"
                />
              </div>
            </Fade>
            <Fade bottom>
              <div className="m-6 space-y-4 md:space-y-4 text-center my-auto text-darkBlue">
                <h2 className="font-bold text-xl font-prompt">
                  Nosotros te llamamos!
                </h2>
                <p>
                  Déjanos tu nombre, teléfono o correo electrónico y nos
                  comunicaremos contigo a la brevedad
                </p>
                <Fade big>
                  <Link href="/contacto">
                    <button className="btn">Te Llamamos</button>
                  </Link>
                </Fade>
              </div>
            </Fade>
          </div>
        </section>
        <section>
          <div className="p-8 md:p-32 py-32 font-bold text-darkBlue text-center bg-cover bg-hero-bigger bg-fixed grid grid-cols-1 md:grid-cols-2">
            <div></div>
            <div className="space-y-6">
              <h2 className="text-3xl font-prompt fadeIn">
                No importa en que parte del país estés, nosotros llegamos
              </h2>
              <p className="text-lg drop-shadow-2xl text-black ">
                Técnicos Ya! se encuentra en todo el territorio nacional a
                través de una estructura de “Partners”, que permite ofrecer
                soluciones en todas las oficinas de sus clientes.
              </p>
              <ul className="text-left px-10 text-black">
                <li className="text-2xl font-prompt text-darkBlue">PARTNERS</li>
                <li>Cisco Systems Inc. </li>
                <li>HP Argentina</li>
                <li>APC Energía ininterrumpida</li>
              </ul>
                <Fade big>
              <Link href="/contacto">
                  <button className="btn uppercase">
                    Reservá una visita con nosotros
                  </button>
              </Link>
                </Fade>
            </div>
          </div>
        </section>
        <section>
          <div className="text-center pt-16">
            <h2 className="text-3xl font-bold pb-12 font-prompt text-darkBlue">
              ¿Por qué elegirnos?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 md:px-32 pb-16 ">
              <Fade bottom>
                <div className="space-y-8 pb-6">
                  <AiFillStar className="text-6xl text-green mx-auto" />

                  <p>
                    <strong>Técnicos Ya!</strong> es una empresa dedicada a
                    brindar soluciones de tecnología informática, con una amplia
                    cantidad de servicios orientados a satisfacer las más
                    exigentes demandas.
                  </p>
                </div>
              </Fade>
              <Fade bottom>
                <div className="space-y-8 pb-6">
                  <AiFillStar className="text-6xl text-green mx-auto" />

                  <p>
                    Para <strong>Técnicos Ya!</strong> los clientes son el
                    principal objetivo, y centra todos sus esfuerzos para lograr
                    una relación que nos permita establecer compromisos a largo
                    plazo.
                  </p>
                </div>
              </Fade>
              <Fade bottom>
                <div className="space-y-8 pb-6">
                  <AiFillStar className="text-6xl text-green mx-auto" />

                  <p>
                    Nuestra empresa entiende, que el valor agregado que puede
                    aportar se haya en el profesionalismo e idoneidad de
                    nuestros recursos humanos, buscando así, los mejores
                    perfiles para cada necesidad.
                  </p>
                </div>
              </Fade>
              <Fade bottom>
                <div className="space-y-8 pb-6">
                  <AiFillStar className="text-6xl text-green mx-auto" />

                  <p>
                    Brindamos la eficiencia y calidad exigida por el cliente,
                    demostrando la capacidad de llevar de manera idónea los
                    proyectos asignados.
                  </p>
                </div>
              </Fade>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}
