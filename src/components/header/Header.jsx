import { useEffect, useState } from "react";
import "./header.css";
import logo from "../../assets/voicely logo 2 PNG.png";
import { useNavigate } from "react-router-dom";
import { HiMenuAlt2, HiMenuAlt3 } from "react-icons/hi";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [headerDropDown, setHeaderDropDown] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nav = useNavigate()

  return (
    <header className={`headerWrapper ${scroll ? "show" : ""}`}>
      <div className="innerWrapper">
        <img src={logo} alt="Voicely logo" className="Headerlogo" loading="lazy" onClick={() => nav("/")} />

        <ul>
          <li onClick={() => nav('/services')}>Services</li>
          <li onClick={() => nav('/about')}>About</li>
          <li onClick={() => nav("/contact")}>Contact</li>
        </ul>

        <button className="contactBtn">+234 811 079 0615</button>
        <HiMenuAlt3 className="mobileMenu" onClick={() => setHeaderDropDown(!headerDropDown)} />
      </div>

      {
        headerDropDown && <div className="headerDropdown" onClick={() => setHeaderDropDown(!headerDropDown)}>
          <div className="headerDropdowninnerWrapper">
            <div className="header"><h1>MENU</h1><HiMenuAlt2 className="mobileMenu" /></div>

            <div className="navlink">
              <ul>
                <li>Services</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>

          </div>
        </div>
      }

    </header>
  );
};

export default Header;