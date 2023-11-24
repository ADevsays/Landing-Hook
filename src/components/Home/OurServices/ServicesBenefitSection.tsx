import beneficServices from "../../../consts/benefictServices";
import Button from "../../Button";
import SubtitleSection from "../SubtitleSection";
import CardBenefitServices from "./CardBenefitServices";

function ServicesBenefitSection() {
    return (
        <section className="bg-primary-dark p-20 w-full">
            <SubtitleSection subtitle="Beneficios de Contratar" underline="Nuestros Servicios"/>
            <div className="flex items-center md:justify-between gap-4 justify-center relative top-[-40px] flex-wrap">
               {
                beneficServices.map(({title, content, img}, index)=>(
                    <CardBenefitServices
                        key={index}
                        title={title}
                        content={content}
                        img={img}
                    /> 
                ))
               }
            </div>
            <div className="w-full flex mt-8">
                <Button className="mx-auto btn-primary px-12">Cuéntanos sobre tu proyecto</Button>
            </div>
        </section>
    );
}

export default ServicesBenefitSection;