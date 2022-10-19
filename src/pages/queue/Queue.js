import React from 'react';
import Progress from './components/Progress';

function Queue() {
  return (
    <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
      <div className="flex flex-col flex-wrap sm:flex-row ">
        <div className="grid-cols-1 md:gap-4 md:grid-cols-2 lg:grid-cols-3 w-full grid  auto-cols-auto">
          <Progress />
        </div>
      </div>
    </div>
  );
}

export default Queue;
