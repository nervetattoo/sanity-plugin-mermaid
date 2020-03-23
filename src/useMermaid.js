import { useState, useEffect } from 'react'
import mermaid from 'mermaid'

mermaid.mermaidAPI.initialize({
  startOnLoad: true,
})

export default function useMermaid(graph = '', id = 'mermaid') {
  const [svg, setSvg] = useState('')

  useEffect(() => {
    try {
      mermaid.parse(graph)
      mermaid.mermaidAPI.render(id, graph, (result) => {
        setSvg(result)
      })
    } catch (err) {
      setSvg(false)
    }
  }, [graph, setSvg])

  return [svg !== false, svg || '']
}
