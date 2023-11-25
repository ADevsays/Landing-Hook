import Button from "../../Button";
import ImageHome from '../../../Imgs/WelcomeSection/Image_Home.jpg';
import BlobBg from "./BlobBG";

function WelcomeSection() {
    return (
        <section
            className="flex lg:p-28 p-6 py-16  h-screen gap-20 relative overflow-hidden lg:text-left text-center">
            <BlobBg />
            <div className="relative lg:w-1/2 w-full">
                <h1 className="text-4xl font-bold">Transformamos ideas en código <br />
                    y sueños en software</h1>
                <p className="font-normal opacity-70 mt-8">
                    En Hook, estamos listos para transformar tus ideas en soluciones digitales excepcionales. Si estás interesado en nuestros servicios o tienes alguna pregunta, no dudes en contactarnos.
                </p>
                <div className="flex items-center lg:justify-start justify-center gap-4 flex-wrap mt-20">
                    <Button className="flex-center gap-2 px-12 btn-primary md:w-auto w-full">
                        Contáctanos
                        <span className="flex-center mt-1">
                            <i className="bi bi-arrow-right"></i>
                        </span>
                    </Button>
                    <Button href='#servicios' className="md:px-12 px-9 md:w-auto w-full btn-secondary flex-center gap-2">
                        Nuestros planes
                        <span className="flex-center mt-1">
                            <i className="bi bi-arrow-down-circle"></i>
                        </span>
                    </Button>
                </div>

                <p className="text-sm mt-8 opacity-70">¡Nos encargaremos de resolver todas tus dudas!</p>
                <span className="absolute text-3xl  top-0 right-[-10px] sm:block hidden">
                    <i className="bi bi-chat-quote-fill"></i>
                </span>
            </div>
            <div className="w-1/2 relative lg:block hidden">
                <img
                    className="w-full animate-img shadow-xl h-full rounded-3xl min-h-[320px] max-h-[380px] object-cover"
                    src={ImageHome}
                    alt="Imagen descriptiva de los servicios de lal empresa de software hook" />
            </div>
        </section>
    );
}

export default WelcomeSection;