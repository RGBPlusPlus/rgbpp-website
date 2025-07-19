"use client"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { useState } from 'react'
import { Copy, CheckCircle } from 'lucide-react'

interface CodeBlockProps {
  children: string
  language?: string
  className?: string
  showLineNumbers?: boolean
}

export default function CodeBlock({
  children,
  language = 'typescript',
  className = '',
  showLineNumbers = false
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      // Try modern Clipboard API first
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(children)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
        return
      }

      // Fallback for older browsers or non-secure contexts
      const textArea = document.createElement('textarea')
      textArea.value = children
      textArea.style.position = 'fixed'
      textArea.style.left = '-999999px'
      textArea.style.top = '-999999px'
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()

      const successful = document.execCommand('copy')
      document.body.removeChild(textArea)

      if (successful) {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } else {
        throw new Error('Copy command failed')
      }
    } catch (err) {
      console.error('Failed to copy code:', err)
      // Optionally show user-friendly error message
      alert('Copy failed. Please copy manually.')
    }
  }

  return (
    <div className={`relative group ${className}`}>
      {/* Copy Button */}
      <button
        onClick={handleCopy}
        className="absolute top-5 right-6 z-10 p-2 rounded-lg bg-gray-800/80 hover:bg-gray-700/80 text-gray-300 hover:text-white transition-all duration-200 opacity-0 group-hover:opacity-100 backdrop-blur-sm border border-gray-600/30"
        title="Copy code"
      >
        {copied ? (
          <CheckCircle className="w-4 h-4 text-green-400" />
        ) : (
          <Copy className="w-4 h-4" />
        )}
      </button>

      {/* Syntax Highlighter */}
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        showLineNumbers={showLineNumbers}
        customStyle={{
          margin: 0,
          borderRadius: '0.75rem',
          fontSize: '0.875rem',
          lineHeight: '1.2',

        }}

        wrapLines={true}

      >
        {children}
      </SyntaxHighlighter>
    </div>
  )
} 