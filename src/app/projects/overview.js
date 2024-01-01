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

                <h5 className="general-text"><b>QuakeCaster: Automated Earthquake Lab Simulation</b></h5>
                <ul>
                    <li className="course-name">This project was part of an overarching initiative to improve the technical standards and <b>automation capabilities</b> within laboratory activities 
                    for Georgia Tech&#39;s Earth Sciences department.</li>
                    <li>I&#39;ve collaborated with 2 professors within the Earth Sciences department, Dr. Meg Grantham and Dr. Erin Griffith, to begin this initative with QuakeCaster.</li>
                    <li className="course-name"><b>QuakeCaster</b> is a fully automated earthquake simulation lab setup, designed to re-enact the strike-slip faults associated with tremors from the Earth.</li>
                    <li className="course-name">Check out the project's GitHub repository <a href="https://github.com/archishmagoli/QuakeCaster">here!</a></li>
                </ul>

                <h5 className="general-text"><b>SpaceX: Falcon 9 Launch and Landing Predictions</b></h5>
                <div className="general-text">
                    <ul>
                        <li className="course-name">In this project, I predicted the launch and landing probabilities of the first stage of the SpaceX Falcon 9 rocket through machine learning, data visualization, and analytics conducted in Python.</li>
                        <li className="course-name">I extracted datasets through an open-source <b>SpaceX REST API</b> and used web scraping with Python's <b>BeautifulSoup library</b> to gather additional historical data on SpaceX launch and landing proceedings.</li>
                        <li className="course-name">I also conducted exploratory data analysis through <b>SQL, Matplotlib, and Pandas,</b> extracting relationships between key performance variables like <b>payload mass, orbit type, launch site, and mission status</b>.</li>
                        <li>I created visualizations using <b>Folium</b> and generated an interactive analytical dashboard of results with Python&#39;s <b>Plotly and Dash</b> frameworks.</li>
                        <li>I trained three different machine learning models <b>(Decision Tree Classifier, K-Nearest Neighbors, and SVM)</b> and analyzed which would be the most accurate at predicting whether a given launch would land the first stage successfully.</li>
                        <li> And lastly, I generated a <a href="https://drive.google.com/file/d/1mKddFqZFriQnDtG0Hwblvcj-6O_pqPzG/view">sample stakeholder report</a> with important conclusions generated from overall data analytics and visualizations.</li>
                        <li className="course-name">Check out the project GitHub repository <a href="https://github.com/archishmagoli/Falcon-9LaunchPrediction">here!</a></li>
                    </ul>
                </div>

                <h5 className="general-text"><b>AllerGEN</b></h5>
                <div className="general-text">
                    <ul>
                        <li className="course-name">In this project, I created a web application using <b>React</b> and <b>Flask</b> that analyzes uploaded nutritional labels to determine a user's allergies and minimizes allergen-related risks.</li>
                        <li className="course-name">With <b>Python</b> and the <b>Tesseract OCR API</b>, I successfully extracted data from nutritional label images, achieving a 72% accuracy rate.</li>
                        <li className="course-name">I developed a <b>REST API</b> that notifies users about all nutritional ingredients to which they might be allergic.</li>
                        <li className="course-name">Check out the project GitHub repository <a href="https://github.com/archishmagoli/allergen">here!</a></li>
                    </ul>
                </div>

                <h5 className="general-text"><b>Tic-Tac-Toe with AI</b></h5>
                <div className="general-text">
                    <ul>
                        <li className="course-name">In this project, I designed a Tic-Tac-Toe game offering three difficulty levels, enabling players to challenge an <b>AI opponent</b> through the command line interface.</li>
                        <li className="course-name">For the most challenging level, I implemented the <b>Minimax Algorithm</b> with <b>alpha-beta pruning</b> for optimal performance.</li>
                        <li className="course-name">Check out the project GitHub repository <a href="https://github.com/archishmagoli/TicTacToe_AI">here!</a></li>
                    </ul>
                </div>

                <div className="padding"></div>
            </div>
        </>
    );
}