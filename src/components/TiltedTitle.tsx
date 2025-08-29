import React from 'react';

interface TiltedTextProps {
  children: React.ReactNode;
  className?: string;
}

const TiltedText: React.FC<TiltedTextProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`
        inline-block 
        bg-[#44ad95] 
        text-black 
        font-bold 
        py-2 
        px-4 
        transform
        -rotate-6 
        shadow-[6px_6px_0_black]
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default TiltedText;
