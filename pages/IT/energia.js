import Head from "next/dist/next-server/lib/head";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

const Energia = () => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Soluciones de Energía</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="py-16 px-8 text-justify md:px-64 space-y-8">
          <h1 className="text-3xl text-darkBlue">Soluciones de Energía</h1>
          <h2 className="text-2xl text-darkBlue">
            ¿Qué es una solución de energía?
          </h2>
          <p>
            Al haber interrupciones en el suministro eléctrico, los equipos
            eléctricos pueden sufrir más de lo pensado. Y una mala fuente de
            energía con una tensión vacilante, microcortes y demás puede dañar
            el hardware. Para evitar estos inconvenientes y ofrecer una forma
            segura de mantener sus equipos protegidos, brindamos dispositivos
            que funcionan resguardando y brindando seguridad a sus instalaciones
          </p>
          <p>
            Brindamos soluciones de caída de energía en cualquier ámbito
            laboral. Cuente con técnicos especializado y dedicados a brindar
            servicio de mantenimiento preventivo y correctivo en:
          </p>
          <li>UPS</li>
          <li>Generadores eléctricos</li>
          <li>Soluciones de Energía solar Fotovoltaico</li>
          <p>
            <b>Sistema OFF GRID:</b> Sistema independiente a la red eléctrica.
            Genera energía eléctrica a través de Paneles Fotovoltaicos. Este
            sistema debe generar, durante las horas de sol, toda la energía
            necesaria para abastecer los consumos durante el resto del día, por
            lo cual, es necesario almacenarla en un banco de baterías.
          </p>
          <h2 className="text-2xl text-darkBlue">
            Componentes del sistema Off grid
          </h2>
          <p>
            Paneles Fotovoltaicos. Regulador de carga. Banco de baterías. Inversor
            de corriente Off Grid. Sistema ON GRID: Inversores inteligentes
            bidireccionales para interactuar con la red eléctrica. Es un sistema
            que requiere de la red eléctrica para funcionar, pero que permite
            generar un ahorro de energía mediante la utilización de Paneles
            Fotovoltaicos. En este caso no se utilizan baterías.
          </p>
          <h2 className="text-2xl text-darkBlue">
            Componentes del sistema on grid:
          </h2>
          <li>Paneles Fotovoltaicos.</li>
          <li>Inversor On Grid.</li>
          <h2 className="text-2xl text-darkBlue">
            Características principales de estos equipos:
          </h2>
          <p>
            Ofrecen protección eléctrica garantizada para sistemas informáticos
            de alto rendimiento Proporcionan respaldo a los componentes
            electrónicos durante los cortes del suministro eléctrico y
            estabilizan los niveles de tensión inseguros. No solo protegen el
            equipo, sino que se convierten en una garantía de protección de la
            información. Ofrecen protección eléctrica contra subidas y picos de
            tensión. Con Energía solar obtene hasta un %80 en reducción de
            gastos de energía eléctrica convencional.
          </p>
          <button className="btn" onClick={() => router.back()}>
            Atrás
          </button>
        </div>
      </Layout>
    </div>
  );
};

export default Energia;
