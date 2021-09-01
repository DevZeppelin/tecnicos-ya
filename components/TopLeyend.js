import { FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";


const TopLeyend = () => {
  return (
    <div className="flex justify-center md:justify-between pt-2 text-darkBlue md:bg-lowContrast">
      <div className="hidden md:flex px-12">
        <p className="text-sm font-bold tracking-widest my-auto font-prompt uppercase">
          Soluciones inteligentes
        </p>
      </div>
      <div>
        <div className="text-2xl space-x-3 pr-6">
                            
          <a
            href="https://api.whatsapp.com/send?phone=5492616708100"
            target="_blank"
            rel="noopener"
          >
            <button aria-label="whatsapp" alt="whatsapp-logo">
              <FaWhatsapp className="hover:text-green" />
            </button>
          </a>
          <a
            href="mailto:gino.b.pietrobon@gmail.com"
            target="_blank"
            rel="noopener"
          >
            <button aria-label="send me a mail" alt="gmail-logo">
              <FiMail className="hover:text-green" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopLeyend;
