"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Book, Layers, Shield, Activity, Link2, Users } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"



export default function HomePage() {

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
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-green-400 to-blue-400 bg-clip-text text-transparent !leading-relaxed">
              Bitcoin’s Turing Catalyst
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed text-center">
              RGB++ unleashes the full potential of Bitcoin for a rich application ecosystem without altering its foundational security. This production-ready protocol offers a trustless method for dApps to interact directly with native Bitcoin transactions, facilitated by a lightweight, decentralized verifier.
            </p>
          </div>

          {/* RGB++ Architecture Diagram */}
          <div className="text-center mb-16">
            <h4 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-green-400 to-blue-400 bg-clip-text text-transparent">RGB++ Protocol Architecture</h4>
          </div>

          {/* Architecture Diagram */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-white/95 to-gray-50/95 border border-gray-300/20 rounded-2xl p-6 shadow-2xl shadow-gray-900/30 backdrop-blur-sm">
              <div className="flex justify-center">
                <div className="w-full max-w-7xl">
                  <img
                    src="/rgb_plus_plus_architecture.svg"
                    alt="RGB++ Protocol Architecture Diagram"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Key Components Explanation */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              {/* CKB Blockchain */}
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-6 border border-blue-500/20 backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <h4 className="text-xl font-bold text-white ml-3">Common Knowledge Base (CKB)</h4>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Built on RISC-V and secured by Proof-of-Work, CKB is the most flexible and interoperable blockchain. With its open-source instruction set architecture, CKB enables native multi-language development and low-level CPU access for maximum efficiency. The battle-tested security of Proof-of-Work consensus ensures robust network protection, while the unique Cell model provides unlimited programmability and seamless cross-chain integration capabilities.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-blue-300 text-sm">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    <span>Turing-complete Script system</span>
                  </div>
                  <div className="flex items-center text-blue-300 text-sm">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    <span>Cell model for flexible data storage</span>
                  </div>
                  <div className="flex items-center text-blue-300 text-sm">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    <span>RISC-V instruction set for native multi-language development</span>
                  </div>
                </div>
              </div>

              {/* Isomorphic Binding */}
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-6 border border-green-500/20 backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <h4 className="text-xl font-bold text-white ml-3">Isomorphic Binding</h4>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  A one-to-one mapping mechanism that links Bitcoin UTXOs to CKB Cells.
                </p>
                <div className="flex justify-center">
                  <img
                    src="/isomorphic_binding.svg"
                    alt="Isomorphic Binding Diagram"
                    className="w-full max-w-2xl h-auto"
                  />
                </div>
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
            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-green-400 to-blue-400 bg-clip-text text-transparent">Bitcoin Layer 2 Solution Comparison</h3>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Comprehensive comparison of RGB++ with major Bitcoin layer 2 solutions across key technical capabilities.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-700/50 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm shadow-2xl">
              <thead className="bg-gradient-to-r from-gray-800/80 to-gray-700/60">
                <tr>
                  <th className="py-2 px-3 text-left text-white text-sm font-medium">Features</th>
                  <th className="py-2 px-3 text-center text-white text-sm font-medium">RGB++</th>
                  <th className="py-2 px-3 text-center text-white text-sm font-medium">RGB</th>
                  <th className="py-2 px-3 text-center text-white text-sm font-medium">Liquid Network</th>
                  <th className="py-2 px-3 text-center text-white text-sm font-medium">Rootstock</th>
                  <th className="py-2 px-3 text-center text-white text-sm font-medium">Stacks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700/30">
                <tr className="hover:bg-gradient-to-r hover:from-green-500/5 hover:to-blue-500/5 transition-all duration-300">
                  <td className="py-3 px-3 text-gray-200 text-sm font-medium">Bitcoin's Security Inheritance</td>
                  <td className="py-3 px-3 text-center">
                    <span className="text-xs text-green-300">Full</span>
                  </td>
                  <td className="py-3 px-3 text-center">
                    <span className="text-xs text-green-300">Full</span>
                  </td>
                  <td className="py-3 px-3 text-center">
                    <span className="text-xs text-orange-300">Partial (federated)</span>
                  </td>
                  <td className="py-3 px-3 text-center">
                    <span className="text-xs text-orange-300">Partial (federated)</span>
                  </td>
                  <td className="py-3 px-3 text-center">
                    <span className="text-xs text-orange-300">Partial (PoX)</span>
                  </td>
                </tr>
                <tr className="hover:bg-gradient-to-r hover:from-purple-500/5 hover:to-orange-500/5 transition-all duration-300">
                  <td className="py-3 px-3 text-gray-200 text-sm font-medium">Decentralization</td>
                  <td className="py-3 px-3 text-center">
                    <span className="text-xs text-green-300">High</span>
                  </td>
                  <td className="py-3 px-3 text-center">
                    <span className="text-xs text-green-300">High</span>
                  </td>
                  <td className="py-3 px-3 text-center">
                    <span className="text-xs text-orange-300">Federated</span>
                  </td>
                  <td className="py-3 px-3 text-center">
                    <span className="text-xs text-orange-300">Federated</span>
                  </td>
                  <td className="py-3 px-3 text-center">
                    <span className="text-xs text-green-300">Decentralized</span>
                  </td>
                </tr>
                <tr className="hover:bg-gradient-to-r hover:from-red-500/5 hover:to-purple-500/5 transition-all duration-300">
                  <td className="py-3 px-3 text-gray-200 text-sm font-medium">Technical Approach</td>
                  <td className="py-3 px-3 text-center">
                    <span className="text-xs text-blue-300">Blockchain-enhanced state validation</span>
                  </td>
                  <td className="py-3 px-3 text-center">
                    <span className="text-xs text-blue-300">Client-side validation</span>
                  </td>
                  <td className="py-3 px-3 text-center">
                    <span className="text-xs text-blue-300">Federated 2-way peg with multisig federation</span>
                  </td>
                  <td className="py-3 px-3 text-center">
                    <span className="text-xs text-blue-300">2-way peg via bridge contracts & miners</span>
                  </td>
                  <td className="py-3 px-3 text-center">
                    <span className="text-xs text-blue-300">Proof-of-Transfer (PoX) + Anchoring to BTC</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Ecosystem Partners */}
      <section className="py-10 px-2 lg:px-8 relative overflow-hidden bg-gradient-to-b from-gray-950/50 to-black/50">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/3 via-green-500/3 to-blue-500/3 blur-3xl"></div>

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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6 mb-12">
            {[
              { name: "Gate.io", domain: "gate.io", category: "Exchange", featured: true, gradient: "from-green-500 to-blue-600" },
              { name: "CoinEx", domain: "coinex.com", category: "Exchange", featured: true, gradient: "from-indigo-500 to-purple-600" },
              { name: "Wizz Cash", domain: "wizz.cash", faviconDomain: "wizzwallet.io", category: "Wallet", featured: true, gradient: "from-orange-500 to-red-600" },
              { name: "JoyID", domain: "joy.id", category: "Wallet", featured: true, gradient: "from-cyan-500 to-blue-600" },
              { name: "UTXO Global", domain: "utxo.global", category: "Wallet", featured: true, gradient: "from-blue-500 to-purple-600" },
              { name: "Nervape Studio", domain: "nervape.com", category: "Metaverse", featured: true, gradient: "from-purple-500 to-pink-600" }
            ].map((partner, index) => {
              const partnerWithFavicon = partner as { faviconUrl?: string; faviconDomain?: string; domain: string; name: string };
              return (
                <a
                  key={index}
                  href={`https://${partner.domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="group relative bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-xl border border-gray-700/50 hover:border-orange-400/60 transition-all duration-500 cursor-pointer overflow-hidden transform hover:scale-105 hover:-translate-y-1 shadow-lg shadow-gray-900/30">
                    <div className={`absolute inset-0 bg-gradient-to-br ${partner.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <CardContent className="p-4 lg:px-6 relative z-10">
                      <div className="flex items-start justify-between mb-3">
                        <div className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-white/20 transition-all duration-500 overflow-hidden border border-white/20">
                          <img
                            src={partnerWithFavicon.faviconUrl || `https://www.google.com/s2/favicons?domain=${partnerWithFavicon.faviconDomain || partner.domain}&sz=32`}
                            alt={`${partner.name} favicon`}
                            className="w-5 h-5 object-contain"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                              if (fallback) {
                                fallback.style.display = 'flex';
                              }
                            }}
                          />
                          <div className={`hidden w-full h-full bg-gradient-to-br ${partner.gradient} rounded-lg flex items-center justify-center`}>
                            <span className="text-white font-bold text-sm">{partner.name.charAt(0)}</span>
                          </div>
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
                </a>
              );
            })}
          </div>



          <div className="text-center">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-green-500 to-blue-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <Link href="/partners">
                <Button
                  className="relative bg-gradient-to-r from-orange-500/90 via-green-500/70 to-blue-500/90 hover:from-orange-500 hover:via-green-500 hover:to-blue-500 text-white lg:px-8 py-4 text-base font-medium rounded-full shadow-2xl hover:shadow-orange-500/30 transition-all duration-500 group border border-gray-600/20 hover:border-orange-400/40 backdrop-blur-sm"
                >
                  <div className="flex items-center">
                    <Users className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                    <span className="group-hover:tracking-wide transition-all duration-300">Discover All Partners</span>
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
              </Link>
            </div>

            {/* Subtle hint text */}
            <p className="text-gray-400 text-sm mt-4 opacity-70 hover:opacity-100 transition-opacity duration-300">
              Click to explore our growing ecosystem of innovative partners
            </p>
          </div>
        </div>
      </section>

      {/* Documentation CTA Section */}
      <section className="py-20 px-2 bg-gradient-to-b from-gray-950/50 to-black/50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/3 via-green-500/3 to-blue-500/3 blur-3xl"></div>
        <div className="container mx-auto max-w-3xl relative">
          <div className="text-center space-y-12">
            <div className="space-y-6">
              <h3 className="text-5xl font-bold bg-gradient-to-r from-orange-400 via-green-400 to-blue-400 bg-clip-text text-transparent mb-6">
                Start Building with RGB++
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                Comprehensive documentation to guide your Bitcoin programmability journey
              </p>
            </div>

            <div className="text-center">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-green-500 to-blue-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <Link href="/docs/introduction">
                  <Button className="relative bg-gradient-to-r from-orange-500/90 via-green-500/70 to-blue-500/90 hover:from-orange-500 hover:via-green-500 hover:to-blue-500 text-white lg:px-8 py-4 text-base font-medium rounded-full shadow-2xl hover:shadow-orange-500/30 transition-all duration-500 group border border-gray-600/20 hover:border-orange-400/40 backdrop-blur-sm">
                    <div className="flex items-center">
                      <Book className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                      <span className="group-hover:tracking-wide transition-all duration-300">Get Started</span>
                      <div className="flex items-center ml-3">
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>

                    {/* Ripple Effect */}
                    <div className="absolute inset-0 rounded-full overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                    </div>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

