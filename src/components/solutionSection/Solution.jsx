import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "../../animations";
import illustration from "../../assets/model 2.png"

const Solution = () => {
  return (
    <section className="section light">
      <div className="box approach">

        <div>
          <h2>OUR APPROACH</h2>
          <div className="visual-placeholder">
            <img src={illustration} alt="Voicely model" />
          </div>
        </div>

        <div>
          <p>
            We combine deep industry knowledge with innovative thinking
            to deliver solutions that help your business grow sustainably.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Solution;
