"use client"

import { ReactNode, useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Network, Book, Zap, Cpu, FileText, Code, Layers, ArrowLeft, Lock, Shield, Server, Hash, Database, Link as LinkIcon, Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import Header from "./header"
import { DocNavigation } from "./doc-navigation"

interface DocLayoutProps {
  children: ReactNode
  title: string
  description?: string
}

const navigationItems = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs/introduction", icon: Book },
      { title: "Resources", href: "/docs/resources", icon: Code },
    ]
  },
  {
    title: "Core Concepts",
    items: [
      { title: "Single-Use Seal", href: "/docs/single-use-seal", icon: Lock },
      { title: "State Validation", href: "/docs/state-validation", icon: Shield },
      { title: "Isomorphic Binding", href: "/docs/isomorphic-binding", icon: LinkIcon },
    ]
  },
  {
    title: "Core Components",
    items: [
      { title: "RGB++ Scripts", href: "/docs/components", icon: Layers },
      { title: "SPV Service", href: "/docs/spv-service", icon: Network },
      { title: "RGB++ SDK", href: "/docs/rgbpp-sdk", icon: Code },
      { title: "btc-assets-api", href: "/docs/btc-assets-api", icon: Server },
    ]
  },
  {
    title: "Hands-on Examples",
    items: [
      { title: "UDT", href: "/docs/examples/udt", icon: Zap },
    ]
  },
  {
    title: "Glossary",
    items: [
      { title: "UTXO", href: "/docs/glossary/utxo", icon: Hash },
      { title: "CKB Cell", href: "/docs/glossary/ckb-cell", icon: Database },
      { title: "CKB Script", href: "/docs/glossary/ckb-script", icon: Layers },
      { title: "xUDT Script", href: "/docs/glossary/xudt-script", icon: Shield },
      { title: "SPV", href: "/docs/glossary/spv", icon: Network },
      { title: "MMR", href: "/docs/glossary/mmr", icon: Layers },
      { title: "Merkle Root", href: "/docs/glossary/merkle-root", icon: Hash },
      { title: "OP_RETURN", href: "/docs/glossary/op-return", icon: FileText },
    ]
  }
]

export function DocLayout({ children, title, description }: DocLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [expandedSection, setExpandedSection] = useState(-1) // 默认展开第一列
  const pathname = usePathname()

  // 根据当前路径自动展开对应的分组
  useEffect(() => {
    const currentSectionIndex = navigationItems.findIndex(section =>
      section.items.some(item => item.href === pathname)
    )
    if (currentSectionIndex !== -1) {
      setExpandedSection(currentSectionIndex)
    }
  }, [pathname])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      {/* Header */}
      <Header />

      <div className="flex pt-[76px] mt-[-76px]">
        {/* Mobile overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside className={cn(
          " hidden lg:block fixed inset-y-0 left-0 z-50 w-64 h-screen overflow-y-auto bg-gray-900/80 backdrop-blur-sm border-r border-gray-800/30 transition-transform duration-300 ease-in-out",
          "lg:translate-x-0 top-[76px]",
          sidebarOpen ? "-translate-x-0" : "-translate-x-full "
        )}>
          <nav className="p-6">
            {navigationItems.map((section, sectionIndex) => {
              const isExpanded = expandedSection === sectionIndex;
              return (
                <div key={sectionIndex} className="mb-6">
                  <button
                    onClick={() => setExpandedSection(isExpanded ? -1 : sectionIndex)}
                    className="flex items-center justify-between w-full px-3 py-2 text-xs font-semibold text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <span className="uppercase tracking-wider text-gray-400">{section.title}</span>
                    {isExpanded ? (
                      <ChevronDown className="h-3 w-3 text-gray-400 transition-transform duration-200" />
                    ) : (
                      <ChevronRight className="h-3 w-3 text-gray-400 transition-transform duration-200" />
                    )}
                  </button>
                  <div className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  )}>
                    <ul className="space-y-1 pt-2">
                      {section.items.map((item, itemIndex) => {
                        const isActive = pathname === item.href;
                        return (
                          <li key={itemIndex}>
                            <Link
                              href={item.href}
                              onClick={() => setSidebarOpen(false)}
                              className={cn(
                                "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors duration-200",
                                isActive
                                  ? "text-white bg-orange-500/20 border border-orange-500/30"
                                  : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                              )}
                            >
                              <item.icon className={cn(
                                "h-4 w-4",
                                isActive ? "text-orange-400" : "text-gray-500"
                              )} />
                              <span>{item.title}</span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-h-screen w-full px-4 lg:pl-[256px]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            {/* Breadcrumb */}
            {/* <div className="flex items-center space-x-2 text-sm text-gray-400 mb-6 sm:mb-8">
              <Link href="/" className="hover:text-orange-400 transition-colors duration-300">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">{title}</span>
            </div> */}

            {/* Page Header */}
            <div className="mb-8 sm:mb-12">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">{title}</h1>
              {description && (
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl">
                  {description}
                </p>
              )}
            </div>

            {/* Content */}
            <div className="prose prose-invert max-w-none prose-sm sm:prose-base lg:prose-lg">
              {children}
            </div>

            {/* Navigation */}
            <DocNavigation />
          </div>
        </main>
      </div>
    </div>
  )
} 