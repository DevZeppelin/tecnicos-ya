import Head from "next/dist/next-server/lib/head";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

const Consultoria = () => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Consultoría y Proyectos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="py-16 px-8 text-justify md:px-64 space-y-8">
          <h1 className="text-3xl text-darkBlue">Consultoría y Proyectos</h1>
          
<p>Técnicos Ya! posee un área de Consultoría y Proyectos con capacidad y experiencia para brindar servicios de consultoría relacionados con áreas tanto de Tecnologías de la Información (Data Center, equipos de soporte TI, etc.), como de servicios de atención al cliente (Contact Centers, Mesas de Ayuda, etc.)</p>


    <p>Los proyectos, pueden ser, tanto creación de áreas, estructuras 'desde cero', o bien, lo más laborioso de lograr, la mejora de una estructura existente. A este último concepto, lo denominamos 'Plan de Mejoras'. Algunos ejemplos de proyectos y planes de mejoras realizados en clientes:</p>


    <li>Organización de los servicios de soporte de IT</li>
    <li>Optimización de plataformas tecnológicas</li>
    <li>Reducción de costos en IT management</li>
    <li>Definición del set tecnológico y estandarización de la tecnología</li>
    <li>Diseño e implantación de nuevos sistemas y plataformas</li>
    <li>Adecuación de procesos internos bajo estándares internacionales (ISO, ITIL, COPC)</li>
    <li>Implantación de herramientas de Network and Systems Management</li>
    <li>Confección de pliegos para contratación de servicios</li>
    <li>Desarrollo de acuerdos marco con proveedores de Hardware, Software y/o Servicios</li>
    <li>Evaluación y selección de proveedores</li>
    <li>Selección y capacitación de personal clave</li>
    <li>Desarrollo de acuerdos de servicio con áreas usuarias y acuerdos operativos internos entre áreas de IT</li>

          <button className="btn" onClick={() => router.back()}>
            Atrás
          </button>
        </div>
      </Layout>
    </div>
  );
};

export default Consultoria;
