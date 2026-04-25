import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../animations";
import "./problem.css";

const Problem = () => {
  return (
    <section className="section light">
      <div className="box">
        <h2 className="center">
          Are You Running Into These Problems?
        </h2>

        <div className="problem-grid">
          <div className="problem-card">
            <span>01</span>
            <h3>Stagnant Growth?</h3>
            <p>Identify growth barriers and scale effectively.</p>
          </div>

          <div className="problem-card">
            <span>02</span>
            <h3>Operational Inefficiencies?</h3>
            <p>Streamline your operations for better results.</p>
          </div>

          <div className="problem-card">
            <span>03</span>
            <h3>Market Challenges?</h3>
            <p>Overcome competition with better strategies.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;