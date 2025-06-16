"use client"

import { DocLayout } from "@/components/doc-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Server, Database, Network, Shield, ExternalLink, ArrowRight, GitBranch, Key, Clock, Settings } from "lucide-react"
import Link from "next/link"

export default function BTCAssetsAPIPage() {
  return (
    <DocLayout
      title="btc-assets-api"
      description="A comprehensive API service that retrieves BTC/RGB++ information and assets, processes transactions, and manages automated RGB++ asset workflows through scheduled operations."
    >
      <div className="space-y-12">
        {/* Introduction */}
        <section>
          <Card className="bg-white/5 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center text-white text-3xl">
                <Server className="h-8 w-8 mr-3 text-blue-400" />
                btc-assets-api Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-300 leading-relaxed text-lg">
                This is a service that retrieves BTC/RGB++ information/assets and processes transactions with these assets.
                It serves as the critical infrastructure component that bridges Bitcoin and CKB networks for RGB++ operations.
              </p>

              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-blue-500/20">
                <h3 className="font-semibold text-blue-300 mb-4 text-xl">Core Functionality</h3>
                <p className="text-blue-200 text-sm leading-relaxed">
                  The btc-assets-api provides essential services for RGB++ ecosystem including blockchain data retrieval,
                  transaction processing, and automated workflow management, ensuring seamless integration between Bitcoin and CKB networks.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Core Services */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">Core Services</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Blockchain Information Retrieval */}
            <Card className="bg-white/5 backdrop-blur-xl border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center text-white text-xl">
                  <Database className="h-6 w-6 mr-3 text-cyan-400" />
                  Blockchain Information Retrieval
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 text-sm leading-relaxed">
                  Access to Bitcoin chain data including blocks, headers, transactions, addresses, and RGB++ assets.
                  This functionality is provided by the SPV service.
                </p>

                <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-4 rounded-xl border border-cyan-500/20">
                  <h4 className="font-semibold text-cyan-300 mb-3">Available Data</h4>
                  <ul className="text-cyan-200 text-xs space-y-1">
                    <li>• Bitcoin blocks and headers</li>
                    <li>• Transaction records</li>
                    <li>• Address information</li>
                    <li>• RGB++ asset data</li>
                    <li>• Network statistics</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Transaction Handling */}
            <Card className="bg-white/5 backdrop-blur-xl border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center text-white text-xl">
                  <Network className="h-6 w-6 mr-3 text-green-400" />
                  Transaction Handling
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 text-sm leading-relaxed">
                  Comprehensive transaction processing capabilities for both Bitcoin and RGB++ asset transactions,
                  ensuring proper validation and execution.
                </p>

                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-4 rounded-xl border border-green-500/20">
                  <h4 className="font-semibold text-green-300 mb-3">Processing Features</h4>
                  <ul className="text-green-200 text-xs space-y-1">
                    <li>• Transaction validation</li>
                    <li>• Cross-chain coordination</li>
                    <li>• Asset transfer processing</li>
                    <li>• Error handling & recovery</li>
                    <li>• Status tracking</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Transaction Queue Management */}
            <Card className="bg-white/5 backdrop-blur-xl border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center text-white text-xl">
                  <Clock className="h-6 w-6 mr-3 text-orange-400" />
                  Transaction Queue Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 text-sm leading-relaxed">
                  Automated processing of RGB++ asset workflows through scheduled cron jobs,
                  ensuring reliable and timely execution of operations.
                </p>

                <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-4 rounded-xl border border-orange-500/20">
                  <h4 className="font-semibold text-orange-300 mb-3">Automation Features</h4>
                  <ul className="text-orange-200 text-xs space-y-1">
                    <li>• Scheduled job execution</li>
                    <li>• Queue management</li>
                    <li>• Workflow orchestration</li>
                    <li>• Retry mechanisms</li>
                    <li>• Performance monitoring</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Authentication & Access */}
        <section>
          <Card className="bg-white/5 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center text-white text-2xl">
                <Shield className="h-7 w-7 mr-3 text-purple-400" />
                Authentication & Access Control
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                The btc-assets-api requires an access token for authentication to ensure secure access to Bitcoin and RGB++ asset data and operations.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-6 rounded-xl border border-green-500/20">
                  <h4 className="font-semibold text-green-300 mb-4 flex items-center">
                    <Key className="h-5 w-5 mr-2" />
                    Testnet Access
                  </h4>
                  <p className="text-green-200 text-sm leading-relaxed mb-4">
                    Testnet users can generate a token directly via the /token/generate API endpoint.
                    The public testnet endpoint is available for development and testing purposes.
                  </p>
                  <div className="bg-black/30 p-3 rounded-lg">
                    <p className="text-green-200 text-xs font-mono">
                      POST /token/generate
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-6 rounded-xl border border-orange-500/20">
                  <h4 className="font-semibold text-orange-300 mb-4 flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    Mainnet Access
                  </h4>
                  <p className="text-orange-200 text-sm leading-relaxed mb-4">
                    Mainnet access is restricted to whitelisted users. Please contact us to request an access token for production use.
                  </p>
                  <div className="bg-black/30 p-3 rounded-lg">
                    <p className="text-orange-200 text-xs">
                      ⚠️ Whitelisted access required
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* API Endpoints */}
        <section>
          <Card className="bg-white/5 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center text-white text-2xl">
                <Network className="h-7 w-7 mr-3 text-cyan-400" />
                API Endpoints
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                The btc-assets-api provides dedicated endpoints for different network environments,
                ensuring proper isolation between development and production systems.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-blue-500/20">
                  <h4 className="font-semibold text-blue-300 mb-4 text-lg">Testnet Environments</h4>
                  <div className="space-y-4">
                    <div className="bg-black/30 p-4 rounded-lg">
                      <h5 className="font-semibold text-white mb-2">Bitcoin Testnet</h5>
                      <p className="text-blue-200 text-sm font-mono">
                        https://api.testnet.rgbpp.io
                      </p>
                    </div>
                    <div className="bg-black/30 p-4 rounded-lg">
                      <h5 className="font-semibold text-white mb-2">Bitcoin Signet</h5>
                      <p className="text-blue-200 text-sm font-mono">
                        https://api.signet.rgbpp.io
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-6 rounded-xl border border-green-500/20">
                  <h4 className="font-semibold text-green-300 mb-4 text-lg">Production Environment</h4>
                  <div className="bg-black/30 p-4 rounded-lg">
                    <h5 className="font-semibold text-white mb-2">Mainnet Access</h5>
                    <p className="text-green-200 text-sm leading-relaxed mb-3">
                      For production applications, access instructions are available in the btc-assets-api repository.
                    </p>
                    <Button variant="outline" className="border-green-500/30 text-green-300 hover:bg-green-500/10 text-xs">
                      <ExternalLink className="h-3 w-3 mr-2" />
                      View Mainnet Instructions
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Integration Guide */}
        <section>
          <Card className="bg-white/5 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center text-white text-2xl">
                <Settings className="h-7 w-7 mr-3 text-yellow-400" />
                Integration Guide
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Get started with btc-assets-api integration by following these essential steps for both development and production environments.
              </p>

              <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 p-6 rounded-xl border border-yellow-500/20">
                <h4 className="font-semibold text-yellow-300 mb-4 text-lg">Integration Steps</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">1</div>
                    <div>
                      <h5 className="font-semibold text-white mb-1">Choose Environment</h5>
                      <p className="text-yellow-200 text-sm">Select testnet for development or request mainnet access for production</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">2</div>
                    <div>
                      <h5 className="font-semibold text-white mb-1">Obtain Access Token</h5>
                      <p className="text-yellow-200 text-sm">Generate testnet token via API or request mainnet whitelist access</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">3</div>
                    <div>
                      <h5 className="font-semibold text-white mb-1">Configure SDK</h5>
                      <p className="text-yellow-200 text-sm">Set up RGB++ SDK with appropriate API endpoints and authentication</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">4</div>
                    <div>
                      <h5 className="font-semibold text-white mb-1">Start Building</h5>
                      <p className="text-yellow-200 text-sm">Begin implementing RGB++ asset operations in your application</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Use Cases */}
        <section>
          <Card className="bg-white/5 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center text-white text-2xl">
                <Database className="h-7 w-7 mr-3 text-purple-400" />
                Common Use Cases
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-500/20">
                  <h4 className="font-semibold text-purple-300 mb-4 text-lg">Application Development</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mt-1">•</div>
                      <p className="text-purple-200 text-sm">DeFi applications and protocols</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mt-1">•</div>
                      <p className="text-purple-200 text-sm">NFT marketplaces and platforms</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mt-1">•</div>
                      <p className="text-purple-200 text-sm">Asset management tools</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mt-1">•</div>
                      <p className="text-purple-200 text-sm">Cross-chain bridges</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-6 rounded-xl border border-cyan-500/20">
                  <h4 className="font-semibold text-cyan-300 mb-4 text-lg">Infrastructure Services</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mt-1">•</div>
                      <p className="text-cyan-200 text-sm">Exchange integrations</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mt-1">•</div>
                      <p className="text-cyan-200 text-sm">Wallet service backends</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mt-1">•</div>
                      <p className="text-cyan-200 text-sm">Analytics and monitoring</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mt-1">•</div>
                      <p className="text-cyan-200 text-sm">Enterprise solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Technical Resources */}
        <section>
          <Card className="bg-white/5 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center text-white text-2xl">
                <GitBranch className="h-7 w-7 mr-3 text-blue-400" />
                Technical Resources
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-blue-500/20">
                  <h4 className="font-semibold text-blue-300 mb-4 flex items-center">
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Repository & Documentation
                  </h4>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full border-blue-500/30 text-blue-300 hover:bg-blue-500/10">
                      <GitBranch className="h-4 w-4 mr-2" />
                      btc-assets-api Repository
                    </Button>
                    <Button variant="outline" className="w-full border-blue-500/30 text-blue-300 hover:bg-blue-500/10">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      API Documentation
                    </Button>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-6 rounded-xl border border-green-500/20">
                  <h4 className="font-semibold text-green-300 mb-4 flex items-center">
                    <Network className="h-5 w-5 mr-2" />
                    Support & Community
                  </h4>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full border-green-500/30 text-green-300 hover:bg-green-500/10">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Community Discord
                    </Button>
                    <Button variant="outline" className="w-full border-green-500/30 text-green-300 hover:bg-green-500/10">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Developer Forum
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Navigation */}
        <section className="bg-gradient-to-r from-gray-500/10 to-slate-500/10 p-8 rounded-xl border border-gray-500/20">
          <h3 className="text-2xl font-bold text-white mb-4">Continue Learning</h3>
          <p className="text-gray-300 mb-6">
            Now that you understand btc-assets-api, explore practical implementation examples and start building with RGB++.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/rgbpp-sdk">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-white/10">
                <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                Back to RGB++ SDK
              </Button>
            </Link>
            <Link href="/quickstart">
              <Button className="bg-blue-500 hover:bg-blue-600">
                Quick Start Guide
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/source-code">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-white/10">
                View Resources
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </DocLayout>
  )
} 