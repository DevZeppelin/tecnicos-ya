import Fade from "react-reveal/Fade";
import Link from "next/dist/client/link";

export const ServiciosItem = ({ titulo, icono }) => {
  return (
    <Fade bottom>
     
       
          <div className="space-y-4 text-center bg-backgroundSecundary hover:bg-lowContrast hover:text-darkBlue border border-darkBlue-700 border-opacity-75 p-6 rounded-lg">
            <h2 className="service-h2">{titulo}</h2>
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-darkBlue-800 text-indigo-400 mb-4">
              {icono}
            </div>
        
          </div>
       
      
    </Fade>
  );
};
