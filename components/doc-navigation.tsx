"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

// 扁平化的导航列表，按照侧边栏的顺序排列
const flatNavigationItems = [
  { title: "Introduction", href: "/docs/introduction" },
  { title: "Resources", href: "/docs/resources" },
  { title: "Core Concepts", href: "/docs/concepts" },
  { title: "Single-Use Seal", href: "/docs/single-use-seal" },
  { title: "State Validation", href: "/docs/state-validation" },
  { title: "Isomorphic Binding", href: "/docs/isomorphic-binding" },
  { title: "RGB++ Scripts", href: "/docs/components" },
  { title: "SPV Service", href: "/docs/spv-service" },
  { title: "RGB++ SDK", href: "/docs/rgbpp-sdk" },
  { title: "btc-assets-api", href: "/docs/btc-assets-api" },
  { title: "UDT", href: "/docs/quickstart" },
  { title: "Glossary", href: "/docs/glossary" },
  { title: "UTXO", href: "/docs/glossary/utxo" },
  { title: "CKB Cell", href: "/docs/glossary/ckb-cell" },
  { title: "CKB Script", href: "/docs/glossary/ckb-script" },
  { title: "xUDT Script", href: "/docs/glossary/xudt-script" },
  { title: "SPV", href: "/docs/glossary/spv" },
  { title: "MMR", href: "/docs/glossary/mmr" },
  { title: "Merkle Root", href: "/docs/glossary/merkle-root" },
  { title: "OP_RETURN", href: "/docs/glossary/op-return" },
]

export function DocNavigation() {
  const pathname = usePathname()

  // 找到当前页面的索引
  const currentIndex = flatNavigationItems.findIndex(item => item.href === pathname)

  // 如果找不到当前页面，不显示导航
  if (currentIndex === -1) {
    return null
  }

  const isFirstPage = currentIndex === 0
  const isLastPage = currentIndex === flatNavigationItems.length - 1

  const previousPage = currentIndex > 0 ? flatNavigationItems[currentIndex - 1] : null
  const nextPage = currentIndex < flatNavigationItems.length - 1 ? flatNavigationItems[currentIndex + 1] : null

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between pt-6 sm:pt-8 mt-8 sm:mt-12 border-t border-gray-700/50 gap-3 sm:gap-6">
      {/* 上一个按钮 */}
      <div className="flex-1 flex justify-start">
        {!isFirstPage && previousPage ? (
          <Link
            href={previousPage.href}
            className="group flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 rounded-lg border-2 border-gray-600/80 bg-gray-800/40 hover:border-orange-400 hover:bg-orange-500/10 transition-all duration-200 w-full sm:w-48 h-14 sm:h-16"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-gray-300 group-hover:text-orange-300 transition-colors duration-200 flex-shrink-0" />
            <div className="text-left min-w-0 flex-1">
              <div className="text-xs text-gray-400 uppercase tracking-wider font-medium">Previous</div>
              <div className="text-sm font-semibold text-gray-100 group-hover:text-white transition-colors duration-200 truncate">
                {previousPage.title}
              </div>
            </div>
          </Link>
        ) : (
          <div className="w-full sm:w-48 h-14 sm:h-16"></div>
        )}
      </div>

      {/* 下一个按钮 */}
      <div className="flex-1 flex justify-end">
        {!isLastPage && nextPage ? (
          <Link
            href={nextPage.href}
            className="group flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 rounded-lg border-2 border-gray-600/80 bg-gray-800/40 hover:border-orange-400 hover:bg-orange-500/10 transition-all duration-200 w-full sm:w-48 h-14 sm:h-16"
          >
            <div className="text-right min-w-0 flex-1">
              <div className="text-xs text-gray-400 uppercase tracking-wider font-medium">Next</div>
              <div className="text-sm font-semibold text-gray-100 group-hover:text-white transition-colors duration-200 truncate">
                {nextPage.title}
              </div>
            </div>
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-gray-300 group-hover:text-orange-300 transition-colors duration-200 flex-shrink-0" />
          </Link>
        ) : (
          <div className="w-full sm:w-48 h-14 sm:h-16"></div>
        )}
      </div>
    </div>
  )
} 