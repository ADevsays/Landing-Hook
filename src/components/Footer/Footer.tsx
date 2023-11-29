import SocialMediaMap from "../SocialMediaMap";
import FooterItem from "./FooterItem";
import SendEmail from "./SendEmail";
import AfiliadePDF from '../../pdf/Hook_-_Afiliados.pdf';
import Button from "../Button";

function Footer() {
    return (
        <footer className="flex justify-center items-start flex-wrap p-5 pb-10 bg-primary-dark">
            <FooterItem
                title="Nosotros"
                content="Contamos con redes sociales
                en las que puedes comunicarte con nosotros"
                className="border-b lg:border-r border-gray-700 lg:border-b-0 pb-20">
                <span className="mt-4 block absolute left-[30px]">
                    <SocialMediaMap />
                </span>
            </FooterItem>

            <FooterItem
                title="Afiliados"
                content="Contamos con un plan para afiliados
                si estas interesado en unirte y ganar comisiones de hasta el 30%"
                className="border-b lg:border-r border-gray-700 lg:border-b-0">
                    <Button
                        className="btn-primary mt-4 relative top-[20px]"
                        target="_blank"
                        href={AfiliadePDF}>
                        Conviértete en afiliado
                    </Button>
            </FooterItem>
            <FooterItem
                title="Contáctanos"
                content="Envíanos tu correo para contactarte">
                <SendEmail />
            </FooterItem>

        </footer>
    );
}

export default Footer;