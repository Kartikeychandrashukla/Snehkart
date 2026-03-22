import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

interface FooterProps {
  close:(type:boolean)=>void;
}
const Footer: React.FC<FooterProps> = (props) => {
  return (
    <footer className="footer">
      <div className="divider" />
      <div className="links">
        <button onClick={() => props.close(true)} className="footerButton">term of services</button>
             <button onClick={() => props.close(true)} className="footerButton">Return Policy</button>
                <button onClick={() => props.close(true)} className="footerButton">Privacy Policy</button>
        <a href="https://www.instagram.com/snehbaebee?igsh=emI0bm82aHRlcG52" target="_blank" rel="noopener noreferrer" className="link">
          <FaInstagram size={20} />
        </a>
        <a href="https://www.linkedin.com/in/sneha-rai-8bb005254" target="_blank" rel="noopener noreferrer" className="link">
          <FaLinkedin size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
