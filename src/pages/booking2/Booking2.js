import React from 'react';

function Booking2() {
  return (
    <div>
      <div class="relative">
        <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-green-400">
          <h2 class="text-4xl">The First Title</h2>
          <p>Scroll Down</p>
        </div>
        <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-indigo-600 text-white">
          <h2 class="text-4xl">The Second Title</h2>
          <p>Scroll Down</p>
        </div>
        <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-purple-600 text-white">
          <h2 class="text-4xl">The Third Title</h2>
          <p>Scroll Down</p>
        </div>
        <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-neutral-800 text-white">
          <h2 class="text-4xl">The Fourth Title</h2>
        </div>
      </div>
    </div>
  );
}

export default Booking2;
