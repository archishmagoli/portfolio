"use client";
import React, { useState, useEffect, useRef } from "react";

export default function Overview() {
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
            <div id="container" ref={ domRef } className={ `fade-in-section ${ isVisible ? 'is-visible' : '' }` }>
                <h1 className="heading general-text"><b>Research</b></h1>
                <h4 className="description general-text">My research endeavors so far.</h4>
                <hr />

                <h3 className="general-text"><b>Georgia Institute of Technology</b></h3>
                <h5 className="general-text"><b><a href="http://tid.gatech.edu/">Technologies & International Development Lab:</a> Healthcare Nudge Messaging Initiative</b></h5>
                <ul>
                    <li className="course-name">I&#39;m collaborating with current PhD and Master&#39;s students to conduct <b>sentiment analysis</b> and <b>Natural Language Processing</b> on social media data to provide key insights to nudge authors (members who draft text message &#34;nudges&#34; to inform the general population).</li>
                    <li className="course-name">The project is a joint collaboration between <b>Georgia Tech</b>, <b>Emory University</b>, and the <b>Morehouse School of Medicine.</b></li>
                    <li className="course-name">The current goal I&#39;m pursuing is to come up with a <b>dashboard of insights</b> that clearly displays the most important information coming from health-related posts from platforms such as Twitter, Instagram, and Facebook.</li>
                    <li className="course-name">Within this broader goal is a commitment to publish a <b>retrospective analysis</b> study in the coming months, through the lens of COVID-19 sentiment from 2020 to 2023.</li>
                </ul>

                <h5 className="general-text"><b>Vertically Integrated Projects (VIP): <a href="https://www.vip.gatech.edu/teams/vp3">Smart Stadium</a></b></h5>
                <div className="general-text">
                    <ul>
                        <li className="course-name">I&#39;m a current member of the SensorNets subteam, and I work on <b>hardware-software interaction</b> with tools such as AWS, MSP-432 microcontroller series.</li>
                        <li className="course-name">Some of my ongoing projects include <b>power testing</b> and the deployment of <b>remote software updates.</b></li>
                        <li><a>Publications:</a>
                            <ul>
                                <li className="course-name">Spring 2023 Smart Stadium VIP Team, &#34;The Smart Stadium Testbed for Sensing and Communication Systems,&#34; in <i>Submitted to the 2023 IEEE International Symposium on Personal, Indoor and Mobile Radio Communications (PIMRC)</i>, 2023.</li>
                                <li className="course-name"><a href="">Link to Paper (coming soon)</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <h3 className="general-text"><b>Kennesaw State University</b></h3>
                <h5 className="general-text"><b>Department of Computer Science</b></h5>
                <ul>
                    <li className="course-name">I worked with Assistant Professor <b>Dr. Selena He</b> to explore the impact of <b>adversarial attacks</b> on <b>Deep Learning models</b>.</li>
                    <li className="course-name">I built my own deep learning model using the <b>Tensorflow</b> and <b>Keras</b> libraries, and I implemented several degrees of gradient-based <b>black-box adversarial attacks</b>, examining their impact on the accuracy of the model (which was designed to classify handwritten text).</li>
                    <li className="course-name">You can read more <a href="./ksu">here</a>, and here is my 
                    <a href="https://drive.google.com/file/d/1kRp8YeaP9sWZdWTWQ6OsLLKbfl-Blf9L/view?usp=sharing"> final paper</a>.</li>
                </ul>
            </div>
            <div className="padding"></div>
        </>
    );
}