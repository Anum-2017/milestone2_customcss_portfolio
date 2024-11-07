"use client";
import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id="about">
      <div className="about-container">
        <Image src="/images/about-image.webp" alt="about" height={300} width={500} />
        <div className="text-container">
          <h1 className="title">About Me</h1>
          <p className="paragraph">
            I am a dedicated web developer with a deep passion for crafting visually captivating and highly functional websites. Proficient in HTML, CSS, JavaScript, TypeScript, and frameworks such as Next.js and Tailwind CSS, I excel at creating seamless user interfaces that enhance the browsing experience. My mission is to design innovative digital landscapes that engage users and deliver outstanding results. Driven by the challenge of pushing boundaries, I continually hone my skills to produce work that resonates long after it has been experienced.
            <br /> <br />
            Currently, my focus is on expanding my skill set. I am actively mastering new programming languages, exploring diverse courses, and delving into emerging technologies within the industry. Specifically, I am deeply engaged in Artificial Intelligence, Web 3.0, and the Metaverse.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
