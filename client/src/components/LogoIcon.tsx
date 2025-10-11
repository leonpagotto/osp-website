/**
 * OSP Logo Icon Component
 * The fountain pen nib icon representing OSP's brand
 * Can be customized with different colors
 */

import { cn } from '@/lib/utils';

interface LogoIconProps {
  className?: string;
  color?: 'white' | 'blue' | 'current';
  size?: number;
}

export function LogoIcon({ className, color = 'current', size = 40 }: LogoIconProps) {
  const colorClass = {
    white: 'text-white',
    blue: 'text-blue-500',
    current: 'text-current',
  }[color];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(colorClass, className)}
      aria-label="OSP Logo"
    >
      {/* Outer circle background */}
      <circle cx="100" cy="100" r="100" fill="currentColor" fillOpacity="0.1" />
      
      {/* Fountain pen nib */}
      <g fill="currentColor">
        {/* Crown/decorative top */}
        <path d="M 85 40 L 80 50 L 88 50 L 85 40 Z" />
        <path d="M 100 35 L 95 50 L 105 50 L 100 35 Z" />
        <path d="M 115 40 L 120 50 L 112 50 L 115 40 Z" />
        
        {/* Crown base */}
        <rect x="75" y="50" width="50" height="5" />
        
        {/* Pen body (trapezoid) */}
        <path d="M 80 55 L 75 85 L 125 85 L 120 55 Z" />
        
        {/* Ink hole/circle */}
        <circle cx="100" cy="100" r="6" />
        
        {/* Nib point */}
        <path d="M 75 85 L 100 160 L 125 85 Z" />
        
        {/* Center split line */}
        <line x1="100" y1="85" x2="100" y2="160" stroke="white" strokeWidth="2" opacity="0.3" />
      </g>
    </svg>
  );
}

/**
 * Full OSP Logo with Text
 */
interface LogoWithTextProps {
  className?: string;
  iconColor?: 'white' | 'blue' | 'current';
  textColor?: string;
  iconSize?: number;
  showIcon?: boolean;
}

export function LogoWithText({
  className,
  iconColor = 'blue',
  textColor = 'text-white',
  iconSize = 40,
  showIcon = true,
}: LogoWithTextProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      {showIcon && <LogoIcon color={iconColor} size={iconSize} />}
      <span className={cn('text-2xl font-bold tracking-tight', textColor)}>
        OSP
      </span>
    </div>
  );
}
