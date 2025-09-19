import React from 'react';
import { Button } from './button';

interface gradientbuttonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: React.ReactNode;
}

const gradientbutton = ({ children, onClick }: gradientbuttonProps) => {
  return (
    <div>
      <Button
        className="text-white bg-gradient-to-r from-[#FF518C] to-[#5C3994] cursor-pointer"
        onClick={onClick}
      >
        {children}
      </Button>
    </div>
  );
};

export default gradientbutton;
