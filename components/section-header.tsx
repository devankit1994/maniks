'use client'

interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
  centered?: boolean
}

export function SectionHeader({
  label,
  title,
  description,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-12 md:mb-16`}>
      {label && (
        <div className="inline-block mb-4">
          <span className="px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold">
            {label}
          </span>
        </div>
      )}
      <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
          {description}
        </p>
      )}
    </div>
  )
}
