"use client";
import React, {useState, useRef, useEffect} from 'react';
import './app.css';

export default function Project_Overview() {
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
        <div ref={ domRef } className={ `fade-in-section ${ isVisible ? 'is-visible' : '' }` }>
        </div>
    </>
  )
}