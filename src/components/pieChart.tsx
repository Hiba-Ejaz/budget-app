import React from 'react'
import { useRef } from 'react'
import { select } from 'd3-selection'
export default function pieChart() {
    const svgREF = useRef<SVGSVGElement | null >(null)
  return (
    <div>
<svg ref={svgREF}/>
    </div>
  )
}
