import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../animations";
import "./services.css";

const Services = () => {
  return (
    <section className="section light">
      <motion.div
        className="box dark services-container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >

        {/* HEADER */}
        <motion.div variants={fadeUp} className="services-header">
          <span className="tag">OUR SERVICES</span>
          <h2>
            What we can do <span>for you</span>
          </h2>
        </motion.div>

        {/* SERVICES LIST */}
        <div className="services-list">

          <motion.div variants={fadeUp} className="service">
            <div className="service-left">
              <span>01</span>
              <h3>Customer Support Outsourcing</h3>
            </div>
            <p>
              24/7 professional support across chat, email, and phone for your customers.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="service">
            <div className="service-left">
              <span>02</span>
              <h3>Inbound & Outbound Call Handling</h3>
            </div>
            <p>
              Efficient call center solutions to manage customer inquiries and sales calls.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="service">
            <div className="service-left">
              <span>03</span>
              <h3>Business Process Outsourcing</h3>
            </div>
            <p>
              We handle your repetitive operations so you can focus on growing your business.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="service">
            <div className="service-left">
              <span>04</span>
              <h3>Virtual Assistance & Admin Support</h3>
            </div>
            <p>
              Reliable remote assistants for scheduling, data entry, and daily operations.
            </p>
          </motion.div>

        </div>

        {/* CTA */}
        <motion.div variants={fadeUp} className="cta-bar">
          <p>Scale your support team instantly</p>
          <button>Get Started →</button>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Services;