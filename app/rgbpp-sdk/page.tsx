"use client"

import { DocLayout } from "@/components/doc-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code, Wallet, Shield, Network, ExternalLink, ArrowRight, GitBranch, Key, Database, Layers } from "lucide-react"
import Link from "next/link"

export default function RGBPPSDKPage() {
  return (
    <DocLayout
      title="RGB++ SDK"
      description="A comprehensive SDK for RGB++ asset operations that manages assets on both BTC and CKB chains, providing wallet functionality and signature verification within the RGB++ protocol semantics."
    >
      <div className="space-y-12">
        {/* Introduction */}
        <section>
          <Card className="bg-white/5 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center text-white text-3xl">
                <Code className="h-8 w-8 mr-3 text-blue-400" />
                RGB++ SDK Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-300 leading-relaxed text-lg">
                At its core, the RGB++ SDK is focused on verifying and recording RGB++ asset ownership. In a regular BTC transaction,
                once the transaction is signed with a private key and broadcast to the network, it is considered complete after being
                validated and confirmed by most BTC nodes.
              </p>

              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-blue-500/20">
                <h3 className="font-semibold text-blue-300 mb-4 text-xl">Key Challenge: Isomorphic Binding</h3>
                <p className="text-blue-200 text-sm leading-relaxed">
                  However, with RGB++'s isomorphic binding, the consumption and generation of bound UTXOs and CKB Cells must maintain atomicity.
                  It relies on btc-assets-api and SPV Service to faithfully synchronize RGB++ asset transaction information from BTC to CKB,
                  while recording the resulting ownership changes in CKB Cells.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Core Functions */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">Core Functions</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Wallet Functionality */}
            <Card className="bg-white/5 backdrop-blur-xl border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center text-white text-2xl">
                  <Wallet className="h-7 w-7 mr-3 text-green-400" />
                  Wallet Functionality
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  The RGB++ SDK can be understood as a wallet operating within the RGB++ protocol semantics,
                  capable of managing assets on both BTC and CKB chains, thereby facilitating RGB++ asset operations.
                </p>

                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-6 rounded-xl border border-green-500/20">
                  <h4 className="font-semibold text-green-300 mb-3 text-lg">Dual-Chain Management</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mt-1">BTC</div>
                      <p className="text-green-200 text-sm">Manages Bitcoin UTXOs and transactions</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mt-1">CKB</div>
                      <p className="text-blue-200 text-sm">Manages CKB Cells and asset states</p>
                    </div>
                  </div>
                </div>

                <div className="bg-black/20 p-4 rounded-xl border border-white/10">
                  <h5 className="font-semibold text-white mb-3">Key Features</h5>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Cross-chain asset management</li>
                    <li>• Unified wallet interface</li>
                    <li>• Transaction coordination</li>
                    <li>• State synchronization</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Signature Verification */}
            <Card className="bg-white/5 backdrop-blur-xl border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center text-white text-2xl">
                  <Shield className="h-7 w-7 mr-3 text-orange-400" />
                  Signature Verification
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Beyond basic BTC/CKB private key signature verification, the RGB++ SDK extends the signature verification
                  process for RGB++ assets from the BTC chain to the CKB chain through the SPV Service and RGB++ contracts.
                </p>

                <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-6 rounded-xl border border-orange-500/20">
                  <h4 className="font-semibold text-orange-300 mb-3 text-lg">Extended Verification</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mt-1">1</div>
                      <p className="text-orange-200 text-sm">Standard BTC/CKB private key verification</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mt-1">2</div>
                      <p className="text-orange-200 text-sm">RGB++ asset signature verification via SPV</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mt-1">3</div>
                      <p className="text-orange-200 text-sm">Cross-chain commitment validation</p>
                    </div>
                  </div>
                </div>

                <div className="bg-black/20 p-4 rounded-xl border border-white/10">
                  <h5 className="font-semibold text-white mb-3">Verification Features</h5>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• RGB++ asset signature verifier</li>
                    <li>• Cross-chain verification</li>
                    <li>• SPV-based validation</li>
                    <li>• Contract integration</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Implementation Details */}
        <section>
          <Card className="bg-white/5 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center text-white text-2xl">
                <Layers className="h-7 w-7 mr-3 text-purple-400" />
                Implementation Architecture
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                At the implementation level, the RGB++ SDK extensively utilizes ccc, the standard CKB JavaScript/TypeScript SDK,
                for core functionalities such as transaction assembly, signing, and submission.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-500/20">
                  <h4 className="font-semibold text-purple-300 mb-4 flex items-center">
                    <Database className="h-5 w-5 mr-2" />
                    Transaction Assembly
                  </h4>
                  <p className="text-purple-200 text-sm leading-relaxed">
                    Utilizes ccc SDK for constructing both Bitcoin and CKB transactions with proper RGB++ commitments.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-6 rounded-xl border border-blue-500/20">
                  <h4 className="font-semibold text-blue-300 mb-4 flex items-center">
                    <Key className="h-5 w-5 mr-2" />
                    Transaction Signing
                  </h4>
                  <p className="text-blue-200 text-sm leading-relaxed">
                    Handles cryptographic signing for both chains while maintaining isomorphic binding requirements.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-6 rounded-xl border border-green-500/20">
                  <h4 className="font-semibold text-green-300 mb-4 flex items-center">
                    <Network className="h-5 w-5 mr-2" />
                    Transaction Submission
                  </h4>
                  <p className="text-green-200 text-sm leading-relaxed">
                    Coordinates submission of paired transactions across Bitcoin and CKB networks.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 p-6 rounded-xl border border-yellow-500/20">
                <h4 className="font-semibold text-yellow-300 mb-3 text-lg">CCC Integration</h4>
                <p className="text-yellow-200 text-sm leading-relaxed">
                  The RGB++ SDK leverages the comprehensive capabilities of the ccc (CKB Client Core) library,
                  which provides standardized interfaces for CKB blockchain interactions, ensuring compatibility
                  and reliability in RGB++ asset operations.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* SDK Repositories */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">Available SDKs</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Primary SDK */}
            <Card className="bg-white/5 backdrop-blur-xl border-white/10 border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="flex items-center text-white text-2xl">
                  <GitBranch className="h-7 w-7 mr-3 text-green-400" />
                  Primary SDK (Recommended)
                </CardTitle>
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30 mt-2">
                  Actively Developed
                </Badge>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  The actively developed and recommended RGB++ SDK, integrated with the ccc library for enhanced functionality and performance.
                </p>

                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-6 rounded-xl border border-green-500/20">
                  <h4 className="font-semibold text-green-300 mb-3 text-lg">Features</h4>
                  <ul className="text-green-200 text-sm space-y-2">
                    <li>• Latest RGB++ protocol features</li>
                    <li>• Integrated with ccc library</li>
                    <li>• TypeScript/JavaScript support</li>
                    <li>• Active maintenance and updates</li>
                    <li>• Comprehensive documentation</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <Button className="w-full bg-green-500 hover:bg-green-600">
                    <GitBranch className="h-4 w-4 mr-2" />
                    View Primary SDK Repository
                  </Button>
                  <p className="text-xs text-gray-400 text-center">
                    https://github.com/ckb-devrel/ccc/tree/rgbpp-sdk
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Legacy SDK */}
            <Card className="bg-white/5 backdrop-blur-xl border-white/10 border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center text-white text-2xl">
                  <Code className="h-7 w-7 mr-3 text-blue-400" />
                  Legacy SDK
                </CardTitle>
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 mt-2">
                  Continuously Maintained
                </Badge>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  The original RGB++ SDK that continues to be maintained for backward compatibility and existing projects.
                </p>

                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-blue-500/20">
                  <h4 className="font-semibold text-blue-300 mb-3 text-lg">Features</h4>
                  <ul className="text-blue-200 text-sm space-y-2">
                    <li>• Stable and proven implementation</li>
                    <li>• TypeScript/JavaScript support</li>
                    <li>• Backward compatibility</li>
                    <li>• Continuous maintenance</li>
                    <li>• Existing project support</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <Button variant="outline" className="w-full border-blue-500/30 text-blue-300 hover:bg-blue-500/10">
                    <GitBranch className="h-4 w-4 mr-2" />
                    View Legacy SDK Repository
                  </Button>
                  <p className="text-xs text-gray-400 text-center">
                    https://github.com/RGBPlusPlus/rgbpp-sdk
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Usage Scenarios */}
        <section>
          <Card className="bg-white/5 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center text-white text-2xl">
                <Wallet className="h-7 w-7 mr-3 text-cyan-400" />
                Usage Scenarios
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                The RGB++ SDK serves multiple roles in the RGB++ ecosystem, providing essential functionality for various use cases.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-6 rounded-xl border border-cyan-500/20">
                  <h4 className="font-semibold text-cyan-300 mb-4 text-lg">Developer Integration</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mt-1">•</div>
                      <p className="text-cyan-200 text-sm">DApp development and integration</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mt-1">•</div>
                      <p className="text-cyan-200 text-sm">Custom wallet implementations</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mt-1">•</div>
                      <p className="text-cyan-200 text-sm">Exchange and service integrations</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-500/20">
                  <h4 className="font-semibold text-purple-300 mb-4 text-lg">Asset Operations</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mt-1">•</div>
                      <p className="text-purple-200 text-sm">RGB++ asset issuance and management</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mt-1">•</div>
                      <p className="text-purple-200 text-sm">Cross-chain asset transfers</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mt-1">•</div>
                      <p className="text-purple-200 text-sm">Asset verification and validation</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Getting Started */}
        <section>
          <Card className="bg-white/5 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center text-white text-2xl">
                <Code className="h-7 w-7 mr-3 text-yellow-400" />
                Getting Started
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Ready to start building with RGB++ SDK? Choose your preferred SDK and explore the comprehensive documentation and examples.
              </p>

              <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 p-6 rounded-xl border border-yellow-500/20">
                <h4 className="font-semibold text-yellow-300 mb-3 text-lg">Quick Start Steps</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mt-1">1</div>
                    <p className="text-yellow-200 text-sm">Choose your preferred SDK (Primary recommended)</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mt-1">2</div>
                    <p className="text-yellow-200 text-sm">Install the SDK via npm or yarn</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mt-1">3</div>
                    <p className="text-yellow-200 text-sm">Follow the UDT example in our Quick Start guide</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mt-1">4</div>
                    <p className="text-yellow-200 text-sm">Explore advanced features and integrations</p>
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
            Now that you understand RGB++ SDK, explore other core components and see practical implementation examples.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/spv-service">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-white/10">
                <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                Back to SPV Service
              </Button>
            </Link>
            <Link href="/btc-assets-api">
              <Button className="bg-blue-500 hover:bg-blue-600">
                btc-assets-api
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/quickstart">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-white/10">
                Quick Start Guide
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </DocLayout>
  )
} 