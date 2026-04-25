import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../animations";

const Services = () => {
  return (
    <section className="section light">
      <div className="box dark">

        <h2 className="title">
          WHAT WE CAN DO <span>FOR YOU?</span>
        </h2>

        <div className="services">

          <div className="service">
            <h3>Customer Support Outsourcing</h3>
            <p>24/7 professional support across chat, email, and phone for your customers.</p>
          </div>

          <div className="service">
            <h3>Inbound & Outbound Call Handling</h3>
            <p>Efficient call center solutions to manage customer inquiries and sales calls.</p>
          </div>

          <div className="service">
            <h3>Business Process Outsourcing</h3>
            <p>We handle your repetitive operations so you can focus on growing your business.</p>
          </div>

          <div className="service">
            <h3>Virtual Assistance & Admin Support</h3>
            <p>Reliable remote assistants for scheduling, data entry, and daily operations.</p>
          </div>

        </div>

        <div className="cta-bar">
          <p>Scale your support team instantly</p>
          <button>Get Started →</button>
        </div>

      </div>
    </section>
  );
};

export default Services;