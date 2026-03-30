'use client'

import { ReactNode } from 'react'

interface CardFeatureProps {
  icon?: ReactNode
  title: string
  description: string
  badge?: string
}

export function CardFeature({
  icon,
  title,
  description,
  badge,
}: CardFeatureProps) {
  return (
    <div className="group relative p-6 bg-card border border-border rounded-xl hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
      {/* Badge */}
      {badge && (
        <div className="mb-3">
          <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
            {badge}
          </span>
        </div>
      )}

      {/* Icon */}
      {icon && (
        <div className="mb-4 inline-block p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
          <div className="text-accent">{icon}</div>
        </div>
      )}

      {/* Content */}
      <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-foreground/70 leading-relaxed">{description}</p>

      {/* Hover Line */}
      <div className="absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r from-accent via-blue-400 to-accent opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
    </div>
  )
}
