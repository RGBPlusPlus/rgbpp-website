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
      description="Learn about RGB++ Protocol, the revolutionary technology that unifies Bitcoin's security with CKB's programmability."
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
              a binding between Bitcoin UTXOs and Turing-complete CKB Scripts. This binding enables Bitcoin's security
              to work seamlessly with CKB's programmability.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              At its core, RGB++ Protocol uses a specific Bitcoin UTXO as a <strong className="text-white">single-use seal</strong> -
              a cryptographic commitment that can only be used once, leveraging Bitcoin's inherent UTXO properties.
              This UTXO, along with its corresponding CKB cells, serves as the cryptographic proof, or the commitment,
              of ownership for RGB++ assets. When a single-use seal is consumed, the ownership of the RGB++ asset is guaranteed to be transferred to the new UTXO or the wallet controlling it.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              The protocol employs CKB Cells to represent RGB++ asset ownership relationships, establishing an
              isomorphic binding with Bitcoin UTXOs. In this architecture, CKB serves dual roles: as a public
              database for assets and as an off-chain pre-settlement layer.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              RGB++ Protocol unifies Bitcoin's security with CKB's programmability, enabling sophisticated
              applications directly on Bitcoin. Developers can now create advanced smart contracts that power
              decentralized applications, from IDO platforms to liquid staking pools, and more.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              For more detailed information, please refer to the{' '}
              <a
                href="https://talk.nervos.org/t/rgb-protocol-light-paper-translation/7790"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 underline"
              >
                RGB++ Protocol Light Paper
              </a>{' '}
              or its{' '}
              <a
                href="https://talk.nervos.org/t/rgb-protocol-light-paper/7733"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 underline"
              >
                Chinese version
              </a>
              .
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
                </ul>
              </CardContent>
            </Card>
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
                      <Badge className="text-xs bg-white/20 text-white border-white/30 font-semibold">Step {step.step}</Badge>
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




      </div>
    </DocLayout>
  )
}
