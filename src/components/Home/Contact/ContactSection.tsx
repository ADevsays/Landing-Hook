import { useInView } from 'react-intersection-observer';
import ArrowSVG from '../../../Imgs/Arrow SVG.png';
import Button from '../../Button';
import { whatsappApi } from '../../../consts/whatsappUrl';

function ContectSection() {
    const whatsapp = `${whatsappApi}Hola, quiero agendar una cita ahora para hablar sobre las características de mi proyecto.`;

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.4, 
      });
      
    return (
       <section
        id='contacto'
        ref={ref} 
        className="w-full min-h-[400px] md:p-20 pt-16 p-8 bg-primary flex flex-col gap-5 pb-32">
            <h2 className="font-bold md:text-6xl text-4xl w-full text-center">Contáctanos</h2>
            <p className="w-full text-center">¿Listo para convertir tu <span className="font-bold">idea</span> en realidad con <span className="font-bold text-terciary">Hook</span>?</p>
            <div className="flex-center flex-col ">
                <img className='max-w-[120px] backdrop-filter' src={ArrowSVG} alt="Arrow svg" />
                <Button href={whatsapp} target='_blank' className={` ${inView ? 'hover:opacity-90 animate-img' : ''} text-center btn-primary md:w-1/2 w-full my-12 py-6`}>
                    AGENDA TU CITA AHORA
                </Button>
                <p className="md:w-2/6 w-full text-center text-gray-300 text-sm">
                    ¡Agenda una <span className='font-bold text-secondary'>reunión</span> con nosotros para discutir sobre las <span className='font-bold text-secondary'>características</span> de tu proyecto y llevarlo a cabo <span className='font-bold text-secondary'>
                    hoy</span>!
                </p>
            </div>
       </section>
    );
}

export default ContectSection;