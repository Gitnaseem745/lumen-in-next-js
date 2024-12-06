'use client';
import React, { useEffect, useState } from 'react';

interface CursorProps {
  isHovering: boolean;
}

const Cursor: React.FC<CursorProps> = ({ isHovering }) => {
  const cursor: string[] = ["Circle", "Circle", "Circle", "Circle", "Circle", "Circle"];
  const [coords, setCoords] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const circles = document.querySelectorAll<HTMLDivElement>('.Circle');

    circles.forEach((circle) => {
      circle.style.backgroundColor = '#000';
      circle.style.position = 'fixed';
      circle.style.zIndex = '1000';
      circle.style.pointerEvents = 'none';
    });

    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    function animateCircles() {
      let x = coords.x;
      let y = coords.y;

      circles.forEach((circle, index) => {
        circle.style.backgroundColor = isHovering ? '#fff' : '#000';
        circle.style.transform = isHovering
          ? `scale(${1.5 * (circles.length - index) / circles.length})`
          : `scale(${(circles.length - index) / circles.length})`;
        circle.style.left = `${x - 12}px`;
        circle.style.top = `${y - 12}px`;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.getBoundingClientRect().left - x) * 0.3;
        y += (nextCircle.getBoundingClientRect().top - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [coords, isHovering]);

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
