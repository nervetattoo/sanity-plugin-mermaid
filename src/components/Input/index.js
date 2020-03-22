import React, { useState, useEffect } from 'react'
import T from 'prop-types'
import mermaid from 'mermaid'

import PatchEvent, { set, unset, setIfMissing } from 'part:@sanity/form-builder/patch-event';

import FormField from 'part:@sanity/components/formfields/default'
import Fieldset from 'part:@sanity/components/fieldsets/default'
import Textarea from 'part:@sanity/components/textareas/default'
import Badge from 'part:@sanity/components/badges/default'

mermaid.mermaidAPI.initialize({
  startOnLoad: true
})

function Input ({
  level,
  type,
  ...props
}) {
  const key = props?.value?._key || ''
  const [value, setValue] = useState(props?.value?.definition)
  const [valid, setValid] = useState(false)

  const outputId = `mermaid-${key}`

  const store = definition => {
    props.onChange(PatchEvent.from([
      setIfMissing({ _type: 'mermaid' }),
      set({ ...props.value, definition })
    ]))
  }

  useEffect(() => {
    const output = document.getElementById(outputId)
    output.innerHTML = ''
    if (value !== '') {
      try {
        mermaid.parse(value)

        setValid(true)

        store(value)

        mermaid.mermaidAPI.render('faux', value, result => {
          output.innerHTML = result
        })
      } catch (err) {
        setValid(false)
      }
    } else {
      store(value)
    }
  }, [value])

  const handleChange = e => {
    setValue(e.target.value)
  }

  return (
    <Fieldset legend={type.title} description={type.description} level={level}>
      <FormField level={level}>
        <Textarea
          onChange={handleChange}
          value={value}
        />
      </FormField>
      <FormField level={level} label='Preview'>
        <div id={outputId} />
        {!valid &&
          <Badge color='warning'>Invalid graph definition</Badge>
        }
      </FormField>
    </Fieldset>
  )
}

export default Input
