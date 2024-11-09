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
    <section id="contact">
      <div className="content">
        <h1 className="heading">Lets Connect</h1>
        <p className="description">
          I am currently looking for new opportunities, my inbox is always open. 
          Whenever you have a question, or just want to say hi, 
          I will try my best to get back to you!
        </p>
        <div className="socials">
          {socials.map((social, index) => (
            <Link key={index} href={social.path} target="_blank">
              <Image
                src={`/icons/${social.icon}`}
                alt={`Visit my ${social.path.split('/')[2]} profile`}
                className="socialIcon"
                width={24}
                height={24}
              />
            </Link>
          ))}
        </div>
      </div>
      <div>
        <form className="formContainer">
          <div className="inputGroup">
            <label htmlFor="email" className="inputLabel">Your Email</label>
               <br/> <br/>
            <input
              name="email"
              type="email"
              id="email"
              required
              placeholder="Your email"
              className="inputField"
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="subject" className="inputLabel">Subject</label>
               <br/> <br/>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              placeholder="Just saying hi"
              className="inputField"
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="message" className="inputLabel">Message</label>
               <br/> <br/>
            <textarea
              name="message"
              id="message"
              className="textareaField"
              placeholder="Lets talk about..."
            />
          </div>
          <button type="submit" className="button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
