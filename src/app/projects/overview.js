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
            <div id="projects-container" ref={ domRef } className={ `fade-in-section ${ isVisible ? 'is-visible' : '' }` }>
                <h1 className="heading general-text"><b>My Projects</b></h1>
                <h4 className="description general-text">Here's what I've worked on so far!</h4>
            </div>
        </>
    );
}