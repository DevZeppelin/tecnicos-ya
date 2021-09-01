import Head from "next/dist/next-server/lib/head";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

const Rrhh = () => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Recursos Humanos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="py-16 px-8 text-justify md:px-64 space-y-8">
          <h1 className="text-3xl text-darkBlue">Recursos Humanos</h1>
          <h2 className="text-2xl text-darkBlue">¿Qué significa trabajar en Técnicos Ya?</h2>

<p>En Técnicos Ya queremos contar con gente como tú, con talento, sana ambición y afán de superación. Gente que se esfuerza y cumple, siempre de forma responsable. Que encara nuevos retos con entusiasmo, quiere ganar y compite con valentía. Queremos tu compromiso y tu creatividad y poder juntos transformar la sociedad de forma positiva.</p>

<h2 className="text-2xl text-darkBlue">¿Dónde quieres trabajar?</h2>

<p>Tu futuro en Técnicos Ya sólo tiene un límite: el de tu imaginación.</p>

<p>Descubre Técnicos Ya!!</p>

<h2 className="text-2xl text-darkBlue">¿Qué pasos damos para seleccionarte?</h2>

<p>Según tus intereses y experiencia, podrás optar a dos segmentos diferentes: área técnica, administración. Descubre lo que te ofrece cada uno.</p>

<p>Únete al servicio más innovador</p>
<p>    
    En Técnicos Ya queremos que tu talento pueda desarrollarse en todo tu potencial.
</p>

<p>Crece en Técnicos Ya</p>

<h2 className="text-2xl text-darkBlue">¿Tienes alguna duda?</h2>

<p>Comunicate con nosotros para encontrar respuestas a algunas de las dudas más comunes. Te invitamos a ponerte en contacto con nosotros a través del formulario de contacto de esta página.</p>


<h2 className="text-2xl text-darkBlue">Envianos tu curriculum.</h2>

<p>En el asunto colocanos:</p>

<li>RRHH - Área técnica</li>

<li>RRHH - Administración</li>

 

<p>Según el área de tu interes.</p>

<p>Envialo a <b>tecnicosya2010@gmail.com</b> y empezá a formar parte de nuestro equipo!!!</p>

          <button className="btn" onClick={() => router.back()}>
            Atrás
          </button>
        </div>
      </Layout>
    </div>
  );
};

export default Rrhh;
