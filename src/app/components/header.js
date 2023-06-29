"use client";
import React, {useState, useRef, useEffect} from 'react';
import './app.css';

export default function FadeInSection() {
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
                <h1 className="title_heading">Hi! I'm <b>Archie Goli.</b></h1>
                <br></br>
                <div className="title_description">
                    <h4>I'm a 2nd-year <b>Computer Science & Math undergraduate</b> studying at the <b>Georgia Institute of Technology.</b></h4>
                    <br className="title-breaks"></br>
                    <h4>I'm interested in <b>Data Science, AI/ML, Web3,</b> and <b>Quantitative Finance</b> technologies.</h4>
                    <br className="title-breaks"></br>
                    <h4>I'm also an avid <b>classical violinist</b> and <b>Carnatic vocalist.</b> You can see me organizing an <b>SCPC event</b> or host workshops with <b>Data Science @ Georgia Tech</b> on campus!</h4>
                    <br className="title-breaks"></br>
                </div> 
            </div>
            <div id="container-2">
                <img className="profile-image" src="images/profile-pic.png" alt="profile-pic" id="profile-pic"></img>
            </div>
        </div>
    </>
  )
}