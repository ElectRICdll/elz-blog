import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
import { Author } from '@blog/user'

export interface Post {
  id: number
  title: string
  author: Author
  preview?: string
  content: string
  created_at: string
}

export namespace Post {
  export type Outline = OutlineNode[]

  export interface OutlineNode {
    title: string
    children: OutlineNode[]
    parent?: OutlineNode
  }

  export function rendContent(md: string) {
    return mdit.render(md)
  }

  export function rendHeadings(md: string): Outline {
    md = md.replace(/\r\n/g, '\n').replace(/\r/g, '\n')
    const lines = md.split('\n')
    const outline: Outline = []
    const stack: OutlineNode[] = []
    let currentNode: OutlineNode | null = null

    for (const line of lines) {
      const match = line.match(/^#+\s+(.*)$/)
      if (match) {
        const title = match[1]
        const level = match[0].match(/#/g)?.length || 0

        const newNode: OutlineNode = { title, children: [] }

        if (level === 1) {
          outline.push(newNode)
          currentNode = newNode
          stack.length = 0
          stack.push(newNode)
        } else {
          while (stack.length > level - 1) {
            stack.pop()
          }

          const parent = stack[stack.length - 1]
          if (parent) {
            parent.children.push(newNode)
            newNode.parent = parent
          }

          stack.push(newNode)
          currentNode = newNode
        }
      }
    }

    function removeParentRefs(node: OutlineNode) {
      node.children.forEach((child) => removeParentRefs(child))
      delete node.parent
    }

    outline.forEach((node) => removeParentRefs(node))

    return outline
  }
}

const mdit = new MarkdownIt({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return (
          '<pre class="hljs" ><code>' +
          hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
          '</code></pre>'
        )
      } catch (__) {}
    }

    return (
      '<pre class="hljs"><code>' + mdit.utils.escapeHtml(str) + '</code></pre>'
    )
  },
})
