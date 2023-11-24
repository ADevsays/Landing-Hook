import SubtitleSection from "../SubtitleSection";
import CardServices from "./CardServices";
import BgImage from '../../../Imgs/Background-geometryforms_2.png';
import services from "../../../consts/services";

function ServicesSection() {
    return (
        <section
            id="servicios" 
            style={{
                backgroundImage: `url(${BgImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
            className="w-full bg-primary p-10 pb-20">
            <SubtitleSection subtitle="Nuestros" underline="Servicios"/>
            <div className="flex items-center md:justify-center gap-20 justify-center relative top-[-40px] flex-wrap">
                {services.map(service=>(
                    <CardServices 
                        title={service.title}
                        img={service.img}
                        characteristics={service.characteristics}/>
                ))} 
            </div>
        </section>
    );
}

export default ServicesSection;