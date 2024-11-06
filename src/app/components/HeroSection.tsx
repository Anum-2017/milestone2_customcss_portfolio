"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import images from '../../../public/images/pic 2.png';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="hero-content"
        >
          <h1 className="hero-title">
            <span className="gradient-text">Hello, I am</span>
            <br />
            <TypeAnimation
              sequence={[
                'Anum Kamal',
                1000,
                'Software Engineer',
                1000,
                'Web Developer',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="hero-animation"
            />
          </h1>
          <p className="hero-description">
            Welcome to my portfolio! Scroll down to discover more about my skills, projects, and how I can help bring your ideas to life.
          </p>
          <div className="button-container">
      <a
        href="https://www.linkedin.com/in/anum-k-442b2022b/"
        target="_blank"
        rel="noopener noreferrer"
        className="button"
      >
        Contact Me
      </a>
      <a
        href="https://drive.google.com/file/d/1Lm2bNrQ_EUL31TNnc2TdqVN2HUj5EuCz/view"
        target="_blank"
        rel="noopener noreferrer"
        className="cv-button"
      >
        <span>Download CV</span>
      </a>
    </div> 
        </motion.div>
        
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="image-container"
        >
          <Image 
            src={images}
            alt="profile"
            className="profile-image"
            width={300}
            height={300}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
