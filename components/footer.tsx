import Link from "next/link"
import LogoIcon from "@/components/ui/logoIcon"


export default function Footer() {
  return (
    <footer className="border-t border-gray-700/50 bg-gradient-to-b from-gray-950 to-black relative">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/2 via-green-500/2 to-blue-500/2 blur-3xl"></div>
      <div className="container mx-auto px-6 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4 group">
              <div className="p-1 rounded-lg bg-gradient-to-r from-orange-500/20 via-green-500/20 to-blue-500/20 group-hover:from-orange-500/30 group-hover:via-green-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                <LogoIcon className="w-8 h-8" />
              </div>
              <div>
                <div className="bg-gradient-to-r from-orange-400 via-green-400 to-blue-400 bg-clip-text text-transparent font-bold">RGB++</div>
                <div className="text-gray-400 text-sm">Protocol</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Bitcoin Layer 2 Protocol for programmable assets and smart contracts.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Documentation</h3>
            <ul className="space-y-2">
              <li><Link href="/docs/introduction" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Introduction</Link></li>
              <li><Link href="/docs/quickstart" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Quick Start</Link></li>
              <li><Link href="/docs/concepts" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Core Concepts</Link></li>
              <li><Link href="/docs/resources" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Resources</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Tools</h3>
            <ul className="space-y-2">
              <li><a href="https://explorer.rgbpp.io" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Explorer</a></li>
              <li><Link href="/docs/btc-assets-api" className="text-gray-400 hover:text-green-400 text-sm transition-colors">API Docs</Link></li>
              <li><Link href="/docs/rgbpp-sdk" className="text-gray-400 hover:text-green-400 text-sm transition-colors">RGB++ SDK</Link></li>
              <li><a href="https://github.com/RGBPlusPlus/rgbpp" className="text-gray-400 hover:text-green-400 text-sm transition-colors">GitHub</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href="https://talk.nervos.org/t/rgb-protocol-light-paper/7733" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Community Forum</a></li>
              <li><a href="https://github.com/RGBPlusPlus/rgbpp/discussions" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">GitHub Discussions</a></li>
              <li><a href="https://talk.nervos.org/t/rgb-rgb-ckb/7791/1" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Learn More</a></li>
              <li><Link href="/docs/resources" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Resources</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 RGB++ Protocol. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm mt-4 md:mt-0">
              <a href="https://github.com/RGBPlusPlus/rgbpp" className="text-gray-400 hover:text-orange-400 transition-colors">GitHub</a>
              <a href="https://talk.nervos.org/t/rgb-protocol-light-paper/7733" className="text-gray-400 hover:text-green-400 transition-colors">Forum</a>
              <a href="https://github.com/RGBPlusPlus/rgbpp/discussions" className="text-gray-400 hover:text-blue-400 transition-colors">Discussions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 