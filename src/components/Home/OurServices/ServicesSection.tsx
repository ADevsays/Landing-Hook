import SubtitleSection from "../SubtitleSection";
import CardServices from "./CardServices";
import BgImage from '../../../Imgs/Services/Background-geometryforms_2.png';
import services from "../../../consts/services";
import { useInView } from 'react-intersection-observer';

interface Props {
    handlePlan: (arg0: PlanInfo) => void
}

function ServicesSection({ handlePlan }: Props) {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const threshold = isMobile ? 0.2 : 0.5;
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold, 
    });
    return (
        <section
            id="servicios"
            ref={ref}
            style={{
                backgroundImage: `url(${BgImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
            className="w-full bg-primary p-10 pb-20">
            <SubtitleSection subtitle="Nuestros" underline="Servicios" />
            <div className={`flex items-center md:justify-center gap-20 justify-center relative top-[-40px] flex-wrap`}>
                {services.map((service, index) => (
                    <CardServices
                        key={index}
                        title={service.title}
                        img={service.img}
                        animate={inView}
                        handlePlan={handlePlan}
                        characteristics={service.characteristics} />
                ))}
            </div>
        </section>
    );
}

export default ServicesSection;