import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../animations";
import "./contact.css";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <main className="contact-page">

      <Helmet>
        <title>Contact Voicely | Get a Free Consultation</title>
        <meta
          name="description"
          content="Contact Voicely today to get a free consultation and scale your customer support operations."
        />
      </Helmet>


      {/* HERO */}
      <section className="section light">
        <div className="box contact-hero">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.span variants={fadeUp} className="tag">
              CONTACT US
            </motion.span>

            <motion.h1 variants={fadeUp}>
              Let’s talk about your
              <span> business needs</span>
            </motion.h1>

            <motion.p variants={fadeUp}>
              Whether you need customer support, outsourcing, or assistance —
              we’re ready to help you scale.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* MAIN */}
      <section className="section light">
        <div className="box contact-grid">

          {/* FORM */}
          <motion.form
            className="contact-form"
            variants={fadeUp}
          >
            <h2>Send us a message</h2>

            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <input type="text" placeholder="Company (optional)" />
            <textarea placeholder="Tell us what you need..." />

            <button type="submit">Send Message →</button>
          </motion.form>

          {/* INFO */}
          <motion.div className="contact-info" variants={fadeUp}>
            <h2>Contact Information</h2>

            <p><strong>Phone:</strong> +234 811 079 0615</p>
            <p><strong>Email:</strong> voicelybpo@gmail.com</p>
            <p><strong>Location:</strong> Lagos, Nigeria</p>

            <div className="contact-card">
              <h3>Why reach out?</h3>
              <ul>
                <li>✔ Get a free consultation</li>
                <li>✔ Discuss your support needs</li>
                <li>✔ Learn how to scale faster</li>
              </ul>
            </div>
          </motion.div>

        </div>
      </section>

      {/* CTA */}
      <section className="section light">
        <div className="box contact-cta">
          <h2>Ready to scale your support?</h2>
          <p>Let Voicely handle your operations while you grow.</p>
          <button>Get Started →</button>
        </div>
      </section>

    </main>
  );
};

export default Contact;