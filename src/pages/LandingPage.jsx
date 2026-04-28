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
          content="customer support outsourcing, BPO company Nigeria, call center services, virtual assistant services, outsource customer support"
        />

        {/* MOBILE */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* CANONICAL (IMPORTANT FOR SEO) */}
        <link rel="canonical" href="https://voicely-xi.vercel.app/" />

        {/* OPEN GRAPH (FACEBOOK, LINKEDIN) */}
        <meta property="og:title" content="Voicely | BPO Services" />
        <meta
          property="og:description"
          content="Scale your business with Voicely’s customer support outsourcing and BPO solutions."
        />
        <meta property="og:image" content="/preview-image.png" />
        <meta property="og:type" content="website" />

        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Voicely BPO Services" />
        <meta
          name="twitter:description"
          content="Customer support outsourcing made simple with Voicely."
        />
        <meta name="twitter:image" content="/preview-image.png" />
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
