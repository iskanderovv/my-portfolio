import { AiTwotonePhone } from "react-icons/ai"; 
import { BsTelegram } from "react-icons/bs";
import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am
            <span className="purple"> Akbar Iskandarov </span>
            from
            <span className="purple"> Kashkadarya, Uzbekistan</span>
            <br />I study in the 3rd year at National University of Uzbekistan
            named after Mirzo Ulugbek. I'm a frontend developer with expertise
            in web technologies, specializing in HTML, CSS, and frameworks like
            Bootstrap and Tailwind CSS for responsive design. I am proficient in
            JavaScript for client-side scripting and have experience with React
            JS and Next.js to enhance frontend functionalities. I also leverage
            TypeScript for better code quality. I regularly use UI component
            libraries such as Material UI and Ant Design to expedite development
            and ensure consistent design patterns.
            <br />
            <br />
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="tel:+998910714003"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiTwotonePhone />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/iskanderovv"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/akbar-iskandarov-33a8a6232/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://t.me/akbar_iskanderov"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <BsTelegram />
                </a>
              </li>
            </ul>
            {/* <p className="purple">
              Phone: +998 91 071 4003
              <br />
              Email: iskanderovofficial@gmail
              <br />
              GitHub: https://github.com/iskanderovv
              <br />
              LinkedIn: https://www.linkedin.com/in/akbar-iskandarov/
              <br />
              Telegram: https://t.me/akbar_iskanderov
            </p> */}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
