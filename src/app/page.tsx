'use client';
import Image from "next/image";

export default function Home() {
  
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const noButton = document.getElementById('no-button');
    if (noButton) {
      const x = e.clientX;
      const y = e.clientY;

      const rect = noButton.getBoundingClientRect();
      const buttonX = rect.left + rect.width / 2;
      const buttonY = rect.top + rect.height / 2;

      const dx = x - buttonX;
      const dy = y - buttonY;

      const distance = Math.sqrt(dx * dx + dy * dy);

      const moveDistance = Math.min(1500, distance * 3); 

      const moveX = (dx / distance) * moveDistance;
      const moveY = (dy / distance) * moveDistance;

      noButton.style.transform = `translate(${-moveX}px, ${-moveY}px)`;

      noButton.style.transition = 'transform 0.1s ease-out';

      noButton.style.pointerEvents = 'none'; 

      setTimeout(() => {
        noButton.style.pointerEvents = 'auto'; 
      }, 100); 
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <Image
        src="/heart.gif"
        alt="heart"
        width={256} 
        height={256} 
        className="mb-6"
      />
      <h1 className="text-3xl mb-6 font-bold text-black">Will you be my Valentines?</h1>
      <div className="flex gap-4">
        <button className="px-6 py-3 text-white bg-green-500 rounded-lg hover:bg-green-600">
          Yes
        </button>
        <button
          id="no-button"
          className="px-6 py-3 text-white bg-red-500 rounded-lg hover:bg-red-600"
          onMouseMove={handleMouseMove}
        >
          No
        </button>
      </div>
    </div>
  );
}
