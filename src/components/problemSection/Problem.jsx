import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../animations";
import character from "../../assets/model 2.png"
import "./problem.css";

const Problem = () => {
  return (
    <section className="section light">
      <div className="box problem-flex">

        {/* LEFT CONTENT */}
        <motion.div
          className="problem-left"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2 variants={fadeUp}>
            Are You Running Into These Problems?
          </motion.h2>

          <div className="problem-grid">
            <motion.div variants={fadeUp} className="problem-card">
              <span>01</span>
              <h3>Stagnant Growth?</h3>
              <p>Identify growth barriers and scale effectively.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="problem-card">
              <span>02</span>
              <h3>Operational Inefficiencies?</h3>
              <p>Streamline your operations for better results.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="problem-card">
              <span>03</span>
              <h3>Market Challenges?</h3>
              <p>Overcome competition with better strategies.</p>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT CHARACTER */}
        {/* <motion.div
          className="problem-right"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={character} alt="Voicely assistant" />
        </motion.div> */}

      </div>
    </section>
  );
};

export default Problem;