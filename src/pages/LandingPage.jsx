import { Helmet } from "react-helmet";
import { HeroSection } from "../components/heroSection/HeroSection";
import Problem from "../components/problemSection/Problem";
import Services from "../components/serviceSection/Services";
import Solution from "../components/solutionSection/Solution";
import Team from "../components/teamSection/Team";
import Testimonials from "../components/testimonialsSection/Testimonials";

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>Voicely | Customer Support Outsourcing & BPO Services</title>

        <meta
          name="description"
          content="Voicely helps businesses scale with 24/7 customer support, call center services, and virtual assistants. Grow your business with our BPO solutions."
        />

        <meta
          name="keywords"
          content="BPO Nigeria, customer support outsourcing, virtual assistant services, call center services"
        />
      </Helmet>
      <Helmet>
        <meta property="og:title" content="Voicely BPO Services" />
        <meta
          property="og:description"
          content="Scale your business with Voicely's customer support solutions."
        />
        <meta property="og:image" content="/preview-image.png" />
        <meta property="og:type" content="website" />
      </Helmet>

      <HeroSection />
      <Problem />
      <Solution />
      <Services />
      <Testimonials />
      <Team />
    </>
  );
};

export default LandingPage;
