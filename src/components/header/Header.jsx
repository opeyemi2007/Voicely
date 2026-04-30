import { useEffect, useState } from "react";
import "./header.css";
import logo from "../../assets/voicely logo 2 PNG.png";
import { useNavigate } from "react-router-dom";
import { HiMenuAlt2, HiMenuAlt3 } from "react-icons/hi";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [open, setOpen] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <header className={`headerWrapper ${scroll ? "show" : ""}`}>

      <div className="innerWrapper">
        <img
          src={logo}
          alt="Voicely logo"
          className="Headerlogo"
          onClick={() => nav("/")}
        />

        <ul>
          <li onClick={() => nav("/services")}>Services</li>
          <li onClick={() => nav("/about")}>About</li>
          <li onClick={() => nav("/contact")}>Contact</li>
        </ul>

        <button className="contactBtn" onClick={() => nav("/contact")}>
          Get Started
        </button>

        <HiMenuAlt3 className="mobileMenu" onClick={() => setOpen(true)} />
      </div>

      {/* MOBILE MENU */}
      <div className={`headerDropdown ${open ? "active" : ""}`}>
        <div
          className="headerDropdowninnerWrapper"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="header">
            <h1>MENU</h1>
            <HiMenuAlt2 className="mobileMenu" onClick={() => setOpen(false)} />
          </div>

          <div className="navlink">
            <ul>
              <li onClick={() => { nav("/services"); setOpen(false); }}>Services</li>
              <li onClick={() => { nav("/about"); setOpen(false); }}>About</li>
              <li onClick={() => { nav("/contact"); setOpen(false); }}>Contact</li>
            </ul>
          </div>

          <div className="socialsWrapper">
            <FaFacebook />
            <FaInstagram />
            <FaTiktok />
            <FaXTwitter />
          </div>

          <div className="dropDownfooter">
            <span>© Voicely 2026</span>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;