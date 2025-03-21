import React from 'react';

function RightImg() {
  return (
    <div className="flex justify-center sm:justify-end">
      <img 
        className="h-auto w-[100px] sm:w-[70px] md:w-[100px] lg:w-[120px] xl:w-[150px] 
                   object-contain transition-all duration-300" 
        src="/trio image.png" 
        alt="trio img" 
      />
    </div>
  );
}

export default RightImg;