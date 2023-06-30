"use client";
import React, { useState, useEffect, useRef } from "react";

export default function Overview() {
    const [isVisible, setVisible] = useState(false);

    const domRef = useRef();
    current = domRef.current;

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => entry.isIntersecting && setVisible(true));
        });

        observer.observe(current);

        return () => observer.unobserve(current);
    }, []);

    return (
        <>
            <div id="projects-container" ref={ domRef } className={ `fade-in-section ${ isVisible ? 'is-visible' : '' }` }>
                <h1 className="heading general-text"><b>My Projects</b></h1>
                <h4 className="description general-text">Here&#39;s what I&#39;ve worked on so far!</h4>
            </div>
        </>
    );
}