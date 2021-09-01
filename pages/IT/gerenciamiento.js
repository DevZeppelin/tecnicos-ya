import Head from "next/dist/next-server/lib/head";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

const Gerenciamiento = () => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Gerenciamiento de proyectos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="py-16 px-8 text-justify md:px-64 space-y-8">
          <h1 className="text-3xl text-darkBlue">
            Gerenciamiento de proyectos
          </h1>

          <p>
            En la actualidad, los constantes desafíos que propone un entorno
            competitivo, riesgoso y cambiante; que diariamente deben enfrentar
            las organizaciones; hacen que el uso de herramientas y técnicas de
            Gestión de Proyectos adquiera una relevancia cada vez mayor. Con
            estas acciones, es posible responder de manera consistente a los
            cambios, gestionar los riesgos, ahorrar costos y lograr los
            objetivos de su empresa, obteniendo de esta manera una sustancial
            ventaja competitiva respecto a la competencia que no utiliza estas
            prácticas.
          </p>

          <p>
            En Powersis ofrecemos servicio de Project Management en todos los
            proyectos o servicios del campo IT de su empresa. Contamos con
            personal especializado que cuentan con más de una década de
            experiencia en metodologías ágiles para el correcto desenvolvimiento
            y cumplimiento de metas.
          </p>

          <h2 className="text-2xl text-darkBlue">Nos ocupamos de:</h2>

          <li>
            Organizar y coordinar bien a todas las partes implicadas en el
            proyecto, desde el cliente, altos mandos y hasta el equipo de
            trabajo.
          </li>
          <li>
            Llevar un control exhaustivo de los recursos que dispone su empresa,
            y nuestra mano de obra, para que el proyecto tenga éxito en todos
            sus puntos de implementación.
          </li>
          <li>
            Administrar y establecer los límites de ese proyecto, de esta manera
            se evitarán los sobrecostes o la mala calidad del proyecto.
          </li>
          <li>
            Liderar al equipo encargado de ejecutar ese proyecto, como asi
            también de la logística si lo requiere.{" "}
          </li>
          <li>
            Supervisar las tareas de cada una de sus fases, para controlar que
            todo está saliendo tal y como estaba previsto.
          </li>
          <li>
            Dar soluciones alternativas en el caso de que las cosas no salgan
            como se había fijado en un primer momento.
          </li>

          <h1 className="text-3xl text-darkBlue">RRHH</h1>

          <p>
            Delegue la contratación del personal IT necesario, para crear una
            estructura organizativa ideal en su empresa. En Powersis nos
            especializamos en encontrar el mejor profesional para cada compañía.
          </p>

          <p>
            Junto a nuestros clientes, trabajamos en todas las etapas del
            proceso de selección: definición del perfil, estudio y el análisis
            del mercado, reclutamiento, incorporación, adaptación y desarrollo.
            Brindamos capacitación para desarrollar sus labores, y crear la
            sinergia. Un ambiente de trabajo motivador para trabajar en equipo
            con el personal ya existente.
          </p>

          <p>
            Además de ser expertos en el hunting de profesionales de IT,
            ofrecemos un equipo especializado en las distintas unidades de
            negocio: Comercial, Compras, Marketing, IT, Finanzas, Logística y
            Depósito y producto, entre otras, con la misma calidad y precisión
            en el proceso de búsqueda.
          </p>

          <button className="btn" onClick={() => router.back()}>
            Atrás
          </button>
        </div>
      </Layout>
    </div>
  );
};

export default Gerenciamiento;
