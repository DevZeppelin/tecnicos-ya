import Head from "next/dist/next-server/lib/head";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

const Outsourcing = () => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Outsourcing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="py-16 px-8 text-justify md:px-64 space-y-8">
          <h1 className="text-3xl text-darkBlue">Outsourcing</h1>
          <h2 className="text-2xl text-darkBlue">Solucionando sus necesidades</h2>

<p>
    Nuestro potente servicio de Outsourcing posee un ampli espectro de posibilidades.
    Servicios de mesa de ayuda, Soporte a usuarios, Administración de plataformas tecnológicas, Mantenimiento de Hardware, Aseguramiento de la calidad, Operación de centros de cómputo, Búsqueda y provisión de perfiles, Encuestas de calidad y casos.
</p>

<h2 className="text-2xl text-darkBlue">Outsourcing de IT</h2>

    <li>Administracion de Plataformas tecnológicas</li>
    <li>Soporte Técnico a usuarios con alcance Nacional</li>
    <li>Servicio de Help Desk</li>
    <li>Mantenimiento de Hardware</li>
    <li>Soluciones de Impresión</li>
    <li>Operación de centro de cómputos</li>

    <h2 className="text-2xl text-darkBlue">Busqueda y provisión de personal calificado</h2>

    <li>Personal Fijo</li>
    <li>Personal para proyectos</li>


          <button className="btn" onClick={() => router.back()}>
            Atrás
          </button>
        </div>
      </Layout>
    </div>
  );
};

export default Outsourcing;
