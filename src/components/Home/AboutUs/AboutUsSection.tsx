import SubtitleSection from "../SubtitleSection";
import HookBg from '../../../Imgs/AboutUs/About_us_bg.webp';
import ParagraphAboutUs from "./ParagraphAboutUs";
import TeamZone from "./TeamZone";

function AboutUsSection() {
    return (
        <section id="nosotros" className="w-full min-h-[480px]a bg-primary pt-12">
            <SubtitleSection subtitle="Sobre" underline="nosotros" />
            <div className="flex w-full justify-between">
                <div className="w-1/2 pr-4 relative top-[-100px]">
                    <img className="w-full h-full" src={HookBg} />
                </div>
                <div className="w-2/4 flex flex-col items-start px-12">
                    <ParagraphAboutUs
                        title="¿Quiénes somos"
                        contentOne=" HOOK es una empresa joven y dinámica fundada por dos amigos con una visión compartida: impulsar a pequeñas empresas y emprendedores mediante soluciones de software innovadoras."
                        contentTwo=" La inspiración detrás de HOOK nació de la creencia de que cada proyecto, por pequeño que sea, merece una solución tecnológica para alcanzar su máximo potencial."/>
                    <ParagraphAboutUs
                        title="¿Qué ofrecemos"
                        contentOne="Nos especializamos en el desarrollo de software para aplicaciones móviles, de escritorio y web."
                        contentTwo="Ofrecemos soluciones personalizadas que van más allá de las expectativas convencionales."
                    />
                    <TeamZone/>
                </div>
            </div>

        </section>
    );
}

export default AboutUsSection;