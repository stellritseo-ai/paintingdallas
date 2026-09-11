import React from 'react';

interface LogoProps {
  variant?: 'horizontal' | 'icon';
  theme?: 'light' | 'dark';
  className?: string;
  compact?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'horizontal',
  theme = 'light',
  className = '',
  compact = false,
}) => {
  return (
    <div className={`inline-flex items-center select-none shrink-0 group ${className}`}>
      <img
        src="/images/logo.webp"
        alt="Painting Dallas Commercial Contractors Logo"
        width={320}
        height={80}
        className={`w-auto object-contain transition-all duration-300 group-hover:scale-[1.02] ${
          compact
            ? 'h-9 sm:h-10 md:h-11'
            : 'h-11 sm:h-12 md:h-13'
        } ${theme === 'dark' ? 'drop-shadow-[0_2px_10px_rgba(255,255,255,0.35)]' : 'drop-shadow-xs'}`}
      />
    </div>
  );
};
