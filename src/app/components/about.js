"use client";
import React, {useState, useRef, useEffect} from 'react';
import Image from 'react-bootstrap/Image';
import './app.css';
import { SocialIcon } from 'react-social-icons';

export default function Header() {
  const [isVisible, setVisible] = useState(false);

  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.isIntersecting && setVisible(true));
    });

    observer.observe(domRef.current);

    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <>
      <div id="overarching_container" ref={ domRef } className={ `fade-in-section ${ isVisible ? 'is-visible' : '' }` }>
          <div id="bubble-wrap">
              <div className="bubble x1"></div>
              <div className="bubble x2"></div>
              <div className="bubble x3"></div>
              <div className="bubble x4"></div>
              <div className="bubble x5"></div>
              <div className="bubble x6"></div>
              <div className="bubble x7"></div>
              <div className="bubble x8"></div>
          </div>
          <div id="container"> 
              <h1 className="title_heading title-text">Hi! I&#39;m <b>Archie Goli.</b></h1>
              <hr />
              <div className="title_description title-text">
                  <h4>I&#39;m a 2nd-year <b>Computer Science & Math undergraduate</b> studying at the <b>Georgia Institute of Technology.</b></h4>
                  <br></br>
                  <h4>I&#39;m interested in exploring <b>Data Science, AI/ML, Web3,</b> and <b>Quantitative Finance</b> on a deep level.</h4>
                  <br></br>
                  <h4>I enjoy <b>going on an outdoor run</b> and <b>playing the violin</b> in my free time!</h4>
                  <br></br>
              </div> 
          </div>
          <div id="container-2">
              <Image className="profile-image" src="images/profile-pic.png" alt="profile-pic" id="profile-pic" />
              <h4>Let&#39;s Connect!</h4>
              <div className='social-icons'>
                <SocialIcon className="social-icon" url="https://www.linkedin.com/in/archishma-goli/" />
                <SocialIcon className="social-icon" url="https://github.com/archishmagoli" />
              </div>
          </div>
        </div>

        <div className="padding"></div>
    </>
  )
}