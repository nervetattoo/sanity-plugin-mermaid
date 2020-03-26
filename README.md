# sanity-plugin-mermaid

Add a [Mermaid](https://mermaid-js.github.io/mermaid/) graph input type for [Sanity CMS](http://sanity.io)

Read more about [using the plugin in this blog post](https://raymondjulin.com/blog/drawing-diagrams-in-sanity-with-mermaid-js)

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
      type: 'mermaid',
    }
  ]
}
```

In order to render in your frontend you need to manually use the mermaid package.

## TODO

- [ ] Write a helper package providing a serialiser for portable text
- [ ] Link to mermaid docs in editor
- [ ] Syntax highlighted editor
