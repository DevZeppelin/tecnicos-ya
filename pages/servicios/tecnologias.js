import Head from "next/dist/next-server/lib/head";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

const Tecnologias = () => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Tecnologias IT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="py-16 px-8 text-justify md:px-64 space-y-8">
          <h1 className="text-3xl text-darkBlue">Tecnologías IT</h1>
          <p>Nuestro abanico de servicios en Tecnologia y servicios IT</p>

          <li>Soporte IT.</li>
          <li>Soporte Centralizado.- RSI.</li>
          <li>
            HelpDesk! Diseño y reingeniería de Mesa de Ayuda y Servicio al
            Cliente.
          </li>
          <li>Administración de Redes y Correo Electrónico.</li>
          <li>Auditoría de Entorno y Producto.</li>
          <li>Análisis de Conectividad.</li>
          <li>Servicio Técnico de Mantenimiento de Hardware.</li>
          <li>Instalación de Cableado Estructurado para Redes.</li>
          <li>
            Instalación y configuración de equipamiento Tecnológico (pc´s,
            periféricos, autoconsultas, impresoras, etc.) en sitios
            geográficamente distribuidos.
          </li>
          <li>Manos Remotas en sitios distribuidos.</li>
          <li>Gestión de Garantías e Inventarios.</li>

          <button className="btn" onClick={() => router.back()}>
            Atrás
          </button>
        </div>
      </Layout>
    </div>
  );
};

export default Tecnologias;
