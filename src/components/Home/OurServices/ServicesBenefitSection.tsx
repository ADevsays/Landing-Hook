import beneficServices from "../../../consts/benefictServices";
import { whatsappApi } from "../../../consts/whatsappUrl";
import Button from "../../Button";
import SubtitleSection from "../SubtitleSection";
import CardBenefitServices from "./CardBenefitServices";

function ServicesBenefitSection() {
    const whatsapp = `${whatsappApi}Hola, quiero agendar una reunión con ustedes para contarles más acerca del proyecto que tengo en mente...`;

    return (
        <section className="bg-primary-dark p-0 px-12 pb-20 w-full mt-4">
            <SubtitleSection subtitle="Beneficios de " underline="Contratarnos"/>
            <div className="flex items-center gap-12 justify-center relative top-[-40px] flex-wrap">
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
                <Button href={whatsapp} target="_blank"className="mx-auto btn-primary px-12">Cuéntanos sobre tu proyecto</Button>
            </div>
        </section>
    );
}

export default ServicesBenefitSection;