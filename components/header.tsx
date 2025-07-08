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
    title: "Examples",
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
                <p className="text-xs text-gray-400">Bitcoin Layer 2 Protocol</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/introduction"
                className={cn(
                  "transition-colors",
                  pathname === "/introduction"
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
          </div>
        </div>
      )}
    </>
  );
}
