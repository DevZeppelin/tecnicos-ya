import Head from "next/dist/next-server/lib/head";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

const Microinfo = () => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Microinformática</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="py-16 px-8 text-justify md:px-64 space-y-8">
          <h1 className="text-3xl text-darkBlue">Microinformática</h1>

          <p>
            La Microinformática hace referencia a los equipos personales que
            todo usuario corporativo que utiliza para el desarrollo de su
            actividad profesional. Disponer de un parque microinformático
            homogeneizado garantiza una mejor optimización de los recursos y una
            rápida resolución de incidencias en caso de producirse.
          </p>

          <p>
            Técnicos Ya se encarga de la utilización y estudio de todos los equipos
            informáticos de su empresa. De esta manera recomendar que
            aplicaciones se ajustan a esas especificaciones, como también
            recomendar mejoras de Software, Firmware y Hardware.
          </p>
          <p>
            Implementamos mejoras que son reconocidas por nuestros clientes que
            nos eligen año a año como su soporte técnico de cabecera. Sabemos la
            importancia de contar con un servicio de microinformática de
            calidad, ya que es una parte fundamental para el desarrollo de las
            actividades de la plataforma tecnológica. Nuestro servicio de
            microinformática se adapta a las particularidades de cada empresa.
            Nos encargamos de la instalación, el manteniendo y la resolución de
            eventos relacionados con el hardware y software necesarios para que
            nuestros técnicos puedan desarrollar su actividad bajo unos
            parámetros de alta calidad.
          </p>

          <h2 className="text-2xl text-darkBlue">
            Obteniendo beneficios tales como:
          </h2>

          <li>Mejora de la productividad empresarial.</li>
          <li>Integración a las nuevas tecnologías.</li>
          <li>Optimización de recursos informáticos.</li>
          <li>Mejora la imagen corporativa.</li>
          <li>Reduce los costes de mantenimiento del parque informático.</li>

          <button className="btn" onClick={() => router.back()}>
            Atrás
          </button>
        </div>
      </Layout>
    </div>
  );
};

export default Microinfo;
