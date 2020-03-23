import React, { useState } from 'react'
import T from 'prop-types'

import PatchEvent, { set, setIfMissing } from 'part:@sanity/form-builder/patch-event';

import FormField from 'part:@sanity/components/formfields/default'
import Fieldset from 'part:@sanity/components/fieldsets/default'
import Textarea from 'part:@sanity/components/textareas/default'

const Mermaid = React.lazy(() => import('../Mermaid'))

function Input ({
  level,
  type,
  ...props
}) {
  const key = props?.value?._key || ''
  const id = `mermaid-${key}`
  const [value, setValue] = useState(props?.value?.definition)
  const isSSR = typeof window === 'undefined'

  const store = definition => {
    props.onChange(PatchEvent.from([
      setIfMissing({ _type: 'mermaid' }),
      set({ ...props.value, definition })
    ]))
  }

  const handleChange = e => {
    setValue(e.target.value)
    store(e.target.value)
  }

  return (
    <Fieldset legend={type.title} description={type.description} level={level}>
      <FormField level={level}>
        <Textarea onChange={handleChange} value={value} />
      </FormField>
      {!isSSR && (
        <React.Suspense fallback={<div />}>
          <FormField level={level} label="Preview">
            <Mermaid graph={value} id={id} />
          </FormField>
        </React.Suspense>
      )}
    </Fieldset>
  )
}

Input.propTypes = {
  level: T.number,
  type: T.shape({
    title: T.string,
    description: T.string
  })
}

export default Input
