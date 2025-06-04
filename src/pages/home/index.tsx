import Particles from "@/components/shared/Particles";
import Hero from './Hero';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';

const Home = () => {
  return (
    <div className="relative overflow-hidden flex flex-col min-h-screen">
      <div className="relative z-10 flex-grow">
        <Hero />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section5 />
        <Section4 />
      </div>
    </div>
  );
};

export default Home;

