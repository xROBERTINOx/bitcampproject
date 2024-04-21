'use client';

import React, { useEffect, useRef, useState } from 'react';

const CursorFollower = () => {
  const squareRef = useRef(null);
  const squareRef2 = useRef(null);
  const [isTouching, setIsTouching] = useState(false);
  const [count, setCount] = useState(0);
  const [wantsToPlay, setWantsToPlay] = useState(false);
  const [lost, setLost] = useState(false);
  const [needToShowStartButton, setNeedToShowStartButton] = useState(true);
 
const [seconds, setSeconds] = useState(0);

useEffect(() => {
    const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
        clearInterval(interval);
    };
}, []);

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
            setLost(true);
            setNeedToShowStartButton(true);
            setWantsToPlay(false);
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

  const handleStartButton = () => {
    setNeedToShowStartButton(false);
    setWantsToPlay(true);
  }

return (
    <div className="flex justify-center items-center">
        {lost && (
            <div className="">
                <h1 className=" flex justify-center items-center h-screen text-6xl font-bold mb-8" style={{ fontFamily: 'Futura' }}>
                    You Lost <br></br>
                </h1>
            </div>
        )}
        {needToShowStartButton && (
            <div className="">
                <button onClick={handleStartButton}>Click me to start</button>
            </div>
        )}
        {wantsToPlay && (
            <div>
                <div>
                    <div className="flex justify-center items-center h-screen">
                        <div className="text-center">
                            <h1 className="text-6xl font-bold mb-8" style={{ fontFamily: 'Futura' }}>
                                Don't Get Hit
                            </h1>
                            <p style={{ fontFamily: 'Futura' }} className="text-center text-2xl">
                                Game ends when 50 houses are destroyed! {<br></br>}
                            </p>
                            <p style={{ fontFamily: 'Futura' }} className="text-center text-1xl">
                                Seconds played: {seconds} {<br></br>}
                                Houses destroyed: {count}
                            </p>
                        </div>
                    </div>
                </div>
                <h1>Seconds played: {seconds}</h1>
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
        )}
    </div>
);
};

export default CursorFollower;