import HeroSection from "../components/HeroSection.jsx";
import About from "../components/About.jsx";
import Menu from "../components/Menu.jsx";
import Qualities from "../components/Qualities.jsx";
import WhoAreWe from "../components/WhoAreWe.jsx";
import Crew from "../components/Crew.jsx";
import Reservation from "../components/Reservation.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <Menu />
      <Qualities />
      <WhoAreWe />
      <Crew />
      <Reservation />
      <Footer />
    </div>
  );
};

export default Home;