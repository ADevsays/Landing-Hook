import beneficServices from "../../../consts/benefictServices";
import SubtitleSection from "../SubtitleSection";
import CardBenefitServices from "./CardBenefitServices";

function ServicesSection() {
    return (
        <section className="bg-primary p-20">
            <SubtitleSection subtitle="Beneficios de Contratar" underline="Nuestros Servicios"/>
            <div className="flex items-center md:justify-between gap-4 justify-center relative top-[-40px] flex-wrap">
               {
                beneficServices.map((service, index)=>(
                    <CardBenefitServices
                        key={index}
                        title={service.title}
                        content={service.content}
                        img={service.img}
                    /> 
                ))
               }
            </div>
        </section>
    );
}

export default ServicesSection;