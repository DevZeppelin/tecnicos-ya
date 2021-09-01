import Head from "next/dist/next-server/lib/head";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

const Mantenimiento = () => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Mantenimiento Industrial</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="py-16 px-8 text-justify md:px-64 space-y-8">
          <h1 className="text-3xl text-darkBlue">Mantenimiento Industrial</h1>
          <p>
            El área del Mantenimiento Industrial es de primordial importancia en
            el ámbito de la ejecución de las operaciones en la industria.
          </p>
          <p>
            De un buen Mantenimiento depende, no sólo un funcionamiento
            eficiente de las instalaciones, sino que además, es preciso llevarlo
            a cabo con rigor para conseguir otros objetivos como son el control
            del ciclo de vida de las instalaciones sin disparar los presupuestos
            destinados a mantenerlas.
          </p>

          <p>
            Las estrategias convencionales de "reparar cuando se produzca la
            avería" ya no sirven. Fueron válidas en el pasado, pero ahora se es
            consciente de que esperar a que se produzca la avería para
            intervenir, es incurrir en unos costos excesivamente elevados
            (pérdidas de producción, deficiencias en la calidad, etc.) y por
            ello las empresas industriales se plantearon llevar a cabo procesos
            de prevención de estas averías mediante un adecuado programa de
            mantenimiento.
          </p>

          <h2 className="text-2xl text-darkBlue">
            La evolución del mantenimiento se estructura en las cuatro
            siguientes generaciones:
          </h2>

          <li>
            <b>1ª generación:</b> Mantenimiento correctivo total. Se espera a que se
            produzca la avería para reparar.
          </li>

          <li>
            <b>2ª generación:</b> Se empiezan a realizar tareas de mantenimiento para
            prevenir averías. Trabajos cíclicos y repetitivos con una frecuencia
            determinada.
          </li>

          <li>
            <b>3ª generación:</b> Se implanta el mantenimiento a condición. Es decir,
            se realizan monitorizaciones de parámetros en función de los cuales
            se efectuarán los trabajos propios de sustitución o
            reacondicionamiento de los elementos.
          </li>

          <li>
            <b>4ª generación:</b> Se implantan sistemas de mejora continua de los
            planes de mantenimiento preventivo y, de la organización y ejecución
            del mantenimiento. Se establecen los grupos de mejora y seguimiento
            de las acciones.
          </li>

          <button className="btn" onClick={() => router.back()}>
            Atrás
          </button>
        </div>
      </Layout>
    </div>
  );
};

export default Mantenimiento;
