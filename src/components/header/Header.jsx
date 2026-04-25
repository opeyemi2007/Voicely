
import { useEffect, useState } from "react"
import "./header.css"
import logo from "../../assets/voicely logo 2 PNG.png"

const Header = () => {
  const [scroll, setScroll] = useState(false)


  useEffect(()=>{
    const handleScroll = () =>{
      const currentScroll = window.scrollY;

      if(currentScroll > 100){
        setScroll(true)
      }else{
        setScroll(false)
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])


  return (
    <main className={`headerWrapper ${scroll? "show" : ""}`}>
      <div className="innerWrapper">
        <img src={logo} className="Headerlogo" />
        <ul>
          <li>SERVICES</li>
          <li>ABOUT US</li>
          <li>CONTACT US</li>
        </ul>

        <button className='contactBtn'>+234 811 079 061 5</button>
      </div>
    </main>
  )
}

export default Header
