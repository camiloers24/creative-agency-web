// src/components/FrameLogo.tsx
import React from 'react';

interface FrameLogoProps {
  className?: string;
}

export default function FrameLogo({ className = '' }: FrameLogoProps) {
  return (
    <div className={`flex items-end font-black italic tracking-tighter uppercase leading-none ${className}`}>
      
      {/* 1. La 'F' Roja Estilizada (Simulación precisa) */}
      <div className="relative flex flex-col items-center mr-">
        {/* Línea horizontal roja superior (flotante) */}
        <div className="w-[100%] h- bg-[#FF0000] mb-"></div>
        {/* Letra F roja */}
        <span className="text-[#FF0000]">F</span>
      </div>
      
      {/* 2. El resto de la palabra en blanco */}
      <span className="text-white">RAME</span>
    </div>
  );
}