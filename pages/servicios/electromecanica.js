import Head from "next/dist/next-server/lib/head";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

const Electromecanica = () => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Electromecánica</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="py-16 px-8 text-justify md:px-64 space-y-8">
          <h1 className="text-3xl text-darkBlue">Electromecánica</h1>

          <h2 className="text-2xl text-darkBlue">Pensamos en la eficiencia</h2>

          <p>
            Realizamos mantenimiento electromecánicos industrial y servicio de
            mantenimiento post-venta, tanto para nuestros montajes como para las
            plantas que ya estén en funcionamiento.
          </p>

          <button className="btn" onClick={() => router.back()}>
            Atrás
          </button>
        </div>
      </Layout>
    </div>
  );
};

export default Electromecanica;
