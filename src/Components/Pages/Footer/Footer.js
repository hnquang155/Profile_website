import React from 'react';
import './Footer.css';
import { Button} from "../../Other/Button";
import { Link } from 'react-router-dom';
import {FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaPhone, FaMailBulk} from 'react-icons/fa';
import { MdGrass } from 'react-icons/md';

const space = '     '
function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Contact me if you want to cooperate for any projects
        </p>
        <p className='footer-subscription-heading'> <FaMailBulk/> quang.bs20dsy027@spjain.org  or </p>
        <p className='footer-subscription-heading'> <FaPhone/> 
            {space}  +84974986336  </p>
            
        
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Send Request</Button>
          </form>
        </div>
      </section>
     
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <MdGrass className='navbar-icon' />
              QUANG HUYNH
            </Link>
          </div>
          <small className='website-rights'>QuangHuynh © 2021</small>
          <div className='social-icons'>
            <a
              className='social-icon-link'
              href='https://www.facebook.com/ngocquang.huynh.583/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </a>
            <a
              className='social-icon-link'
              href='https://www.instagram.com/ngocc_wangg/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </a>
            
            <a
              className='social-icon-link'
              href='https://www.linkedin.com/in/quang-huynh-ngoc//'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </a>

            <a
              className='social-icon-link'
              href='https://github.com/hnquang155'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaGithub />
            </a>

            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;