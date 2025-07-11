"use client"

import Link from "next/link";
import LogoIcon from "@/components/ui/logoIcon";
import { ExternalLink, Menu, X, Book, Code, Lock, Shield, Link as LinkIcon, Layers, Network, Server, Zap, Hash, Database, FileText, ChevronDown, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

// 导航数据结构
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
    title: "Examples",
    items: [
      { title: "UDT", href: "/docs/quickstart", icon: Zap },
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
      { title: "MMR", href: "/docs/glossary/mmr", icon: Hash },
      { title: "Merkle Root", href: "/docs/glossary/merkle-root", icon: Hash },
      { title: "OP_RETURN", href: "/docs/glossary/op-return", icon: FileText },
    ]
  }
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState(0); // 默认展开第一列
  const pathname = usePathname();

  // 根据当前路径自动展开对应的分组
  useEffect(() => {
    const currentSectionIndex = navigationItems.findIndex(section =>
      section.items.some(item => item.href === pathname)
    );
    if (currentSectionIndex !== -1) {
      setExpandedSection(currentSectionIndex);
    }
  }, [pathname]);

  return (
    <>
      <header className="border-b border-gray-800/50 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className=" mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="p-1 rounded-lg bg-gradient-to-r from-orange-500/20 via-green-500/20 to-blue-500/20 group-hover:from-orange-500/30 group-hover:via-green-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                <LogoIcon className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-orange-400 via-green-400 to-blue-400 bg-clip-text text-transparent">
                  RGB++
                </h1>
                <p className="text-xs text-gray-400">Bitcoin’s Turing Catalyst</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/docs/introduction"
                className={cn(
                  "transition-colors",
                  pathname.startsWith("/docs")
                    ? "text-orange-400"
                    : "text-gray-300 hover:text-orange-400"
                )}
              >
                Documentation
              </Link>
              <a
                href="https://github.com/RGBPlusPlus"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors flex items-center space-x-1"
              >
                <span>GitHub</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
            >
              <Menu className="w-6 h-6 text-gray-300" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu Content */}
          <div className="absolute inset-0 flex flex-col bg-gray-900/95">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700/30">
              <div className="flex items-center space-x-3">
                <div className="p-1 rounded-lg bg-gradient-to-r from-orange-500/20 via-green-500/20 to-blue-500/20">
                  <LogoIcon className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-orange-400 via-green-400 to-blue-400 bg-clip-text text-transparent">
                    RGB++
                  </h1>
                  <p className="text-xs text-gray-400">Navigation</p>
                </div>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
              >
                <X className="w-6 h-6 text-gray-300" />
              </button>
            </div>

            {/* Navigation Content */}
            <div className="flex-1 overflow-y-auto">
              {/* Full Navigation Menu */}
              <div className="p-6">
                {navigationItems.map((section, sectionIndex) => {
                  const isExpanded = expandedSection === sectionIndex;
                  return (
                    <div key={sectionIndex} className="mb-6">
                      <button
                        onClick={() => setExpandedSection(isExpanded ? -1 : sectionIndex)}
                        className="flex items-center justify-between w-full px-2 py-3 text-sm font-semibold text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        <span className="uppercase tracking-wider text-gray-400">{section.title}</span>
                        {isExpanded ? (
                          <ChevronDown className="h-4 w-4 text-gray-400 transition-transform duration-200" />
                        ) : (
                          <ChevronRight className="h-4 w-4 text-gray-400 transition-transform duration-200" />
                        )}
                      </button>
                      <div className={cn(
                        "overflow-hidden transition-all duration-300 ease-in-out",
                        isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      )}>
                        <div className="space-y-2 pt-2">
                          {section.items.map((item, itemIndex) => {
                            const isActive = pathname === item.href;
                            return (
                              <Link
                                key={itemIndex}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={cn(
                                  "flex items-center space-x-3 px-4 py-3 rounded-xl text-base transition-all duration-200",
                                  isActive
                                    ? "text-white bg-orange-500/20 border border-orange-500/30"
                                    : "text-gray-300 hover:text-white hover:bg-gray-800/50 hover:scale-105"
                                )}
                              >
                                <item.icon className={cn(
                                  "h-5 w-5 flex-shrink-0",
                                  isActive ? "text-orange-400" : "text-gray-500"
                                )} />
                                <span className="font-medium">{item.title}</span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* GitHub Link at Bottom */}
            <div className="border-t border-gray-700/30 p-6">
              <a
                href="https://github.com/RGBPlusPlus"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center space-x-3 w-full px-4 py-3 rounded-xl text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200 hover:scale-105 border border-gray-600/30 hover:border-blue-500/50"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
