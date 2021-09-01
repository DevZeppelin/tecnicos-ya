import Head from "next/dist/next-server/lib/head";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

const Capacitaciones = () => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Capacitaciones</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="py-16 px-8 text-justify md:px-64 space-y-8">
          <h1 className="text-3xl text-darkBlue">Capacitaciones</h1>

          <h2 className="text-2xl text-darkBlue">
            Nuestra Estructura en Capacitación
          </h2>

          <p>
            A través de un equipo de instructores, novatium brinda los
            siguientes servicios de capacitación a empresas: Cursos a persona de
            Soporte Técnico
          </p>

          <li>ITIL (Foundation, SLA Management & Practitioner)</li>
          <li>Gestión</li>
          <li>Calidad</li>
          <li>Troubleshooting de incidentes</li>
          <li>Mejores prácticas: ITIL, COPC</li>

          <h2 className="text-2xl text-darkBlue">
            Cursos de Ofimática In House a Usuarios Finales
          </h2>

          <li>Word</li>
          <li>Excel</li>
          <li>Project</li>
          <li>Power Point</li>
          <li>Correo</li>
          <li>Etc.</li>

          <h2 className="text-2xl text-darkBlue">
            Cursos a Jefes y Supervisores de Areas de Soporte
          </h2>

          <li>Reportes</li>
          <li>Gestión de incidentes</li>
          <li>Marketing del Servicio</li>
          <li>Acuerdos de Servicio con áreas usuarias (SLA)</li>
          <li>Acuerdos de Servicio con áreas de soporte (OLA)</li>

          <h2 className="text-2xl text-darkBlue">
            Cursos de Aplicaciones Propias (Legacy)
          </h2>
          <button className="btn" onClick={() => router.back()}>
            Atrás
          </button>
        </div>
      </Layout>
    </div>
  );
};

export default Capacitaciones;
