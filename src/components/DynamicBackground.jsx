'use client'
import React, { useEffect, useMemo, useRef, useState } from 'react'

// Utility to create a simple SVG data URL similar to Trianglify output
// We generate a linear-gradient style pattern by drawing colored rectangles
function generatePattern(width, height) {
const palette = [
  ['#cfe8ff', '#a7d3f5', '#b5f5ec'], // light sky blue, soft aqua, mint
  ['#a7d3f5', '#b5f5ec', '#d9e8fc'], // gentle blue blend
  ['#b5f5ec', '#cfe8ff', '#e0f2ff'], // pale teal → soft blue → almost white
]
  const colors = palette[Math.floor(Math.random() * palette.length)]
  const cols = 6
  const rows = 6
  const rectW = Math.ceil(width / cols)
  const rectH = Math.ceil(height / rows)

  let svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}'>`
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const c = colors[(x + y) % colors.length]
      svg += `<rect x='${x * rectW}' y='${y * rectH}' width='${rectW}' height='${rectH}' fill='${c}' opacity='0.5'/>`
    }
  }
  svg += '</svg>'
  const encoded = typeof window === 'undefined' ? '' : window.btoa(unescape(encodeURIComponent(svg)))
  return `url("data:image/svg+xml;base64,${encoded}")`
}

const DynamicBackground = () => {
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef(null)
  const [size, setSize] = useState({ w: 1920, h: 1080 })
  const [tick, setTick] = useState(0)

  // Recompute size on mount and resize
  useEffect(() => {
    setMounted(true)
    const update = () => {
      setSize({ w: window.innerWidth, h: window.innerHeight })
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  // Crossfade timer (every 5s like the original)
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 5000)
    return () => clearInterval(id)
  }, [])

  // Regenerate background images when tick or size changes
  const bg1 = useMemo(() => generatePattern(size.w, size.h), [size, tick])
  const bg2 = useMemo(() => generatePattern(size.w, size.h), [size, tick + 1])

  // Alternate which layer is visible based on tick parity
  const showFirst = tick % 2 === 0

  if (!mounted) return null

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden">
      {/* Layer 1 */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ease-in-out`}
        style={{ backgroundImage: bg1, backgroundSize: 'cover', backgroundPosition: 'center', opacity: showFirst ? 0.7 : 0 }}
        aria-hidden
      />

      {/* Layer 2 */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ease-in-out`}
        style={{ backgroundImage: bg2, backgroundSize: 'cover', backgroundPosition: 'center', opacity: showFirst ? 0 : 0.7 }}
        aria-hidden
      />

      {/* Subtle white vignette for readability */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.85) 55%, rgba(255,255,255,1) 100%)'
      }} />
    </div>
  )
}

export default DynamicBackground


