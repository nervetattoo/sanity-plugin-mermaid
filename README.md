# sanity-plugin-mermaid

Add a [Mermaid](https://mermaid-js.github.io/mermaid/) graph input type for [Sanity CMS](http://sanity.io)

![Screenshot](/sanity-plugin-mermaid.png)

```js
sanity install mermaid
```

Then use it in your schema:

```js
export default {
  name: 'graph',
  title: 'Graph',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    }, {
      name: 'Graph',
      type: 'mermaid',
    }
  ]
}
```

In order to render in your frontend you need to manually use the mermaid package.

## TODO

- [ ] Document how to use in frontend
- [ ] Write a helper package providing a serialiser for portable text
