"use client"

import { ReactNode } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Network, Book, Zap, Cpu, FileText, Code, Layers, ArrowLeft, Lock, Shield, Server, Hash, Database, Link as LinkIcon } from "lucide-react"

// RGB++ Logo SVG Component
const RgbppIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_430_320)">
      <g style={{ mixBlendMode: 'screen' as const }}>
        <path fillRule="evenodd" clipRule="evenodd" d="M37.6026 7.13041C38.3735 10.0075 36.6661 12.9648 33.789 13.7357L2.53245 22.1109C-0.344637 22.8818 -3.30193 21.1744 -4.07284 18.2973C-4.84375 15.4202 -3.13636 12.4629 -0.259271 11.692L30.9973 3.31685C33.8744 2.54593 36.8317 4.25332 37.6026 7.13041Z" fill="url(#paint0_linear_430_320)" />
      </g>
      <g style={{ mixBlendMode: 'screen' as const }}>
        <path fillRule="evenodd" clipRule="evenodd" d="M5.7126 35.2364C3.60642 33.1302 3.60642 29.7155 5.7126 27.6093L28.594 4.72788C30.7002 2.62171 34.115 2.6217 36.2211 4.72788C38.3273 6.83405 38.3273 10.2488 36.2211 12.355L13.3397 35.2364C11.2336 37.3426 7.81878 37.3426 5.7126 35.2364Z" fill="url(#paint1_linear_430_320)" />
      </g>
      <g style={{ mixBlendMode: 'screen' as const }}>
        <path fillRule="evenodd" clipRule="evenodd" d="M22.6218 44.9925C19.7447 44.2216 18.0373 41.2643 18.8082 38.3873L27.1834 7.13068C27.9543 4.25359 30.9116 2.5462 33.7887 3.31711C36.6658 4.08802 38.3732 7.04531 37.6023 9.9224L29.2271 41.179C28.4562 44.0561 25.4989 45.7635 22.6218 44.9925Z" fill="url(#paint2_linear_430_320)" />
      </g>
    </g>
    <defs>
      <linearGradient id="paint0_linear_430_320" x1="16.7749" y1="7.86523" x2="16.7749" y2="17.7761" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F3674F" />
        <stop offset="1" stopColor="#F3674F" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="paint1_linear_430_320" x1="20.9668" y1="8.54199" x2="20.9668" y2="31.4235" gradientUnits="userSpaceOnUse">
        <stop stopColor="#38E539" />
        <stop offset="1" stopColor="#38E539" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="paint2_linear_430_320" x1="28.205" y1="7.86523" x2="28.205" y2="39.3594" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0166FF" />
        <stop offset="1" stopColor="#0166FF" stopOpacity="0" />
      </linearGradient>
      <clipPath id="clip0_430_320">
        <rect width="40" height="40" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

interface DocLayoutProps {
  children: ReactNode
  title: string
  description?: string
}

const navigationItems = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/introduction", icon: Book },
      { title: "Resources", href: "/source-code", icon: Code },
    ]
  },
  {
    title: "Core Concepts",
    items: [
      { title: "Single-Use Seal", href: "/single-use-seal", icon: Lock },
      { title: "State Validation", href: "/state-validation", icon: Shield },
      { title: "Isomorphic Binding", href: "/glossary/isomorphic-binding", icon: LinkIcon },
    ]
  },
  {
    title: "Core Components",
    items: [
      { title: "RGB++ Scripts", href: "/components", icon: Layers },
      { title: "SPV Service", href: "/spv-service", icon: Network },
      { title: "RGB++ SDK", href: "/rgbpp-sdk", icon: Code },
      { title: "btc-assets-api", href: "/btc-assets-api", icon: Server },
    ]
  },
  {
    title: "Hands-on Examples",
    items: [
      { title: "UDT", href: "/quickstart", icon: Zap },
    ]
  },
  {
    title: "Glossary",
    items: [
      { title: "UTXO", href: "/glossary/utxo", icon: Hash },
      { title: "CKB Cell", href: "/glossary/ckb-cell", icon: Database },
      { title: "CKB Script", href: "/glossary/ckb-script", icon: Layers },
      { title: "xUDT Script", href: "/glossary/xudt-script", icon: Shield },
      { title: "SPV", href: "/glossary/spv", icon: Network },
      { title: "MMR", href: "/glossary/mmr", icon: Hash },
      { title: "Merkle Root", href: "/glossary/merkle-root", icon: Hash },
      { title: "OP_RETURN", href: "/glossary/op-return", icon: FileText },
    ]
  }
]

export function DocLayout({ children, title, description }: DocLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      {/* Header */}
      <header className="border-b border-gray-800/50 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="p-1 rounded-lg bg-gray-800/50 group-hover:bg-gray-700/50 transition-colors duration-200">
                <RgbppIcon className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">RGB++</h1>
                <p className="text-xs text-gray-400">Documentation</p>
              </div>
            </Link>
            <Link
              href="/"
              className="text-gray-300 hover:text-orange-400 transition-all duration-300 hover:scale-105 group"
            >
              <ArrowLeft className="h-4 w-4 inline mr-1 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 h-screen overflow-y-auto bg-gray-900/80 backdrop-blur-sm border-r border-gray-800/30 sticky top-[73px]">
          <nav className="p-6">
            {navigationItems.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-8">
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-3">
                  {section.title}
                </h3>
                <ul className="space-y-1">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors duration-200",
                          "text-gray-300 hover:text-white hover:bg-gray-800/50"
                        )}
                      >
                        <item.icon className="h-4 w-4 text-gray-500" />
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-h-screen">
          <div className="container mx-auto px-8 py-8">
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
              <Link href="/" className="hover:text-orange-400 transition-colors duration-300">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">{title}</span>
            </div>

            {/* Page Header */}
            <div className="mb-12">
              <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
              {description && (
                <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
                  {description}
                </p>
              )}
            </div>

            {/* Content */}
            <div className="prose prose-invert max-w-none">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
} 