import { useInView } from "react-intersection-observer";

interface Props{
    content:string, 
    img:string, 
    name:string,
}

function CardTestimonial({content, img, name}:Props) {
    const [ref, inView] = useInView({
        triggerOnce: true, // Para activar la animación solo una vez
        threshold: 0.4, // Umbral del 50%
      });
    return (
        <div 
            ref={ref}
            className={`${inView ? 'animate-card' : ''} opacity-0 bg-primary min-w-[120px] max-w-[600px] min-h-[140px] rounded-3xl relative`}>
            <p className="p-8 text-center">
                {content}
            </p>
            <div className='max-w-[60px] absolute bottom-[-50px] flex-center flex-col' style={{left: 'calc(50% - 30px)'}}>
                <img className='w-full h-full rounded-full' src={img} alt="title" />
                <p className='min-w-[300px] text-center text-sm'>{name}</p>
            </div>
        </div>
    );
}

export default CardTestimonial;