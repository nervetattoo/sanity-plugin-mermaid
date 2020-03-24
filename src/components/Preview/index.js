import React from 'react'
import T from 'prop-types'

const Mermaid = React.lazy(() => import('../Mermaid'))

function Preview ({
  value
}) {
  const key = value?._key || ''
  const id = `sanity-plugin-mermaid-preview-${key}`
  const isSSR = typeof window === 'undefined'

  if (isSSR) {
    return null
  }

  return (
    <React.Suspense fallback={<div />}>
      <Mermaid id={id} graph={value?.definition} />
    </React.Suspense>
  )
}

Preview.propTypes = {
  value: T.shape({
    _key: T.string,
    definitino: T.string
  })
}

export default Preview
