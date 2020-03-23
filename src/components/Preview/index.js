import React, { useState, useEffect } from 'react'
import T from 'prop-types'
import Badge from 'part:@sanity/components/badges/default'

import useMermaid from '../../useMermaid'

function Preview (props) {
  const value = props?.value?.definition
  const [valid, html] = useMermaid(value)

  if (!valid) {
    return <Badge color="warning">Invalid graph definition</Badge>
  }

  if (html) {
    return <div dangerouslySetInnerHTML={{ __html: html }} />
  }

  return 'Empty'
}

export default Preview
