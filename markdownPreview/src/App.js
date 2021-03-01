import React, {useState} from 'react';
import ReactMarkdown from 'react-markdown'

const App = () => {
  const text = '# Heading\n## H2 TAG\n[Link](http://a.com)\n\n`const x = 5` inline code with backticks\n\n'
  const text2 = `> A block quote and a URL: https://reactjs.org.

### A code block
~~~py
# code block
print '3 backticks or'
print 'indent 4 spaces')
~~~

### Lists
* [ ] todo
* [x] done

![Image](https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg)
\n**Bolded text**
`
  const [markdown, setMarkdown] = useState(text + text2)
  return (
    <main>
      <h1 className='title'>Markdown Preview</h1>
      <section className="markdown">
        <textarea id="editor" value={markdown} className="input"
          onChange={(e) => setMarkdown(e.target.value)}>
        </textarea>
        <article id="preview" className="result">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  )
}

export default App;
