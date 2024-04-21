'use client';

import React, { useEffect, useRef, useState } from 'react';

const CursorFollower = () => {
  const squareRef = useRef(null);
  const squareRef2 = useRef(null);
  const [isTouching, setIsTouching] = useState(false);
  const [count, setCount] = useState(0);

  const isOverlapping = (rectA, rectB) => {
    return (
      rectA.left <= rectB.right &&
      rectA.right >= rectB.left &&
      rectA.top <= rectB.bottom &&
      rectA.bottom >= rectB.top
    );
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const square = squareRef.current;
      const box = squareRef2.current;

      if (square && box) {
        const squareRect = square.getBoundingClientRect();
        const boxRect = box.getBoundingClientRect();

        square.style.left = `${e.clientX - 25}px`;
        square.style.top = `${e.clientY - 25}px`;

        box.style.left = `${e.clientX - 25}px`;
        box.style.top = `${e.clientY - 25}px`;

        const isOverlapped = isOverlapping(squareRect, boxRect);

        if (isOverlapped && !isTouching) {
          console.log('Squares are touching!');
          setIsTouching(true);
          const rand = Math.floor(Math.random()*9+1);
          if (count + rand >= 50) {
            alert("You have lost your job! Click to restart");
            window.location.reload();
          }
          setCount(count + rand);
        } else if (!isOverlapped && isTouching) {
          console.log('Squares are not touching anymore!');
          setIsTouching(false);
        }
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isTouching]);

  return (
    <div>
        <h1> Game ends when 50 people lose their job!</h1>
        <h1>Peope who have lost their jobs: {count}</h1>
      <div
        ref={squareRef}
        id="square"
        style={{
          width: '50px',
          height: '50px',
          backgroundColor: 'red',
          position: 'absolute',
          transition: 'left 0.2s ease, top 0.2s ease',
        }}
      ></div>
      <div
        ref={squareRef2}
        id="square2"
        style={{
          width: '50px',
          height: '50px',
          backgroundColor: 'green',
          position: 'absolute',
        }}
      ></div>
    </div>
  );
};

export default CursorFollower;