import React from "react";
import { IoMdCheckboxOutline } from "react-icons/io";

const SkillsSection = () => {
  const skills = [
    { name: "HTML", progress: 100 },
    { name: "CSS", progress: 95 },
    { name: "Javascript / Typescript", progress: 90 },
    { name: "NEXT.JS", progress: 70 },
    { name: "TAILWIND CSS", progress: 75 },
    { name: "CANVA", progress: 85 },
    { name: "PHP", progress: 90 },
    { name: "MY SQL", progress: 60 },
    { name: "Bootstrap", progress: 100 }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="title-container">
          <h1 className="section-title">
            My <span className="skills-title">Skills</span>
          </h1>
        </div>

        <div className="skills-list">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-header">
                <div className="icon-container">
                  <IoMdCheckboxOutline className="icon" />
                </div>
                <h2 className="skill-name">{skill.name}</h2>
              </div>
              <div className="progress-bar-container">
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${skill.progress}%` }}
                  ></div>
                </div>
                <p className="progress-text">{skill.progress}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
