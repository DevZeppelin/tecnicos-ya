
import Head from "next/dist/next-server/lib/head";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

const Help = () => {

  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Help Desk</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="py-16 px-8 text-justify md:px-64 space-y-8">
          <h1 className="text-3xl text-darkBlue">Help Desk</h1>
          <p>
            Al día de hoy muy pocas empresas pueden cuestionar el enorme impacto
            de la tecnología, no solo en nuestra actividad diaria, sino en
            términos financieros e incluso en cuanto a mejora y crecimiento de los
            beneficios económicos. Sin embargo, las empresas no siempre están
            preparadas para dar ese salto hacia el futuro y abrazar la modernidad.
          </p>
          <p>
            En todo momento, es deseable que los equipos de trabajo que
            constituyen el ADN de una compañía cuenten con los conocimientos
            prácticos necesarios para encaminar todas las acciones empresariales
            por el camino del éxito y la prosperidad. De ahí la importancia de
            implantar un método basado en Help Desk como garantía de desarrollo.
          </p>
          <p>
            Técnicos Ya ofrece un servicio de Help Desk, en concreto gestión remota
            del puesto de trabajo, en el que ya han confiado centenares de
            empresas de diferentes ámbitos y localizaciones geográficas.
          </p>
          <h2 className="text-2xl text-darkBlue">SOPORTE</h2>
          <p>
            En Técnicos Ya disponemos de un servicio de soporte – Help Desk de última
            generación con asistencia a nuestros técnicos y usuarios, tanto de
            forma Onsite como remota. Proporcionamos a nuestros técnicos/clientes
            un apoyo inmediato de manera eficaz, sencilla y segura. Brindamos
            soluciones rapidas y confiables, ofreciendo un servicio integral que
            hara que se despreocupe de los problemas cotidianos. Help Desk se
            ocupara de la gestión con distintos proveedores y gestión de garantía.
            Somos un recurso informático con el fin de supervisar y gestionar
            incidencias para resolverlo con practicidad en el momento.
          </p>
          <h2 className="text-2xl text-darkBlue">MANTENIMIENTO</h2>
          <p>
            Contamos con técnicos altamente capacitados para dar soluciones a sus
            equipos en tiempo y forma. Y, así, maximizar su operatividad y
            producción.
          </p>
          <p>
            Realizamos instalación, configuración y mantenimiento de sistemas
            microinformáticos en los siguientes parámetros: aislados o en red; así
            como redes locales en pequeños entornos. Ofrecemos mantemiento de sus
            impresoras y controladores fiscales, instalación y mantenimiento
            físico de puestos de trabajo. Asegurando así su funcionalidad
            aplicando los protocolos de seguridad, calidad y eco-friendly para la
            mejora del servicio al cliente.
          </p>
          
              <button className="btn" onClick={() => router.back()}>
                Atrás
              </button>
          
        </div>
       
      </Layout>
    </div>
  );
};

export default Help;
