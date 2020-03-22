import React, { useEffect } from 'react'
import T from 'prop-types'
import mermaid from 'mermaid'

function Preview (props) {
  const value = props?.value?.definition
  const key = props?.value?._key || ''
  const outputId = `mermaid-${key}`

  useEffect(() => {
    if (value) {
      const output = document.getElementById(outputId)
      output.innerHTML = ''

      mermaid.mermaidAPI.render('faux', value, result => {
        output.innerHTML = result
      })
    }
  }, [value])

  if (value) {

    return (
      <div id={outputId} />
    )
  }

  return 'Empty'
}

export default Preview
