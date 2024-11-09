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
      <div className="gradient-circle"></div>
      <div className="content">
        <h1>Let's Connect</h1>
        <p>
          I am currently looking for new opportunities, my inbox is always open. 
          Whenever you have a question, or just want to say hi, 
          I will try my best to get back to you!
        </p>
        <div className="socials">
          {socials.map((social, index) => (
            <Link key={index} href={social.path} target='_blank'>
              <Image
                src={`/icons/${social.icon}`}
                alt={`Visit my ${social.path.split('/')[2]} profile`}
                width={24}
                height={24}
              />
            </Link>
          ))}
        </div>
      </div>
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              name="email"
              type="email"
              id="email"
              required
              placeholder="Your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              placeholder="Just saying hi"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Lets talk about..."
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;

        
           
         
