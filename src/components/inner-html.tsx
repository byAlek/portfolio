import { marked } from 'marked'

/**
 * @returns The inline parsed markdown content as HTML
 */
export const InnerHTML = ({ content }: { content?: string }) => {
  const html = content ? marked.parseInline(content, { async: false }) : ''
  return <span dangerouslySetInnerHTML={{ __html: html }} />
}
