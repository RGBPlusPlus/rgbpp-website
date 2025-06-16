"use client"

import { DocLayout } from "@/components/doc-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Lock, Shield, Bitcoin, Network, ArrowRight, ExternalLink, CheckCircle, AlertTriangle, Layers } from "lucide-react"
import Link from "next/link"

export default function ConceptsPage() {
  return (
    <DocLayout
      title="Core Concepts"
      description="Master the fundamental concepts of RGB++ Protocol including single-use seals, blockchain-enhanced state validation, and key differences from the RGB protocol."
    >
      <div className="space-y-12">
        {/* Introduction */}
        <section>
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-blue-500/20 mb-8">
            <p className="text-blue-200 leading-relaxed">
              As the name suggests, RGB++ protocol is inspired by the <strong>RGB protocol</strong>. RGB++ inherits the core concepts from it,
              while leveraging CKB's unique advantages to enhance and extend these concepts.
            </p>
            <p className="text-blue-200 leading-relaxed mt-4">
              The following are the core concepts of the RGB++ protocol and key differences from the RGB protocol.
            </p>
          </div>
        </section>

        {/* Single-Use Seal */}
        <section>
          <Card className="bg-white/5 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center text-white text-3xl">
                <Lock className="h-8 w-8 mr-3 text-orange-400" />
                Single-Use Seal
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-300 leading-relaxed text-lg">
                Single-use seals are a cryptographic mechanism that locks a seal on a message, ensuring that the message
                can only be read or used once. The RGB++ protocol leverages Bitcoin UTXOs' inherent single-use property
                to implement this sealing mechanism.
              </p>

              <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-6 rounded-xl border border-orange-500/20">
                <h3 className="font-semibold text-orange-300 mb-4 text-xl flex items-center">
                  <Bitcoin className="h-6 w-6 mr-2" />
                  How RGB++ Implements Single-Use Seals
                </h3>
                <p className="text-orange-200 leading-relaxed mb-4">
                  Through the use of single-use seals, the RGB++ protocol creates assets that are cryptographically bound to specific Bitcoin UTXOs.
                  The ownership of these corresponding UTXOs directly establishes ownership of the RGB++ issued assets. To transfer a RGB++ asset,
                  the holder must spend their corresponding UTXO, which effectively consumes the single-use seal and ensures the asset can only be transferred once.
                </p>
              </div>

              <div className="bg-black/20 p-6 rounded-xl border border-white/10">
                <h4 className="font-semibold text-white mb-4 text-lg">Key Properties</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold text-white text-sm">Cryptographic Binding</h5>
                        <p className="text-gray-300 text-sm">Assets are cryptographically bound to specific Bitcoin UTXOs</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold text-white text-sm">Direct Ownership</h5>
                        <p className="text-gray-300 text-sm">UTXO ownership directly establishes RGB++ asset ownership</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold text-white text-sm">Single-Use Guarantee</h5>
                        <p className="text-gray-300 text-sm">Assets can only be transferred once per UTXO consumption</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold text-white text-sm">Bitcoin Security</h5>
                        <p className="text-gray-300 text-sm">Inherits Bitcoin's consensus security model</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-blue-500/20">
                <h4 className="font-semibold text-blue-300 mb-3 flex items-center">
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Learn More
                </h4>
                <p className="text-blue-200 text-sm mb-4">
                  For a comprehensive explanation of single-use seals, please refer to this technical article by Peter Todd.
                </p>
                <Button variant="outline" className="border-blue-500/30 text-blue-300 hover:bg-blue-500/10">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  State Machine Consensus Building Blocks
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Blockchain-Enhanced State Validation */}
        <section>
          <Card className="bg-white/5 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center text-white text-3xl">
                <Shield className="h-8 w-8 mr-3 text-green-400" />
                Blockchain-Enhanced State Validation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-300 leading-relaxed text-lg">
                The concept of creating and managing assets on Bitcoin has been a long-standing pursuit in the cryptocurrency space.
                While Bitcoin's UTXO model provides a robust foundation for value transfer, its intentionally limited scripting system
                falls short in implementing the sophisticated security validations required for complex asset management, thus creating
                a need for complementary off-chain smart contract solutions.
              </p>

              {/* RGB Protocol Approach */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">RGB Protocol Approach</h3>

                <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 p-6 rounded-xl border border-yellow-500/20">
                  <h4 className="font-semibold text-yellow-300 mb-4 text-lg flex items-center">
                    <Network className="h-6 w-6 mr-2" />
                    Client-Side Validation
                  </h4>
                  <p className="text-yellow-200 leading-relaxed mb-4">
                    The RGB protocol employs client-side validation, where transaction verification doesn't require scanning the entire blockchain
                    to collect contract state changes. Instead, it only needs a series of relevant Bitcoin transactions, the RGB transactions
                    committed by these Bitcoin transactions, and their block inclusion proofs (based on Merkle proofs from block headers).
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/20">
                      <h5 className="font-semibold text-green-300 mb-2 flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2" />
                        Benefits
                      </h5>
                      <p className="text-green-200 text-sm">
                        Significantly reduces the cost of verifying a specific state of a contract
                      </p>
                    </div>
                    <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/20">
                      <h5 className="font-semibold text-red-300 mb-2 flex items-center">
                        <AlertTriangle className="h-5 w-5 mr-2" />
                        Challenges
                      </h5>
                      <p className="text-red-200 text-sm">
                        Ordinary users often lack capability to maintain complete transaction histories and provide transaction proofs
                      </p>
                    </div>
                  </div>
                </div>

                {/* RGB++ Approach */}
                <h3 className="text-2xl font-bold text-white">RGB++ Enhanced Approach</h3>

                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-blue-500/20">
                  <h4 className="font-semibold text-blue-300 mb-4 text-lg flex items-center">
                    <Layers className="h-6 w-6 mr-2" />
                    On-Chain Validation with CKB
                  </h4>
                  <p className="text-blue-200 leading-relaxed mb-4">
                    RGB++ takes a different approach by leveraging CKB's Turing-complete script system to implement asset security checks.
                    This design offers a more straightforward and accessible verification process for all users.
                  </p>

                  <div className="space-y-4">
                    <div className="bg-black/20 p-4 rounded-lg border border-white/10">
                      <h5 className="font-semibold text-white mb-3">Key Advantages</h5>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                          <div>
                            <p className="text-gray-300 text-sm">
                              <strong>Eliminates complex client-side validation</strong> - No need for users to maintain transaction histories
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                          <div>
                            <p className="text-gray-300 text-sm">
                              <strong>Maintains system transparency</strong> - All validation happens on-chain with public verification
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                          <div>
                            <p className="text-gray-300 text-sm">
                              <strong>Reduces user burden</strong> - Users only need to verify relevant CKB transactions
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                          <div>
                            <p className="text-gray-300 text-sm">
                              <strong>Straightforward verification</strong> - Simple process to confirm RGB++ transaction state calculations
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Comparison */}
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-500/20">
                  <h4 className="font-semibold text-purple-300 mb-4 text-lg">RGB vs RGB++ Validation</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h5 className="font-semibold text-white">RGB Protocol</h5>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Client-side validation required</li>
                        <li>• Users maintain transaction histories</li>
                        <li>• Complex proof generation</li>
                        <li>• Higher technical barrier for users</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h5 className="font-semibold text-white">RGB++ Protocol</h5>
                      <ul className="text-purple-200 text-sm space-y-2">
                        <li>• On-chain validation with CKB</li>
                        <li>• No local state maintenance needed</li>
                        <li>• Simplified verification process</li>
                        <li>• Lower barrier for end users</li>
                      </ul>
                    </div>
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
            Now that you understand the core concepts, explore the typical transaction flow and learn how to build with RGB++.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/introduction">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-white/10">
                <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                Back to Introduction
              </Button>
            </Link>
            <Link href="/components">
              <Button className="bg-purple-500 hover:bg-purple-600">
                Core Components
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
