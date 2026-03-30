'use client'

import { useEffect, useRef, useState } from 'react'

interface StatItem {
  value: string | number
  label: string
  suffix?: string
}

interface StatsProps {
  items: StatItem[]
}

function Counter({
  target,
  suffix = '',
}: {
  target: number | string
  suffix?: string
}) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const targetNum = typeof target === 'string' ? parseInt(target) : target

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const duration = 2000
          const steps = 60
          const increment = targetNum / steps
          let current = 0

          const timer = setInterval(() => {
            current += increment
            if (current >= targetNum) {
              setCount(targetNum)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)

          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [targetNum])

  return (
    <div ref={ref}>
      <span className="text-4xl sm:text-5xl font-bold text-accent">
        {count}
        {suffix}
      </span>
    </div>
  )
}

export function Stats({ items }: StatsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
      {items.map((item, index) => (
        <div
          key={index}
          className="text-center p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-colors"
        >
          <Counter target={item.value} suffix={item.suffix} />
          <p className="text-foreground/70 font-medium mt-3">{item.label}</p>
        </div>
      ))}
    </div>
  )
}
