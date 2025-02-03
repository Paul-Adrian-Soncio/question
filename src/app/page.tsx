'use client'; // Ensure it's a Client Component

export default function Home() {
  // Function to move the 'No' button away from the cursor
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const noButton = document.getElementById('no-button');
    if (noButton) {
      const x = e.clientX;
      const y = e.clientY;

      // Get the button's current position
      const rect = noButton.getBoundingClientRect();
      const buttonX = rect.left + rect.width / 2;
      const buttonY = rect.top + rect.height / 2;

      // Calculate the direction away from the cursor
      const dx = x - buttonX;
      const dy = y - buttonY;

      // Calculate the distance from the cursor
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Increase the range of movement for the button to make it run away faster and farther
      const moveDistance = Math.min(1500, distance * 3); // Increased movement range even more

      // Calculate the movement based on the direction (dx, dy)
      const moveX = (dx / distance) * moveDistance;
      const moveY = (dy / distance) * moveDistance;

      // Apply the transform to move the button away from the cursor
      noButton.style.transform = `translate(${-moveX}px, ${-moveY}px)`;

      // Add a smooth transition
      noButton.style.transition = 'transform 0.1s ease-out';

      // Make it impossible to hover over by disabling pointer events
      noButton.style.pointerEvents = 'none'; // Disable interaction

      // Re-enable pointer events after the button moves away (to avoid continuous hover)
      setTimeout(() => {
        noButton.style.pointerEvents = 'auto'; // Re-enable pointer events
      }, 100); // This delay ensures that the button is "escaping" first
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
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
