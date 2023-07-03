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
                <h1 className="heading general-text"><b>Coursework</b></h1>
                <h4 className="description general-text">A running list of my university coursework.</h4>
                <hr />
                <h3 className="general-text"><b>Georgia Institute of Technology</b></h3>
                <div className="general-text">
                    <h5><i>Mathematics</i></h5>
                    <ul>
                        <li className="course-name"><b>MATH 3235:</b> Probability Theory <i>(In Progress)</i></li>
                        <li className="course-name"><b>MATH 2552:</b> Differential Equations <i>(In Progress)</i></li>
                        <li className="course-name"><b>MATH 3012:</b> Applied Combinatorics</li>
                        <li className="course-name"><b>MATH 2106:</b> Foundations of Mathematical Proof</li>
                        <li className="course-name"><b>MATH 2551:</b> Multivariable Calculus</li>
                        <li className="course-name"><b>MATH 1554:</b> Linear Algebra</li>
                    </ul>
                    <h5><i>Computer Science</i></h5>
                    <ul>
                        <li className="course-name"><b>CS 3511:</b> Design and Analysis of Algorithms - Honors <i>(In Progress)</i></li>
                        <li className="course-name"><b>CS 2110:</b> Computer Organization and Programming <i>(In Progress)</i></li>
                        <li className="course-name"><b>CS 2340:</b> Objects and Design</li>
                        <li className="course-name"><b>CS 1332:</b> Data Structures and Algorithms</li>
                        <li className="course-name"><b>CS 1331:</b> Introduction to Object-Oriented Programming</li>
                    </ul>
                </div>
                <h3 className="general-text"><b>Chattahoochee Technical College (Dual Enrollment)</b></h3>
                <div className="general-text">
                    <ul>
                        <li className="course-name"><b>CIST 1401:</b> Computer Networking Fundamentals
                            <ul>
                                <li className="course-name"><a href = "https://drive.google.com/file/d/1GgaYXQdiOm-4lKC7_raQPpUrrSMnaA4v/view?usp=sharing">Research Paper</a> on Cloud Computing.</li>
                            </ul>
                        </li>
                        <li className="course-name"><b>CIST 1601:</b> Information Security Fundamentals</li>
                    </ul>
                </div>
                <div className="padding"></div>
            </div>
        </>
    );
}