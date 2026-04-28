import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../animations";
import "./about.css";
import Team from "../components/teamSection/Team";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <main className="about-page">

      <Helmet>
        <title>About Voicely | Our Story & Mission</title>
        <meta
          name="description"
          content="Learn about Voicely’s mission to help businesses deliver better customer experiences through outsourcing."
        />
      </Helmet>

      {/* HERO */}
      <section className="section light">
        <div className="box about-hero">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.span variants={fadeUp} className="tag">
              ABOUT VOICELY
            </motion.span>

            <motion.h1 variants={fadeUp}>
              We help businesses deliver
              <span> better customer experiences</span>
            </motion.h1>

            <motion.p variants={fadeUp}>
              Voicely is a customer support outsourcing company built to help
              startups and growing businesses scale without the stress of
              managing support teams.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* STORY */}
      <section className="section light">
        <div className="box about-story">
          <div>
            <h2>Our Story</h2>
            <p>
              Voicely was created with one goal — to make customer support
              simple, fast, and reliable for businesses of all sizes.
              <br /><br />
              We saw how many companies struggled with delayed responses,
              overwhelmed teams, and poor customer experiences.
              <br /><br />
              So we built a system that combines skilled support agents,
              efficient workflows, and modern tools to help businesses scale
              effortlessly.
            </p>
          </div>

          <div className="story-highlight">
            <p>
              “Your customers deserve fast, human, and reliable support — every time.”
            </p>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="section light">
        <div className="box mission-grid">

          <div className="mission-card">
            <h3>Our Mission</h3>
            <p>
              To empower businesses with scalable customer support solutions
              that improve satisfaction and drive growth.
            </p>
          </div>

          <div className="mission-card">
            <h3>Our Vision</h3>
            <p>
              To become a leading global BPO company known for speed,
              reliability, and customer excellence.
            </p>
          </div>

        </div>
      </section>

      {/* WHY US */}
      <section className="section light">
        <div className="box about-features">

          <h2>Why Choose Voicely?</h2>

          <div className="features-grid">
            <div>⚡ Fast response systems</div>
            <div>💬 Multi-channel support</div>
            <div>📈 Built for scaling businesses</div>
            <div>🌍 Remote & flexible team</div>
          </div>

        </div>
      </section>

      {/* TEAM */}
      <Team />

      {/* CTA */}
      <section className="section light">
        <div className="box about-cta">

          <h2>Let’s handle your support while you grow</h2>
          <p>Start your journey with Voicely today.</p>

          <button>Get Started →</button>

        </div>
      </section>

    </main>
  );
};

export default About;