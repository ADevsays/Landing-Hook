import testimonials from "../../../consts/testimonials";
import SubtitleSection from "../SubtitleSection";
import CardTestimonial from "./CardTestimonial";

function TestimonialsSection() {
    return (
        <section 
            className="w-full min-h-[400px] p-12 flex-center flex-col">
            <SubtitleSection subtitle="Testimonios" underline="clientes" />
            <div className="relative top-[-85px] flex flex-col gap-32">
                {
                    testimonials.map((testimonial, index)=> (
                        <CardTestimonial
                            key={index}
                            name={testimonial.name}
                            content={testimonial.content}
                            img={testimonial.img}
                        />
                    ))
                }
            </div>
        </section>
    );
}

export default TestimonialsSection;