import Input from '../components/Input'
import Preview from '../components/Preview'

export default {
  title: 'Mermaid graph',
  name: 'mermaid',
  type: 'object',
  fields: [
    {
      type: 'text',
      name: 'definition',
      title: 'Graph definition'
    }
  ],
  inputComponent: Input,
  preview: {
    select: {
      definition: 'definition',
    },
    component: Preview
  }
}
