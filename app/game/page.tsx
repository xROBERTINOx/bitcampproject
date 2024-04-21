'use client';
import React, { useEffect, useRef, useState } from 'react';

const CursorFollower = () => {
    const squareRef = useRef(null);
    const squareRef2 = useRef(null);
    const [isRedSquareVisible, setIsRedSquareVisible] = useState(false);

    const handleIntersection = (entries) => {
        entries.forEach((entry) => {
            const isVisible = entry.isIntersecting;
            setIsRedSquareVisible(isVisible);

            if (isVisible) {
                alert('Game over!');
            }
        });
      };

      useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
          root: null, // Use the viewport as the root element
          rootMargin: '0px', // No margin
          threshold: 0.1, // Report when 10% of the element is visible
        });
    
        if (squareRef.current) {
          observer.observe(squareRef.current);
        }
    
        return () => {
          if (squareRef.current) {
            observer.unobserve(squareRef.current);
          }
        };
      }, []);

    document.addEventListener("mousemove", function(event) {
        var box = document.getElementById("square2");
        box.style.left = event.clientX - 25 + "px";
        box.style.top = event.clientY - 25 + "px";
});


    useEffect(() => {
        const handleMouseMove = (e) => {
            const square = squareRef.current;
            if (square) {
                square.style.left = `${e.clientX - 25}px`;
                square.style.top = `${e.clientY - 25}px`;
            }
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div>
            <div ref={squareRef} id="square" style={{ width: '50px', height: '50px', backgroundColor: 'red', position: 'absolute', transition: 'left 0.4s ease, top 0.4s ease' }}></div>
            <div ref={squareRef2} id="square2" style={{ width: '50px', height: '50px', backgroundColor: 'green', position: 'absolute'}}></div>
        </div>
    );
};

export default CursorFollower;