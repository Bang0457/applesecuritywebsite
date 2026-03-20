import * as React from "react"
import { ScrollVelocity } from "./scroll-velocity"
import { cn } from "./cn"

export type ServiceImageItem = {
  id: string
  title: string
  image: string
  alt: string
}

export interface ServiceScrollStripProps {
  items: ServiceImageItem[]
  title?: string
  velocity?: number[]
  className?: string
  showCaptions?: boolean
}

function repeatToMin(items: ServiceImageItem[], minCount: number): ServiceImageItem[] {
  if (items.length === 0) return []
  const out: ServiceImageItem[] = []
  while (out.length < minCount) out.push(...items)
  return out.slice(0, Math.max(minCount, items.length))
}

export function ServiceScrollStrip({
  items,
  title,
  velocity = [3, -3],
  className,
  showCaptions = true,
}: ServiceScrollStripProps) {
  const rowItems = React.useMemo(() => repeatToMin(items, 10), [items])

  if (!items?.length) return null

  return (
    <section className={cn("w-full", className)} aria-label={title ?? "Service highlights"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title ? (
          <div className="mb-6 flex items-end justify-between gap-4">
            <h3 className="text-lg md:text-xl font-extrabold tracking-wide text-slate-900">{title}</h3>
            <div className="hidden md:block text-xs font-bold tracking-[0.25em] uppercase text-slate-500">
              Scroll to see more
            </div>
          </div>
        ) : null}
      </div>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 py-2">
            {velocity.map((v, rowIndex) => (
              <ScrollVelocity key={rowIndex} velocity={v} clamp movable className="py-1">
                {rowItems.map((it, idx) => (
                  <div
                    key={`${it.id}-${rowIndex}-${idx}`}
                    className={cn(
                      "relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm",
                      "h-[112px] w-[184px] sm:h-[128px] sm:w-[220px] lg:h-[152px] lg:w-[260px]"
                    )}
                  >
                    <img
                      src={it.image}
                      alt={it.alt}
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        const img = e.currentTarget
                        img.onerror = null
                        img.src = "/fallback.jpg"
                      }}
                      className="h-full w-full object-cover object-center"
                    />
                    {showCaptions ? (
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent p-3">
                        <div className="text-xs sm:text-sm font-extrabold text-white tracking-wide drop-shadow">
                          {it.title}
                        </div>
                      </div>
                    ) : null}
                  </div>
                ))}
              </ScrollVelocity>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

