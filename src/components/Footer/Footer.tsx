import Button from "../Button";
import SocialMediaMap from "../SocialMediaMap";
import FooterItem from "./FooterItem";
import SendEmail from "./SendEmail";

function Footer() {
    return (
        <footer className="flex justify-center items-start flex-wrap p-5 pb-10">
            <FooterItem
                title="Nosotros"
                content="Contamos con redes sociales
                en las que puedes comunicarte con nosotros"
                className="border-b lg:border-r border-gray-700 lg:border-b-0">
                    <span className="mt-4 block absolute left-[30px]">
                        <SocialMediaMap/>
                    </span>
            </FooterItem>

            <FooterItem
                title="Afiliados"
                content="Contamos con un plan para afiliados
                si estas interesado en unirte y ganar comisiones de hasta el 30%"
                className="border-b lg:border-r border-gray-700 lg:border-b-0">
                    <Button className="mt-3">
                        Conviértete en afiliado
                    </Button>
            </FooterItem>
            <FooterItem
                title="Contáctanos"
                content="Envíanos tu correo para contactarte">
                    <SendEmail/>
            </FooterItem>
            
        </footer>
    );
}

export default Footer;