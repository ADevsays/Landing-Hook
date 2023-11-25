import { useInView } from 'react-intersection-observer';
import ArrowSVG from '../../../Imgs/Arrow SVG.png';
import Button from '../../Button';

function ContectSection() {
    const [ref, inView] = useInView({
        triggerOnce: true, // Para activar la animación solo una vez
        threshold: 0.4, // Umbral del 50%
      });
    return (
       <section
        id='contacto'
        ref={ref} 
        className="w-full min-h-[400px] p-20 bg-primary flex flex-col gap-5 pb-32">
            <h2 className="font-bold text-6xl w-full  text-center">Contáctanos</h2>
            <p className="w-full text-center">¿Listo para convertir tu <span className="font-bold">idea</span> en realidad con <span className="font-bold text-terciary">Hook</span>?</p>
            <div className="flex-center flex-col">
                <img className='max-w-[180px] backdrop-filter' src={ArrowSVG} alt="Arrow svg" />
                <Button className={` ${inView ? 'animate-img' : ''} btn-primary w-1/2 my-12 py-6`}>
                    AGENDA TU CITA AHORA
                </Button>
                <p className="w-2/6 text-center text-gray-300 text-sm">
                    ¡Agenda una <span className='font-bold text-secondary'>reunión</span> con nosotros para discutir sobre las <span className='font-bold text-secondary'>características</span> de tu proyecto y llevarlo a cabo <span className='font-bold text-secondary'>
                    hoy</span>!
                </p>
            </div>
       </section>
    );
}

export default ContectSection;