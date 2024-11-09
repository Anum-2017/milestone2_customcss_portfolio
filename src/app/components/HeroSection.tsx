"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import images from '../../../public/images/pic 2.png'; // Ensure the path is correct

const HeroSection = () => {
  return (
    <section className="heroSection">
      <div className="heroContent">
        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="heroText"
        >
          <h1>
            <span className="highlight">
              Hello, I am{' '}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                'Anum Kamal', 1000,
                'Software Engineer', 1000,
                'Web Developer', 1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="typeAnimation"
            />
          </h1>
          <p>
            Welcome to my portfolio! Scroll down to discover more about my skills, projects, and how I can help bring your ideas to life.
          </p>
          <div className="ctaButtons">
  <a
    href="https://www.linkedin.com/in/anum-k-442b2022b/"
    target="_blank"
    rel="noopener noreferrer"
    className="ctaButton">
    Contact Me
  </a>
  <a
    href="https://drive.google.com/file/d/1Lm2bNrQ_EUL31TNnc2TdqVN2HUj5EuCz/view"
    target="_blank"
    rel="noopener noreferrer"
    className="ctaButton downloadCv">
      Download CV
  </a>
</div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="heroImage"
        >
          <div className="profileImageWrapper">
            <Image
              src={images}
              alt="profile"
              className="profileImage"
              width={500}
              height={500}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
