import { useState, useEffect } from 'react'
import mermaid from 'mermaid'

export default function useMermaid(graph = '', id = 'mermaid', options = {}) {
  const [svg, setSvg] = useState('')

  useEffect(() => {
    mermaid.mermaidAPI.initialize({
      startOnLoad: true,
      theme: options.theme || 'neutral',
    })
  }, [])

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
