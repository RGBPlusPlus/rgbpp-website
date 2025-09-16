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
                It serves as the critical infrastructure component that connects Bitcoin and CKB networks for RGB++ operations.
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
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
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

              <div className="flex flex-col md:grid md:grid-cols-2 gap-6 items-center md:items-stretch px-2 md:px-0">
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4 md:p-6 rounded-xl border border-blue-500/20 w-full max-w-sm md:max-w-none">
                  <h4 className="font-semibold text-blue-300 mb-4 text-lg">Testnet Environments</h4>
                  <div className="space-y-4">
                    <div className="bg-black/30 p-4 rounded-lg">
                      <h5 className="font-semibold text-white mb-2">Bitcoin Testnet3</h5>
                      <p className="text-blue-200 text-sm font-mono break-all">
                        https://api-testnet.rgbpp.com
                      </p>
                      <p className="text-blue-200 text-sm font-mono break-all mt-2">
                        https://api.testnet.rgbpp.io
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-4 md:p-6 rounded-xl border border-green-500/20 w-full max-w-sm md:max-w-none">
                  <h4 className="font-semibold text-green-300 mb-4 text-lg">Production Environment</h4>
                  <div className="bg-black/30 p-4 rounded-lg">
                    <h5 className="font-semibold text-white mb-2">Mainnet Access</h5>
                    <p className="text-green-200 text-sm leading-relaxed mb-3">
                      For production applications, access instructions are available in the btc-assets-api repository.
                    </p>
                    <a href="https://github.com/RGBPlusPlus/btc-assets-api?tab=readme-ov-file#mainnet" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="border-green-500/30 text-green-300 hover:bg-green-500/10 text-xs px-2 py-1 h-auto leading-tight">
                        <ExternalLink className="h-3 w-3 mr-1 flex-shrink-0" />
                        <span className="text-xs whitespace-normal">View Mainnet Instructions</span>
                      </Button>
                    </a>
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
            <CardContent>
              <a href="https://github.com/RGBPlusPlus/btc-assets-api" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full border-blue-500/30 text-blue-300 hover:bg-blue-500/10">
                  <GitBranch className="h-4 w-4 mr-2" />
                  btc-assets-api Repository
                </Button>
              </a>
            </CardContent>
          </Card>
        </section>


      </div>
    </DocLayout>
  )
} 