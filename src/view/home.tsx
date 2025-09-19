import CostSection from './Component/CostSection';
import HeroSection from './Component/HeroSection';
import ProtectYouComponent from './Component/ProtectYou';
import ContactSection from './Component/contactform';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <CostSection />
      <ProtectYouComponent />
      <ContactSection />
    </>
  );
};

export default HomePage;
