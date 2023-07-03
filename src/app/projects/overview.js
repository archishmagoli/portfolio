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
                <h1 className="heading general-text"><b>My Projects</b></h1>
                <h4 className="description general-text">A compilation of my personal and collaborative projects.</h4>
                <hr />

                <h5 className="general-text"><b>QuakeCaster: Earthquake Simulation Setup</b></h5>
                <ul>
                    <li className="course-name">This project is part of an overarching initiative to improve the technical standards and <b>automation capabilities</b> within laboratory activities 
                    for Georgia Tech's Earth Sciences department.</li>
                    <li>I've collaborated with 2 professors within the Earth Science department, Dr. Meg Grantham and Dr. Erin Griffith, to begin this initative with QuakeCaster.</li>
                    <li className="course-name"><b>QuakeCaster</b> is a fully automated earthquake simulation lab setup, designed to re-enact the strike-slip faults associated with tremors from the Earth.</li>
                    <li className="course-name"><a href="https://docs.google.com/presentation/d/1PdBOjfu7RH4z4XNIv7g74CdangAlTY7koaaqGK-brsM/edit?usp=sharing">
                    Here is an in-class presentation</a> that includes the ideation and first MVP of the project.</li>
                    <li className="course-name">This project is ongoing - check out the GitHub repository <a href="https://github.com/archishmagoli/QuakeCaster">here!</a></li>
                </ul>

                <h5 className="general-text"><b>Reinforcement Learning: Isolation</b></h5>
                <div className="general-text">
                    <ul>
                        <li className="course-name">In this project, I'm using <b>Reinforcement Learning</b> agents to establish a baseline player ranking system centered around the game "Isolation."</li>
                        <li className="course-name">With this first project, I hope to expand the algorithm behind this ranking system to more sophisticated games like chess.</li>
                        <li className="course-name">This project is ongoing - check out the GitHub repository <a href="https://github.com/archishmagoli/Isolation_RL">here!</a></li>
                    </ul>
                </div>
                <div className="padding"></div>
            </div>
        </>
    );
}