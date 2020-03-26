import React, { useRef, useEffect } from 'react'
import Badge from 'part:@sanity/components/badges/default'

import useMermaid from '../useMermaid'

export default function Mermaid ({
  graph,
  id,
  options,
  fallback = 'Invalid graph definition'
}) {
  const [valid, html] = useMermaid(graph, id, options)
  const ref = useRef()

  useEffect(() => {
    const content = valid ? html : ''
    if (ref.current) {
      ref.current.innerHTML = content
    }
  }, [valid, html])

  return (
    <>
      <div key="faux" id={id} />
      <div key='preview' ref={ref} />
      {!valid && <Badge color='warning'>{fallback}</Badge>}
    </>
  )
}
