import Button from "../Button";
import ImageHome from '../../Imgs/Image_Home.jpg';
import BlobBg from "./BlobBG";

function WelcomeSection() {
    return (
        <section
            className="flex p-28 h-screen gap-20 relative overflow-hidden">
            <BlobBg />
            <div className="relative w-1/2">
                <h1 className="text-4xl font-bold">Transformamos ideas en código <br />
                    y sueños en software</h1>
                <p className="font-normal opacity-70 mt-8">
                    En Hook, estamos listos para transformar tus ideas en soluciones digitales excepcionales. Si estás interesado en nuestros servicios o tienes alguna pregunta, no dudes en contactarnos.
                </p>
                <div className="flex gap-4">
                    <Button className="flex-center gap-2 mt-20 px-12 btn-primary">
                        Contáctanos
                        <span className="flex-center mt-1">
                            <i className="bi bi-arrow-right"></i>
                        </span>
                    </Button>
                    <Button href='#servicios' className="mt-20 px-12 btn-secondary flex-center gap-2">
                        Nuestros planes
                        <span className="flex-center mt-1">
                            <i className="bi bi-arrow-down-circle"></i>
                        </span>
                    </Button>
                </div>

                <p className="text-sm mt-8 opacity-70">¡Nos encargaremos de resolver todas tus dudas!</p>
                <span className="absolute text-3xl  top-0 right-[-10px]">
                    <i className="bi bi-chat-quote-fill"></i>
                </span>
            </div>
            <div className="w-1/2 relative">
                <img
                    className="w-full animate-img shadow-xl h-full rounded-3xl min-h-[320px] max-h-[380px] object-cover"
                    src={ImageHome}
                    alt="Imagen descriptiva de los servicios de lal empresa de software hook" />
            </div>
        </section>
    );
}

export default WelcomeSection;