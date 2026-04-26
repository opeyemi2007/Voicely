import "./footer.css";
import { BsArrowDownRight } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { GoArrowUpRight } from "react-icons/go";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosCall, IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-box">

        {/* LEFT */}
        <div className="footer-left">
          <h1>
            <BsArrowDownRight />
            CONTACT <br />
            US TODAY
          </h1>

          <p>
            Let Voicely handle your customer support while you focus on growing your business.
          </p>

          <div className="socials">
            <FaFacebook />
            <FaInstagram />
            <FaTiktok />
            <FaXTwitter />
          </div>
        </div>

        {/* RIGHT */}
        <div className="footer-right">

          <div className="cta">
            <h3>Get a FREE consultation</h3>

            <div className="cta-input">
              <CiMail />
              <input type="email" placeholder="example@gmail.com" />
            </div>

            <button className="cta-btn">
              GET STARTED <GoArrowUpRight />
            </button>
          </div>

          <div className="contact-info">
            <p><IoIosCall /> +234 811 079 0615</p>
            <p><IoIosMail /> voicelybpo@gmail.com</p>
            <p><IoLocationSharp /> Lagos, Nigeria</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Footer;