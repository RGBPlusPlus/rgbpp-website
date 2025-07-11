"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, ExternalLink } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PartnersPage() {
  const allPartners = [
    // Featured Partners
    { name: "BIT Network", domain: "bit.network", category: "RWA", featured: true, gradient: "from-blue-500 to-purple-600" },
    { name: "Nervape", domain: "nervape.com", category: "Metaverse", featured: true, gradient: "from-purple-500 to-pink-600" },
    { name: "Gate.io", domain: "gate.io", category: "Exchange", featured: true, gradient: "from-green-500 to-blue-600" },
    { name: "Wizz", domain: "wizz.cash", category: "Wallet", featured: true, gradient: "from-orange-500 to-red-600" },
    { name: "DOBBY", domain: "dobby.market", category: "Marketplace", featured: true, gradient: "from-cyan-500 to-blue-600" },
    { name: "SuperEx", domain: "superex.com", category: "Exchange", featured: true, gradient: "from-indigo-500 to-purple-600" },
    
    // All Partners
    { name: "Caboroca", domain: "caboroca.xyz", category: "DeFi", featured: false, gradient: "from-orange-400 to-green-500" },
    { name: "RGB++T", domain: "rgbppt.xyz", category: "Trading", featured: false, gradient: "from-orange-400 to-green-500" },
    { name: "RGB Cat", domain: "rgbcat.io", category: "NFT", featured: false, gradient: "from-orange-400 to-green-500" },
    { name: "Haste", domain: "haste.pro", category: "Gaming", featured: false, gradient: "from-orange-400 to-green-500" },
    { name: "OpenStamp", domain: "openstamp.io", category: "Identity", featured: false, gradient: "from-orange-400 to-green-500" },
    { name: "Rei Wallet", domain: "reiwallet.io", category: "Wallet", featured: false, gradient: "from-orange-400 to-green-500" },
    { name: "DOBPad", domain: "dobpad.com", category: "Launchpad", featured: false, gradient: "from-orange-400 to-green-500" },
    { name: "Moonbit", domain: "moonbit.network", category: "Infrastructure", featured: false, gradient: "from-orange-400 to-green-500" },
    { name: "Jumbo Kuji", domain: "kujinow.com", category: "Gaming", featured: false, gradient: "from-orange-400 to-green-500" },
    { name: "Mobit", domain: "mobit.app", category: "Mobile", featured: false, gradient: "from-orange-400 to-green-500" },
    { name: "Cellula", domain: "cellula.life", category: "Social", featured: false, gradient: "from-orange-400 to-green-500" },
    { name: "CoinEx", domain: "coinex.com", category: "Exchange", featured: false, gradient: "from-orange-400 to-green-500" },
    { name: "Seal2Earn", domain: "seal2earn.xyz", category: "GameFi", featured: false, gradient: "from-orange-400 to-green-500" },
    { name: "DOBHub", domain: "dobhub.xyz", category: "Hub", featured: false, gradient: "from-orange-400 to-green-500" },
    { name: "Element", domain: "element-app.market", category: "Marketplace", featured: false, gradient: "from-orange-400 to-green-500" },
    { name: "UTXO Global", domain: "utxo.global", category: "Analytics", featured: false, gradient: "from-orange-400 to-green-500" },
    { name: "JoyID", domain: "server.joy.id", category: "Identity", featured: false, gradient: "from-orange-400 to-green-500" },
    { name: "Trust BTC", domain: "trust.btc.finance", category: "DeFi", featured: false, gradient: "from-orange-400 to-green-500" }
  ]

  const featuredPartners = allPartners.filter(partner => partner.featured)
  const regularPartners = allPartners.filter(partner => !partner.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="py-10 px-2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-green-500/5 to-blue-500/5 blur-3xl"></div>
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-16">

            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-green-400 to-blue-400 bg-clip-text text-transparent">
              Ecosystem Partners
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed text-center">
              Pioneering the future of Bitcoin programmability together
            </p>
          </div>
        </div>
      </section>

      {/* Featured Partners Section */}
      <section className="py-10 px-2 relative overflow-hidden bg-gradient-to-b from-gray-900/50 to-gray-950/50">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/3 via-green-500/3 to-blue-500/3 blur-3xl"></div>
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-green-400 to-blue-400 bg-clip-text text-transparent">
              Featured Partners
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Our core partners driving the RGB++ ecosystem forward
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {featuredPartners.map((partner, index) => {
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
        </div>
      </section>

      {/* All Partners Section */}
      <section className="py-10 px-2 relative overflow-hidden bg-gradient-to-b from-gray-950/50 to-black/50">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/2 via-green-500/2 to-blue-500/2 blur-3xl"></div>
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-green-400 to-blue-400 bg-clip-text text-transparent">
              All Partners
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Explore our growing ecosystem of innovative partners
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {regularPartners.map((partner, index) => (
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

          {/* Stats Section */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-500/10 to-green-500/10 border border-orange-500/20 rounded-full">
              <Users className="w-5 h-5 mr-3 text-orange-400" />
              <span className="text-gray-300 font-medium">
                {allPartners.length}+ partners and growing
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-2 bg-gradient-to-b from-gray-950/50 to-black/50 relative">
        <div className="container mx-auto max-w-3xl relative">
          <div className="text-center space-y-12">
            <div className="space-y-6">
              <h3 className="text-4xl font-bold bg-gradient-to-r from-orange-400 via-green-400 to-blue-400 bg-clip-text text-transparent mb-6">
                Join the RGB++ Ecosystem
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                Become part of our growing partner network
              </p>
            </div>

            <div className="text-center">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-green-500 to-blue-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <Link href="/docs/introduction">
                  <Button className="relative bg-gradient-to-r from-orange-500/90 via-green-500/70 to-blue-500/90 hover:from-orange-500 hover:via-green-500 hover:to-blue-500 text-white lg:px-8 py-4 text-base font-medium rounded-full shadow-2xl hover:shadow-orange-500/30 transition-all duration-500 group border border-gray-600/20 hover:border-orange-400/40 backdrop-blur-sm">
                    <div className="flex items-center">
                      <ExternalLink className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                      <span className="group-hover:tracking-wide transition-all duration-300">Start Building</span>
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