import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Akbar Iskandarov </span>
            from <span className="purple"> Kashkadarya, Uzbekistan</span>
            <br />
            Sure, here's a more detailed version: I am a frontend developer with
            a strong skill set in web technologies. My expertise includes HTML
            for structuring content, CSS for styling, and frameworks like
            Bootstrap and Tailwind CSS for responsive design and UI development.
            I am proficient in JavaScript for dynamic client-side scripting and
            have experience with modern libraries and frameworks such as React
            JS and Next.js, enhancing frontend functionalities and user
            interactions. I also leverage TypeScript for enhanced code quality
            and maintainability. In terms of UI component libraries, I regularly
            utilize Material UI and Ant Design to expedite development and
            ensure consistent design patterns across projects.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
