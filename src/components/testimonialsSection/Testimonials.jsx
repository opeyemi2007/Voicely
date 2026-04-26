import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../animations";
import "./testimonials.css";

const Testimonials = () => {
  return (
    <section className="section dark-bg">
      <motion.div
        className="testimonial-container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >

        {/* HEADER */}
        <motion.div variants={fadeUp} className="testimonial-header">
          <span className="tag">TESTIMONIALS</span>
          <h2>
            Client <span>Success Stories</span>
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="testimonial-grid">

          {/* FEATURED */}
          <motion.div variants={fadeUp} className="testimonial featured">
            <p>
              “Voicely completely transformed how we handle customer support.
              Our response time improved by over 60%.”
            </p>

            <div className="client">
              <div className="avatar"></div>
              <div>
                <h4>Daniel Okafor</h4>
                <span>E-commerce Founder</span>
              </div>
            </div>
          </motion.div>

          {/* NORMAL */}
          <motion.div variants={fadeUp} className="testimonial">
            <p>
              “Their team is reliable, fast, and understands our customers.”
            </p>

            <div className="client">
              <div className="avatar"></div>
              <div>
                <h4>Sarah Ade</h4>
                <span>Startup Owner</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="testimonial">
            <p>
              “We scaled support without hiring in-house. Huge win for us.”
            </p>

            <div className="client">
              <div className="avatar"></div>
              <div>
                <h4>Michael Bello</h4>
                <span>SaaS Founder</span>
              </div>
            </div>
          </motion.div>

        </div>

      </motion.div>
    </section>
  );
};

export default Testimonials;