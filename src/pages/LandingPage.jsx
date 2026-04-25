import { HeroSection } from "../components/heroSection/HeroSection"
import Problem from "../components/problemSection/Problem"
import Services from "../components/serviceSection/Services"
import Solution from "../components/solutionSection/Solution"
import Testimonials from "../components/testimonialsSection/Testimonials"

const LandingPage = () => {
  return (
    <>
     <HeroSection/>
     <Problem/>
     <Solution/>
     <Services/>
     <Testimonials/>
    </>
  )
}

export default LandingPage
