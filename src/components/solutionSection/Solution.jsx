import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "../../animations";
import illustration from "../../assets/model 2.png";
import "./solution.css";

const Solution = () => {
  return (
    <section className="section light">
      <div className="box solution-container">

        {/* LEFT TEXT */}
        <motion.div
          className="solution-text"
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <span className="tag">OUR APPROACH</span>

          <h2>
            We build support systems that actually scale
          </h2>

          <p>
            Voicely combines trained support agents, smart workflows,
            and fast response systems to ensure your customers always
            get the attention they deserve.
          </p>

          <div className="features">
            <div>⚡ Fast response time</div>
            <div>💬 Multi-channel support</div>
            <div>📈 Built for growth</div>
          </div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          className="solution-visual"
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="visual-card">
            <img src={illustration} alt="Voicely assistant" />

            {/* floating UI elements */}
            <div className="bubble one">💬 New Message</div>
            <div className="bubble two">✅ Replied</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Solution;