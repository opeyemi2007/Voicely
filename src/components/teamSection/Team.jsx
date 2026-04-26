import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../animations";
import "./team.css";

import member1 from "../../assets/member1.jpeg";
import member2 from "../../assets/member2.jpeg";
import member3 from "../../assets/member3.jpeg";
import member4 from "../../assets/member4.jpeg";
import member5 from "../../assets/member5.jpg";
import member6 from "../../assets/Gemini_Generated_Image_o16uodo16uodo16u.png";

const team = [
  {
    name: "Aliu Samson Chibuzor",
    role: "Founder & Creative Director",
    image: member1,
  },
  {
    name: "Alaba Afolami Daniel ",
    role: "Customer Service Trainer",
    image: member2,
  },
  {
    name: "Odubote Abdulahi Ayomide",
    role: "Customer service manager and supervisor",
    image: member3,
  },
  {
    name: "Ikechukwu Evans",
    role: "Retention specialist",
    image: member4,
  },
  {
    name: "Adio Kingsley",
    role: "Social media team/ technical support team",
    image: member5,
  },
  {
    name: "Voicely Assistant",
    role: "Always active. Always helping. 💬",
    image: member6,
  },
];

const Team = () => {
  return (
    <section className="section light">
      <motion.div
        className="box team-container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >

        {/* HEADER */}
        <motion.div variants={fadeUp} className="team-header">
          <span className="tag">OUR TEAM</span>
          <h2>
            Meet the people behind <span>Voicely</span>
          </h2>
          <p>
            A dedicated team focused on delivering world-class customer support experiences.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="team-grid">
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="team-card"
            >
              <div className="image-wrapper">
                <img src={member.image} alt={member.name} />
              </div>

              <div className="team-info">
                <h3>{member.name}</h3>
                <span>{member.role}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
};

export default Team;