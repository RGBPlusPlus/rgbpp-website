"use client"

import { DocLayout } from "@/components/doc-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Book, Bitcoin, Network, Shield, Zap, Layers, ExternalLink, Code, ArrowRight, Server, Database, Lock, Globe, FileText, GitBranch, Workflow, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function IntroductionPage() {
  return (
    <DocLayout
      title="Introduction"
      description="Learn about RGB++ Protocol, the revolutionary technology that bridges Bitcoin's security with CKB's programmability through isomorphic binding."
    >
      <div className="space-y-12">
        {/* What is RGB++? */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Bitcoin className="h-8 w-8 mr-3 text-orange-400" />
            What is RGB++?
          </h2>
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              The RGB++ Protocol is a simple protocol that enhances Bitcoin Layer 1 programmability by establishing
              a binding between Bitcoin UTXOs and Turing-complete CKB Scripts. This binding creates a powerful bridge
              between Bitcoin's security and CKB's programmability.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              At its core, RGB++ Protocol uses a specific Bitcoin UTXO as a <strong className="text-white">single-use seal</strong> -
              a cryptographic commitment that can only be used once, leveraging Bitcoin's inherent UTXO properties.
              This UTXO, along with its corresponding CKB cells, serves as the cryptographic proof, or the commitment,
              of ownership for RGB++ assets.
            </p>

            <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700/30">
              <div className="flex items-start space-x-4">
                <Shield className="h-6 w-6 text-orange-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-orange-300 mb-2">Key Innovation</h4>
                  <p className="text-gray-300 text-sm">
                    When a single-use seal is consumed, the ownership of the RGB++ asset is guaranteed to be
                    transferred to the new UTXO or the wallet controlling it, ensuring cryptographic security.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">
              The protocol employs CKB Cells to represent RGB++ asset ownership relationships, establishing an
              isomorphic binding with Bitcoin UTXOs. In this architecture, CKB serves dual roles: as a public
              database for assets and as an off-chain pre-settlement layer.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              RGB++ Protocol bridges Bitcoin's security with CKB's programmability, enabling sophisticated
              applications directly on Bitcoin. Developers can now create advanced smart contracts that power
              decentralized applications, from IDO platforms to liquid staking pools, and more.
            </p>
          </div>
        </section>

        {/* Architecture Overview */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Layers className="h-8 w-8 mr-3 text-blue-400" />
            Architecture Overview
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="bg-white/5 backdrop-blur-xl border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Bitcoin className="h-6 w-6 mr-2 text-orange-400" />
                  Bitcoin Layer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li>• UTXO management and single-use seals</li>
                  <li>• Cryptographic commitments via OP_RETURN</li>
                  <li>• Asset ownership representation</li>
                  <li>• Cross-chain transaction initiation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-xl border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Network className="h-6 w-6 mr-2 text-green-400" />
                  CKB Layer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li>• Programmable scripts and smart contracts</li>
                  <li>• Asset state management and validation</li>
                  <li>• Public database for RGB++ assets</li>
                  <li>• Off-chain pre-settlement layer</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Blockchain-Enhanced State Validation */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <CheckCircle className="h-8 w-8 mr-3 text-green-400" />
            Blockchain-Enhanced State Validation
          </h2>
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              The concept of creating and managing assets on Bitcoin has been a long-standing pursuit in the
              cryptocurrency space. While Bitcoin's UTXO model provides a robust foundation for value transfer,
              its intentionally limited scripting system falls short in implementing the sophisticated security
              validations required for complex asset management.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white/5 backdrop-blur-xl border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Database className="h-6 w-6 mr-2 text-blue-400" />
                    Traditional RGB Approach
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Client-side validation</li>
                    <li>• Complex transaction history maintenance</li>
                    <li>• Difficulty providing transaction proofs</li>
                    <li>• Resource-intensive for simple clients</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-xl border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Zap className="h-6 w-6 mr-2 text-green-400" />
                    RGB++ Innovation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• On-chain security checks via CKB</li>
                    <li>• Straightforward verification process</li>
                    <li>• System transparency maintained</li>
                    <li>• Reduced burden on end users</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700/30">
              <div className="flex items-start space-x-4">
                <Shield className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-green-300 mb-2">Enhanced Security Model</h4>
                  <p className="text-gray-300 text-sm">
                    RGB++ leverages CKB's Turing-complete script system to implement asset security checks.
                    Users only need to verify relevant transactions on CKB to confirm the correctness of
                    RGB++ transaction state calculations, significantly reducing complexity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Typical Transaction Flow */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Workflow className="h-8 w-8 mr-3 text-green-400" />
            Typical Transaction Flow
          </h2>
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Each RGB++ transaction generates a pair of corresponding transactions: one on Bitcoin and one on CKB.
              This dual-chain approach ensures both security and programmability.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Off-chain Pre-computation",
                  description: "Calculate commitment using CKB transaction, Bitcoin UTXOs, and placeholder values",
                  icon: Database,
                  color: "text-blue-400"
                },
                {
                  step: "2",
                  title: "Bitcoin Transaction",
                  description: "Submit Bitcoin transaction with OP_RETURN commitment and create new UTXO",
                  icon: Bitcoin,
                  color: "text-orange-400"
                },
                {
                  step: "3",
                  title: "CKB Transaction",
                  description: "Submit CKB transaction with RGB++ asset state recorded in output data",
                  icon: Network,
                  color: "text-green-400"
                },
                {
                  step: "4",
                  title: "On-chain Verification",
                  description: "Validate UTXO spending, Bitcoin transaction existence, and state transitions",
                  icon: CheckCircle,
                  color: "text-blue-400"
                }
              ].map((step, index) => (
                <Card key={index} className="bg-white/5 backdrop-blur-xl border-white/10">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">Step {step.step}</Badge>
                      <step.icon className={`h-5 w-5 ${step.color}`} />
                    </div>
                    <CardTitle className="text-white text-sm">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-xs leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700/30">
              <div className="flex items-start space-x-4">
                <Lock className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-blue-300 mb-2">Isomorphic Binding</h4>
                  <p className="text-gray-300 text-sm">
                    The commitment formula: <code className="bg-black/20 px-2 py-1 rounded text-xs">commitment = hash(CKB_TX_B | btc_utxo#1 | btc_utxo#2)</code>
                    <br />This establishes a secure binding between Bitcoin UTXOs and CKB cells through RGB++ Script arguments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Zap className="h-8 w-8 mr-3 text-orange-400" />
            Key Features
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Single-Use Seals",
                description: "Bitcoin UTXOs serve as cryptographic commitments that can only be used once, ensuring asset uniqueness and preventing double-spending.",
                color: "text-blue-400"
              },
              {
                icon: Network,
                title: "Isomorphic Binding",
                description: "One-to-one mapping mechanism linking Bitcoin UTXOs to CKB Cells, enabling ownership synchronization.",
                color: "text-green-400"
              },
              {
                icon: Code,
                title: "Turing-Complete Scripts",
                description: "Leverage CKB's RISC-V based virtual machine for sophisticated smart contract logic.",
                color: "text-green-400"
              },
              {
                icon: Layers,
                title: "Cross-Chain Assets",
                description: "Seamless asset transfers and state management between Bitcoin and CKB networks.",
                color: "text-orange-400"
              },
              {
                icon: Shield,
                title: "SPV Verification",
                description: "Bitcoin light client implementation on CKB enables secure transaction verification.",
                color: "text-orange-400"
              },
              {
                icon: Zap,
                title: "Enhanced Validation",
                description: "Blockchain-enhanced state validation that maintains privacy while ensuring security.",
                color: "text-blue-400"
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-white/20 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <feature.icon className={`h-6 w-6 mr-2 ${feature.color}`} />
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why RGB++? */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">Why RGB++?</h2>
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              RGB++ Protocol addresses the fundamental limitations of Bitcoin's scripting system while maintaining
              its security guarantees. By leveraging CKB's programmability, RGB++ enables sophisticated applications
              that were previously impossible on Bitcoin.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Advantages over Traditional Approaches</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Decentralized Authentication without centralized entities</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Robust P2P Network infrastructure</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Mature Virtual Machines and Contract Languages</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Efficient Shared States and Hosted Contracts</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Technical Innovation</h3>
                <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700/30">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    RGB++ takes a different approach by leveraging CKB's Turing-complete script system to implement
                    asset security checks. This design offers a more straightforward and accessible verification
                    process for all users while maintaining system transparency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="bg-gray-800/30 p-8 rounded-xl border border-gray-700/30">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
          <p className="text-gray-300 mb-6">
            Now that you understand what RGB++ is and how it works, explore the ecosystem and start building with Bitcoin's programmable layer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/quickstart">
              <Button className="bg-orange-500 hover:bg-orange-600">
                <Zap className="mr-2 h-4 w-4" />
                Quick Start Guide
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/concepts">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-white/10">
                <Book className="mr-2 h-4 w-4" />
                Core Concepts
              </Button>
            </Link>
            <Link href="/source-code">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-white/10">
                <Code className="mr-2 h-4 w-4" />
                Resources & Code
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </DocLayout>
  )
}
