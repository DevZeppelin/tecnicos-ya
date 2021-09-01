import Head from "next/dist/next-server/lib/head";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

const Soporte = () => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Soporte General</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="py-16 px-8 text-justify md:px-64 space-y-8">
          <h1 className="text-3xl text-darkBlue">Soporte General</h1>
          <h2 className="text-2xl text-darkBlue">Efectividad Comprobada</h2>

          <p>
            En Técnicos Ya! disponemos de una excelente cobertura en soporte
            directo con alcance naciónal.
          </p>

          <p>
            Pensado y diseñado para atender a la brevedad cualquier necesidad
            que pueda generarse.
          </p>

          <p>Con un seguimiento constante de todo el proceso.</p>

          <p>
            Manteniendo informado al cliente en el acto sobre el progreso de la
            asistecia, las soluciones y la concreción de la tarea.
          </p>

          <p>
            De esta forma podemos garantizar un excelente tiempo de respuesta.
          </p>

          <p>Una Solucíon acorde a sus medidas.</p>

          <p>
            Pero a su vez, haciendo enfasis en la calidad de nuestro soporte y
            el resultado obtenido.
          </p>

          <button className="btn" onClick={() => router.back()}>
            Atrás
          </button>
        </div>
      </Layout>
    </div>
  );
};

export default Soporte;
