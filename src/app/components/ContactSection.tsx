'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ContactSection = () => {

  const socials = [
    { icon: 'github-icon.svg', path: 'https://github.com/Anum-2017' },
    { icon: 'linkedin-icon.svg', path: 'https://www.linkedin.com/in/anum-k-442b2022b/' },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-background"></div>
      <div className="contact-content">
        <h1 className="contact-title">Lets Connect</h1>
        <p className="contact-description">
          I am currently looking for new opportunities, my inbox is always open. 
          Whenever you have a question, or just want to say hi, 
          I will try my best to get back to you!
        </p>
        <div className="contact-socials">
          {socials.map((social, index) => (
            <Link key={index} href={social.path} target='_blank'>
              <Image src={`icons/${social.icon}`}
                alt={social.path.split('/')[2]}
                className="social-icon"
              />
            </Link>
          ))}
        </div>
      </div>
      <div>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
              Your Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              placeholder="Your email"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              placeholder="Just saying hi"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="text-white block mb-2 text-sm font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="form-input"
              placeholder="Let's talk about..."
            />
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
