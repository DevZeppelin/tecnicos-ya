import Head from "next/dist/next-server/lib/head";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

const Redes = () => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Redes y CCTV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="py-16 px-8 text-justify md:px-64 space-y-8">
          <h1 className="text-3xl text-darkBlue">Redes y CCTV</h1>

          <p>
            Nuestro equipo cuenta con más de 20 años de experiencia en la
            instalación y mantenimiento de redes de todo tipo, incluyendo
            sistemas CCTV. Trabajar con nosotros le brindará a usted la
            posibilidad de tener nuestro conocimiento práctico a su servicio,
            garantizando la realización del mantenimiento de redes en manos de
            profesionales. El trabajo en equipo de nuestro personal permite
            resolver los problemas que puedan presentarse, ya que contamos con
            la suma de las experiencias y habilidades adquiridas en el trabajo
            diario y en la formación continua.
          </p>

          <p>
            En Técnicos Ya realizamos instalación y mantenimiento de redes
            informáticas de diversos tipos: LAN/WLAN/MAN/WAN. Realizamos visitas
            periódicas programadas a nuestros clientes para poder conocer en
            forma extensiva sus necesidades y su infraestructura tecnológica.
            Esto resulta en una ventaja a la hora de proponerle y brindarle
            soluciones alternativas a sus necesidades.
          </p>

          <h2 className="text-2xl text-darkBlue">Ofrecemos servicios de:</h2>

          
            <li>
              Diseño e instalación de redes físicas, cableado estructurado CAT
              5, CAT 6 y CAT 7, mantenimiento, auditorias y certificaciones.
            </li>
            <li>
              Soluciones de switching, routing y energía eléctrica para
              sistemas.
            </li>
            <li>
              Diseño e instalación de redes Wireless y enlaces punto a punto.
            </li>
            <li>
              Diseño e instalación de Fibra Optica monomodo y multinodo,
              auditorias y certificaciónes.
            </li>
            <li>Administración de tráfico entre redes e Internet, QoS.</li>
            <li>Monitoreo de redes, análisis de tráfico y performance.</li>
            <li>Mantenimiento de servidores.</li>
            <li>
              Diseño e instalación de Sistemas CCTV, mantenimiento, visitas
              preventivas y correcciones.
            </li>
          
          <p>
            El mantenimiento preventivo de redes consiste de la realización de
            visitas en las cuales se analiza el recorrido de la red de cableado
            estructurado, con el fin de verificar la resistencia y el correcto
            funcionamiento de todos los componentes. También verificamos todos
            los elementos como canalizaciones, paneles, cajas, conectores, etc.
            garantizando que todos se encuentren en correcto estado, permitiendo
            el correcto funcionamiento de la red.
          </p>

          <button className="btn" onClick={() => router.back()}>
            Atrás
          </button>
        </div>
      </Layout>
    </div>
  );
};

export default Redes;
