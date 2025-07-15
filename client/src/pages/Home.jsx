import HeroSection from "../components/HomeComponnents/HeroSection.jsx";
import FeaturesSection from "../components/HomeComponnents/FeaturesSection.jsx";

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-gray-100 to-gray-200 px-4 py-10">
            <HeroSection />
            <FeaturesSection />
        </div>
    );
};

export default Home;
