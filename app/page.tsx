"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Book, Code, Terminal, FileText, GitBranch, Layers, Shield, ExternalLink, Activity, Box, Link2, Database, Zap, Copy, CheckCircle, Users, Network } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"



export default function HomePage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [showAllPartners, setShowAllPartners] = useState(false)

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const steps = [
    {
      title: "UTXO Binding",
      description: "Bitcoin UTXOs are bound to CKB Cells through cryptographic commitments, creating isomorphic asset ownership.",
      icon: Link2,
      technical: "Single-use seals ensure atomic state transitions"
    },
    {
      title: "Commitment Creation",
      description: "A cryptographic commitment links Bitcoin and CKB transactions, ensuring consistency across both chains.",
      icon: Shield,
      technical: "OP_RETURN stores the commitment hash on Bitcoin"
    },
    {
      title: "State Execution",
      description: "Complex programmable logic executes on CKB's Turing-complete VM while Bitcoin provides security.",
      icon: Layers,
      technical: "Asset state stored in CKB Cell data field"
    },
    {
      title: "SPV Verification",
      description: "Bitcoin SPV proofs validate transactions on CKB, ensuring trustless cross-chain verification.",
      icon: Activity,
      technical: "On-chain verification eliminates client-side complexity"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="py-10 px-2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-green-500/5 to-blue-500/5 blur-3xl"></div>
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-green-400 to-blue-400 bg-clip-text text-transparent">
              Bitcoin Layer 2 Protocol
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              RGB++ extends Bitcoin with Turing-complete smart contracts through innovative isomorphic binding,
              enabling complex programmable logic while preserving Bitcoin's security model.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/introduction">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 border-0 shadow-lg shadow-orange-500/25">
                  <Book className="mr-2 h-5 w-5" />
                  Read Documentation
                </Button>
              </Link>
              <a href="https://github.com/ckb-cell/rgbpp" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-gray-600 bg-gray-900/50 hover:bg-gradient-to-r hover:from-green-500/10 hover:to-blue-500/10 hover:border-gray-500 backdrop-blur-sm">
                  <Code className="mr-2 h-5 w-5" />
                  View GitHub
                </Button>
              </a>
            </div>
          </div>

          {/* RGB++ Architecture Diagram */}
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-2xl p-8 mb-8 backdrop-blur-sm shadow-2xl">
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold bg-gradient-to-r from-orange-400 via-green-400 to-blue-400 bg-clip-text text-transparent">RGB++ Protocol Architecture</h4>
            </div>

            {/* Architecture Diagram */}
            <div className="flex justify-center">
              <div className="w-full max-w-7xl">
                <img
                  src="/rgb_plus_plus_architecture.svg"
                  alt="RGB++ Protocol Architecture Diagram"
                  className="w-full h-auto rounded-xl shadow-2xl shadow-gray-900/50"
                  style={{ background: 'linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%)', padding: '24px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How RGB++ Works */}
      <section className="py-10 px-2 bg-gradient-to-b from-gray-900/50 to-gray-950/50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/3 via-green-500/3 to-blue-500/3 blur-3xl"></div>
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-green-400 to-blue-400 bg-clip-text text-transparent">How Does RGB++ Work?</h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              RGB++ creates isomorphic binding between Bitcoin UTXOs and CKB Cells, enabling programmable Bitcoin assets with Turing-complete smart contracts.
            </p>
          </div>

          {/* RGB++ Workflow Diagram */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-white/95 to-gray-50/95 border border-gray-300/20 rounded-2xl p-6 shadow-2xl shadow-gray-900/30 backdrop-blur-sm">
              <div className="flex justify-center">
                <div className="w-full max-w-6xl">
                  <img
                    src="/rgb_plus_plus_workflow.svg"
                    alt="RGB++ Protocol Workflow Diagram"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Core Features Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {steps.slice(0, 3).map((step, index) => {
              const colors = ['orange', 'green', 'blue'] as const;
              const color = colors[index] as 'orange' | 'green' | 'blue';
              const colorMap: Record<'orange' | 'green' | 'blue', string> = {
                orange: 'from-orange-500/20 to-orange-600/10 border-orange-500/30 shadow-orange-500/20',
                green: 'from-green-500/20 to-green-600/10 border-green-500/30 shadow-green-500/20',
                blue: 'from-blue-500/20 to-blue-600/10 border-blue-500/30 shadow-blue-500/20'
              };
              const iconColorMap: Record<'orange' | 'green' | 'blue', string> = {
                orange: 'bg-gradient-to-r from-orange-500 to-orange-600 shadow-orange-500/30',
                green: 'bg-gradient-to-r from-green-500 to-green-600 shadow-green-500/30',
                blue: 'bg-gradient-to-r from-blue-500 to-blue-600 shadow-blue-500/30'
              };

              return (
                <div key={index} className={`bg-gradient-to-br ${colorMap[color]} rounded-xl p-6 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${iconColorMap[color]} rounded-xl flex items-center justify-center shadow-lg`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-3">{step.title}</h4>
                  <p className="text-gray-200 text-sm mb-3 leading-relaxed">{step.description}</p>
                  <p className="text-gray-300 text-xs">{step.technical}</p>
                </div>
              );
            })}
          </div>


        </div>
      </section>



      {/* Protocol Comparison */}
      <section className="py-10 px-2 bg-gradient-to-b from-gray-950/50 to-black/50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/2 via-green-500/2 to-blue-500/2 blur-3xl"></div>
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-green-400 to-blue-400 bg-clip-text text-transparent">RGB++ vs. Traditional RGB</h3>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              RGB++ simplifies the RGB protocol by moving validation on-chain while maintaining all security guarantees.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-700/50 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm shadow-2xl">
              <thead className="bg-gradient-to-r from-gray-800/80 to-gray-700/60">
                <tr>
                  <th className="py-1 px-2 lg:px-6 lg:py-4 text-left text-white lg:font-sm font-medium ">Feature</th>
                  <th className="py-1 px-2 lg:px-6 lg:py-4 text-center text-white lg:font-sm font-medium ">RGB++</th>
                  <th className="py-1 px-2 lg:px-6 lg:py-4 text-center text-white lg:font-sm font-medium ">Traditional RGB</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700/30">
                <tr className="hover:bg-gradient-to-r hover:from-orange-500/5 hover:to-green-500/5 transition-all duration-300">
                  <td className="py-1 px-2 lg:px-6 lg:py-4 text-gray-200">Validation</td>
                  <td className="py-1 px-2 lg:px-6 lg:py-4 text-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mx-auto drop-shadow-lg" />
                    <span className="text-sm text-gray-200 block mt-1">On-chain</span>
                  </td>
                  <td className="py-1 px-2 lg:px-6 lg:py-4 text-center">
                    <span className="text-sm text-gray-400">Client-side</span>
                  </td>
                </tr>
                <tr className="hover:bg-gradient-to-r hover:from-green-500/5 hover:to-blue-500/5 transition-all duration-300">
                  <td className="py-1 px-2 lg:px-6 lg:py-4 text-gray-200">Data Availability</td>
                  <td className="py-1 px-2 lg:px-6 lg:py-4 text-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mx-auto drop-shadow-lg" />
                    <span className="text-sm text-gray-200 block mt-1">Public on CKB</span>
                  </td>
                  <td className="py-1 px-2 lg:px-6 lg:py-4 text-center">
                    <span className="text-sm text-gray-400">Private/Local</span>
                  </td>
                </tr>
                <tr className="hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-orange-500/5 transition-all duration-300">
                  <td className="py-1 px-2 lg:px-6 lg:py-4 text-gray-200">Usability</td>
                  <td className="py-1 px-2 lg:px-6 lg:py-4 text-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mx-auto drop-shadow-lg" />
                    <span className="text-sm text-gray-200 block mt-1">User-friendly</span>
                  </td>
                  <td className="py-1 px-2 lg:px-6 lg:py-4 text-center">
                    <span className="text-sm text-gray-400">Complex</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Ecosystem Partners */}
      <section className="py-10 px-2 relative overflow-hidden bg-gradient-to-b from-black/50 to-gray-950/80">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-green-500/5 to-blue-500/5 blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(243,103,79,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(56,229,57,0.1),transparent_50%)]"></div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold bg-gradient-to-r from-orange-400 via-green-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Ecosystem Partners
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Pioneering the future of Bitcoin programmability together
            </p>
          </div>

          {/* Featured Partners */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {[
              { name: "BIT Network", domain: "bit.network", category: "RWA", featured: true, gradient: "from-blue-500 to-purple-600" },
              { name: "Nervape", domain: "nervape.com", category: "Metaverse", featured: true, gradient: "from-purple-500 to-pink-600" },
              { name: "Gate.io", domain: "gate.io", category: "Exchange", featured: true, gradient: "from-green-500 to-blue-600" },
              { name: "Wizz", domain: "wizz.cash", category: "Wallet", featured: true, gradient: "from-orange-500 to-red-600" },
              { name: "DOBBY", domain: "dobby.market", category: "Marketplace", featured: true, gradient: "from-cyan-500 to-blue-600" },
              { name: "SuperEx", domain: "superex.com", category: "Exchange", featured: true, gradient: "from-indigo-500 to-purple-600" }
            ].map((partner, index) => {
              const colors = ['orange-500', 'green-500', 'blue-500'];
              const color = colors[index % 3];
              return (
                <Card key={index} className="group relative bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-xl border border-gray-700/50 hover:border-orange-400/60 transition-all duration-500 cursor-pointer overflow-hidden transform hover:scale-105 hover:-translate-y-1 shadow-lg shadow-gray-900/30">
                  <div className={`absolute inset-0 bg-gradient-to-br ${partner.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <CardContent className="p-4 relative z-10">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-8 h-8 bg-gradient-to-br ${partner.gradient} rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-${color}/25 transition-all duration-500`}>
                        <span className="text-white font-bold text-sm">{partner.name.charAt(0)}</span>
                      </div>
                      <Badge className="bg-gradient-to-r from-orange-500/20 to-green-500/20 text-orange-200 border-orange-500/30 px-2 py-0.5 text-xs">
                        {partner.category}
                      </Badge>
                    </div>
                    <h4 className="text-sm font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                      {partner.name}
                    </h4>
                    <p className="text-gray-300 font-mono text-xs break-all">
                      {partner.domain}
                    </p>
                  </CardContent>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-green-400 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </Card>
              );
            })}
          </div>

          {/* Partners Modal */}
          {showAllPartners && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
                onClick={() => setShowAllPartners(false)}
              ></div>

              {/* Modal Content */}
              <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/90 backdrop-blur-xl border border-gray-600/30 rounded-3xl  w-full max-h-[80vh] overflow-hidden animate-in zoom-in-95 duration-500 shadow-2xl shadow-gray-900/50">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-700/30">
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 via-green-400 to-blue-400 bg-clip-text text-transparent">
                      All Ecosystem Partners
                    </h3>
                    <p className="text-gray-300 mt-1">Building the RGB++ ecosystem together</p>
                  </div>
                  <button
                    onClick={() => setShowAllPartners(false)}
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200 group"
                  >
                    <ArrowRight className="w-5 h-5 text-white rotate-45 group-hover:rotate-90 transition-transform duration-200" />
                  </button>
                </div>

                {/* Partners Grid */}
                <div className="p-6 overflow-y-auto max-h-[60vh]">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {[
                      { name: "Caboroca", domain: "caboroca.xyz", category: "DeFi" },
                      { name: "RGB++T", domain: "rgbppt.xyz", category: "Trading" },
                      { name: "RGB Cat", domain: "rgbcat.io", category: "NFT" },
                      { name: "Haste", domain: "haste.pro", category: "Gaming" },
                      { name: "OpenStamp", domain: "openstamp.io", category: "Identity" },
                      { name: "Rei Wallet", domain: "reiwallet.io", category: "Wallet" },
                      { name: "DOBPad", domain: "dobpad.com", category: "Launchpad" },
                      { name: "Moonbit", domain: "moonbit.network", category: "Infrastructure" },
                      { name: "Jumbo Kuji", domain: "kujinow.com", category: "Gaming" },
                      { name: "Mobit", domain: "mobit.app", category: "Mobile" },
                      { name: "Cellula", domain: "cellula.life", category: "Social" },
                      { name: "CoinEx", domain: "coinex.com", category: "Exchange" },
                      { name: "Seal2Earn", domain: "seal2earn.xyz", category: "GameFi" },
                      { name: "DOBHub", domain: "dobhub.xyz", category: "Hub" },
                      { name: "Element", domain: "element-app.market", category: "Marketplace" },
                      { name: "UTXO Global", domain: "utxo.global", category: "Analytics" },
                      { name: "JoyID", domain: "server.joy.id", category: "Identity" },
                      { name: "Trust BTC", domain: "trust.btc.finance", category: "DeFi" }
                    ].map((partner, index) => (
                      <Card key={index} className="group bg-gradient-to-br from-gray-800/50 to-gray-700/30 hover:from-gray-700/60 hover:to-gray-600/40 backdrop-blur-lg border border-gray-600/30 hover:border-orange-400/50 transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-lg">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-green-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                              <span className="text-white font-bold text-sm">{partner.name.charAt(0)}</span>
                            </div>
                            <Badge variant="outline" className="text-xs border-orange-400/30 text-orange-200 px-2 py-1 bg-orange-500/10">
                              {partner.category}
                            </Badge>
                          </div>
                          <h4 className="font-semibold text-white mb-2 text-sm group-hover:text-orange-400 transition-colors">
                            {partner.name}
                          </h4>
                          <p className="text-xs text-gray-300 font-mono break-all">
                            {partner.domain}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-white/10 bg-black/50">
                  <div className="flex items-center justify-center">
                    <div className="flex items-center text-gray-400 text-sm">
                      <Users className="w-4 h-4 mr-2" />
                      <span>24+ partners and growing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="text-center">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-green-500 to-blue-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <Button
                onClick={() => setShowAllPartners(!showAllPartners)}
                className="relative bg-gradient-to-r from-orange-500/90 via-green-500/70 to-blue-500/90 hover:from-orange-500 hover:via-green-500 hover:to-blue-500 text-white lg:px-8 py-4 text-base font-medium rounded-full shadow-2xl hover:shadow-orange-500/30 transition-all duration-500 group border border-gray-600/20 hover:border-orange-400/40 backdrop-blur-sm"
              >
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:tracking-wide transition-all duration-300">Discover All 24+ Partners</span>
                  <div className="flex items-center ml-3">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    <div className="flex ml-2 space-x-1">
                      <div className="w-1 h-1 bg-white/60 rounded-full animate-pulse"></div>
                      <div className="w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>

                {/* Ripple Effect */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                </div>
              </Button>
            </div>

            {/* Subtle hint text */}
            <p className="text-gray-400 text-sm mt-4 opacity-70 hover:opacity-100 transition-opacity duration-300">
              Click to explore our growing ecosystem of innovative partners
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

