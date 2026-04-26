import { useEffect, useState } from "react";
import "./header.css";
import logo from "../../assets/voicely logo 2 PNG.png";

const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`headerWrapper ${scroll ? "show" : ""}`}>
      <div className="innerWrapper">
        <img src={logo} alt="Voicely logo" className="Headerlogo" />

        <ul>
          <li>Services</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <button className="contactBtn">+234 811 079 0615</button>
      </div>
    </header>
  );
};

export default Header;