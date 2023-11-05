import react from "react";
import btnImg from "../../assets/hireme.png";
import { Link } from "react-scroll";
import "./intro.css";
import bg from "../../assets/image.png";

const Intro = () => {
  return (
    <div>
      <section id="intro">
        <div className="introContent">
          <span className="hello">Hello</span>
          <span className="introText">
            I'm <span className="introName">Sk Sajid Ali</span> <br />
            Frontend React Developer
          </span>
          <p className="introPara">
            I am a skilled Frontend React Developer
            <br /> with creating user Interfaces
          </p>
          <Link>
            <button className="btn">
              <img src={btnImg} alt="Hire me" className="btnImg" />
              Hire me
            </button>
          </Link>
        </div>
        <img src={bg} alt="Profile" className="bg" />
      </section>
    </div>
  );
};

export default Intro;
