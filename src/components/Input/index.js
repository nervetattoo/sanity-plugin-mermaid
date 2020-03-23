import React, { useState, useEffect, useRef } from 'react'
import T from 'prop-types'

import PatchEvent, { set, unset, setIfMissing } from 'part:@sanity/form-builder/patch-event';

import FormField from 'part:@sanity/components/formfields/default'
import Fieldset from 'part:@sanity/components/fieldsets/default'
import Textarea from 'part:@sanity/components/textareas/default'
import Badge from 'part:@sanity/components/badges/default'

import useMermaid from '../../useMermaid'

function Input ({
  level,
  type,
  ...props
}) {
  const key = props?.value?._key || ''
  const id = `mermaid-${key}`
  const [value, setValue] = useState(props?.value?.definition)
  const [valid, html] = useMermaid(value, id)
  const ref = useRef()

  const store = definition => {
    props.onChange(PatchEvent.from([
      setIfMissing({ _type: 'mermaid' }),
      set({ ...props.value, definition })
    ]))
  }

  useEffect(() => {
    const content = valid ? html : ''
    ref.current.innerHTML = content
    if (valid || value === '') {
      store(value)
    }
  }, [valid, value, html])

  const handleChange = e => {
    setValue(e.target.value)
  }

  return (
    <Fieldset legend={type.title} description={type.description} level={level}>
      <FormField level={level}>
        <Textarea onChange={handleChange} value={value} />
      </FormField>
      <FormField level={level} label="Preview">
        <div id={id} />
        <div key="preview" ref={ref} />
        {!valid && <Badge color="warning">Invalid graph definition</Badge>}
      </FormField>
    </Fieldset>
  )
}

export default Input
