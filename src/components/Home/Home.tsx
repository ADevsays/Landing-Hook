import ServicesSection from "./OurServices/ServicesSection";
import WelcomeSection from "./WelcomeSection";
function Home() {
    return (
        <main 
            className="min-h-[100vh] bg-primary-dark">
            <WelcomeSection/>
            <ServicesSection/>
        </main>
    );
}

export default Home;