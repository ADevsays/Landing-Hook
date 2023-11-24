import ServicesBenefitSection from "./OurServices/ServicesBenefitSection";
import ServicesSection from "./OurServices/ServicesSection";
import WelcomeSection from "./WelcomeSection";
function Home() {
    return (
        <main 
            className="min-h-[100vh] bg-primary-dark">
            <WelcomeSection/>
            <ServicesSection/>
            <ServicesBenefitSection/>
        </main>
    );
}

export default Home;