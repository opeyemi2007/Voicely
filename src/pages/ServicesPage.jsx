import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../animations";
import "./servicesPage.css";
import { Helmet } from "react-helmet";

const services = [
  {
    title: "Customer Support Outsourcing",
    desc: "We handle customer inquiries across chat, email, and phone with fast and professional responses.",
    points: ["24/7 availability", "Multi-channel support", "Trained support agents"],
  },
  {
    title: "Inbound & Outbound Call Handling",
    desc: "Manage incoming customer calls and outbound sales or follow-ups with efficiency.",
    points: ["Call center solutions", "Lead follow-ups", "Sales call handling"],
  },
  {
    title: "Business Process Outsourcing",
    desc: "We take care of repetitive tasks so your team can focus on growth and strategy.",
    points: ["Data entry", "Process automation", "Task management"],
  },
  {
    title: "Virtual Assistance & Admin Support",
    desc: "Reliable remote assistants to handle scheduling, emails, and daily operations.",
    points: ["Calendar management", "Email handling", "Admin support"],
  },
];

const ServicesPage = () => {
  return (
    <main className="services-page">

      <Helmet>
        <title>Voicely | BPO & Customer Support Services</title>
        <meta
          name="description"
          content="Explore Voicely’s customer support outsourcing, call center solutions, and virtual assistant services."
        />
      </Helmet>

      {/* HERO */}
      <section className="section light">
        <div className="box services-hero">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.span variants={fadeUp} className="tag">
              OUR SERVICES
            </motion.span>

            <motion.h1 variants={fadeUp}>
              Scalable support solutions for
              <span> modern businesses</span>
            </motion.h1>

            <motion.p variants={fadeUp}>
              From customer support to backend operations, Voicely helps you
              scale faster without the stress of managing teams.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section light">
        <motion.div
          className="box services-list"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >

          {services.map((service, index) => (
            <motion.div key={index} variants={fadeUp} className="service-block">

              <div className="service-left">
                <span>0{index + 1}</span>
                <h2>{service.title}</h2>
              </div>

              <div className="service-right">
                <p>{service.desc}</p>

                <ul>
                  {service.points.map((point, i) => (
                    <li key={i}>✔ {point}</li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}

        </motion.div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section light">
        <div className="box why-us">

          <h2>Why businesses choose Voicely</h2>

          <div className="why-grid">
            <div>⚡ Fast response systems</div>
            <div>💬 Real human support</div>
            <div>📈 Built for scaling</div>
            <div>🌍 Flexible remote team</div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="section light">
        <div className="box services-cta">

          <h2>Ready to scale your support?</h2>
          <p>Let Voicely handle your operations while you grow your business.</p>

          <button>Get Started →</button>

        </div>
      </section>

    </main>
  );
};

export default ServicesPage;