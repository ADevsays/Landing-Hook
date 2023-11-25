import { useState } from "react";
import PlanSection from "./OurServices/PlanSection";
import ServicesBenefitSection from "./OurServices/ServicesBenefitSection";
import ServicesSection from "./OurServices/ServicesSection";
import AboutUsSection from "./AboutUs/AboutUsSection";
import WelcomeSection from "./WelcomeSection/WelcomeSection";
import TestimonialsSection from "./Testimonials/TestimonialsSection";
import ContectSection from "./Contact/ContactSection";

function Home() {
    const [plan, setPlan] = useState({} as PlanInfo);
    const handlePlan=(info:PlanInfo)=>{
        setPlan(info);
    };
    return (
        <main 
            className="min-h-[100vh] bg-primary-dark">
            <WelcomeSection/>
            <ServicesSection handlePlan={handlePlan}/>
            <PlanSection plan={plan}/>
            <ServicesBenefitSection/>
            <AboutUsSection/>
            <TestimonialsSection/>
            <ContectSection/>
        </main>
    );
}

export default Home;