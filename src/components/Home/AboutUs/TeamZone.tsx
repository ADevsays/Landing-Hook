import { useInView } from 'react-intersection-observer';
import AdevSaysPicture from '../../../Imgs/AboutUs/adevsays_picture.webp';
import MauPicture from '../../../Imgs/AboutUs/Mau_picture.png';

function TeamZone() {
    const [ref, inView] = useInView({
        triggerOnce: true, // Para activar la animación solo una vez
        threshold: 0.4, // Umbral del 50%
      });
    return (
        <section className="w-full" ref={ref}>
            <h3 className="font-bold text-center text-3xl w-full mt-5">Nuestro <span className="text-terciary">equipo</span></h3>
            <div className={`${inView ? 'animate-card' : ''} flex-center opacity-0 gap-12 p-4`}>
                <div className='max-w-[180px]'>
                    <a href="https://www.instagram.com/a_dev_says/" target='_blank' rel='nofollow' title='IG de Adevsays'>
                        <img className='transition-transform hover:scale-95 w-full h-full rounded-full' src={AdevSaysPicture} alt="Imagen de perfil de adevsays" />
                        <p className="text-center">@a_dev_says</p>
                    </a>
                </div>
                <div className='max-w-[180px]'>
                    <a href="https://www.instagram.com/mau_webs/" target='_blank' rel='nofollow' title='IG de MauWebs'>
                        <img className='transition-transform hover:scale-95 w-full h-full rounded-full' src={MauPicture} alt="Imagen de perfil de adevsays" />
                        <p className="text-center relative top-[-18px]">@mau_webs</p>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default TeamZone;