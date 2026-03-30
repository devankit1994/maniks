'use client'

import { ReactNode } from 'react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

interface ScrollSectionProps {
  children: ReactNode
  className?: string
  animation?: 'fade' | 'slide-up' | 'slide-left' | 'scale'
}

export function ScrollSection({
  children,
  className = '',
  animation = 'fade',
}: ScrollSectionProps) {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${className}`}
      style={{
        transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
    >
      {children}
    </div>
  )
}
