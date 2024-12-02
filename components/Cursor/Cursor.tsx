'use client';
import React, { useEffect, useState } from 'react';

const Cursor: React.FC = ({ isHovering }: any) => {
  const cursor: string[] = ["Circle", "Circle", "Circle", "Circle", "Circle", "Circle"];
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const circles: NodeListOf<Element> = document.querySelectorAll('.Circle');

    circles.forEach((circle: any) => {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = '#000';
      circle.style.position = 'fixed';
      circle.style.zIndex = 1000;
      circle.style.pointerEvents = 'none';
    });

    const handleMouseMove = (e: any) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    function animateCircles() {
      let x = coords.x;
      let y = coords.y;

      circles.forEach((circle: any, index: number) => {
        circle.style.backgroundColor = isHovering ? '#fff' : '#000';
        circle.style.transform = isHovering
          ? `scale(${1.5 * (circles.length - index) / circles.length})`
          : `scale(${(circles.length - index) / circles.length})`;
        circle.style.left = `${x - 12}px`;
        circle.style.top = `${y - 12}px`;

        circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

        circle.x = x;
        circle.y = y;

        const nextCircle: any = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [coords]);

  return (
    <>
     <div className='max-sm:hidden'>
     {cursor.map((cur, index) => (
        <div className={cur} key={index}></div>
      ))}
     </div>
    </>
  );
};

export default Cursor;
