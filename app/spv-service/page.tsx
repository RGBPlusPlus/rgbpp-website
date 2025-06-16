"use client"

import { DocLayout } from "@/components/doc-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Network, Shield, Database, Server, ExternalLink, ArrowRight, GitBranch, Hash, Clock, Layers } from "lucide-react"
import Link from "next/link"

export default function SPVServicePage() {
  return (
    <DocLayout
      title="SPV Service"
      description="Bitcoin SPV light client on CKB that maintains synchronized Bitcoin block headers, enabling smart contracts to access and verify Bitcoin blockchain data."
    >
      <div className="space-y-12">
        {/* Introduction */}
        <section>
          <Card className="bg-white/5 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center text-white text-3xl">
                <Network className="h-8 w-8 mr-3 text-blue-400" />
                SPV Service Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-300 leading-relaxed text-lg">
                Within the programmable layer of RGB++, a Bitcoin SPV light client maintains a synchronized record of Bitcoin block headers,
                enabling smart contracts to access and verify Bitcoin blockchain data, including historical transaction records, block difficulty,
                network hash rate, current block height, timestamps, and detailed transaction information, thereby providing a secure and efficient
                bridge between Bitcoin and CKB networks.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-blue-500/20">
                  <h3 className="font-semibold text-blue-300 mb-4 text-xl">Core Functions</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mt-1">1</div>
                      <p className="text-blue-200 text-sm">Prove if a header belongs to the Bitcoin chain</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mt-1">2</div>
                      <p className="text-blue-200 text-sm">Prove if a transaction is in a Bitcoin block</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-6 rounded-xl border border-green-500/20">
                  <h3 className="font-semibold text-green-300 mb-4 text-xl">Implementation</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mt-1">1</div>
                      <p className="text-green-200 text-sm">Synchronizes Bitcoin headers to SPV clients on CKB</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mt-1">2</div>
                      <p className="text-green-200 text-sm">Generate proofs for Bitcoin transactions verification</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Technical Architecture */}
        <section>
          <Card className="bg-white/5 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center text-white text-2xl">
                <Layers className="h-7 w-7 mr-3 text-purple-400" />
                Technical Architecture
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Given on-chain verification comes with resource constraints, such as the inability to afford 100 MiB of storage or 30 seconds of computation on CKB,
                the MMR is introduced to address this issue by only saving the MMR root of Bitcoin headers on CKB.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-500/20">
                  <h4 className="font-semibold text-purple-300 mb-4 flex items-center">
                    <Hash className="h-5 w-5 mr-2" />
                    MMR (Merkle Mountain Range)
                  </h4>
                  <p className="text-purple-200 text-sm leading-relaxed mb-4">
                    MMR provides a compact representation of the entire header chain with efficient verification capabilities,
                    making it ideal for resource-constrained environments.
                  </p>
                  <div className="bg-black/30 p-3 rounded-lg">
                    <p className="text-purple-200 text-xs">
                      ✓ Efficient storage<br />
                      ✓ Fast verification<br />
                      ✓ Resource optimized
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-6 rounded-xl border border-orange-500/20">
                  <h4 className="font-semibold text-orange-300 mb-4 flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    Merkle Proof
                  </h4>
                  <p className="text-orange-200 text-sm leading-relaxed mb-4">
                    Merkle proof is used to verify that a transaction - or specifically, its hash - was included in a given block.
                  </p>
                  <div className="bg-black/30 p-3 rounded-lg">
                    <p className="text-orange-200 text-xs">
                      ✓ Transaction inclusion proof<br />
                      ✓ Cryptographic security<br />
                      ✓ Minimal data requirements
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* SPV Type Script */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">SPV Type Script</h2>

          <Card className="bg-white/5 backdrop-blur-xl border-white/10 mb-8">
            <CardHeader>
              <CardTitle className="text-white text-xl">Architecture Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed mb-6">
                A Bitcoin SPV on CKB consists of cells that are managed by the CKB Bitcoin SPV Type Script and identified by the script arguments.
                A Bitcoin SPV instance is a collection of cells containing two types of cells: SPV info cell and SPV client cell.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            {/* SPV Client Cell */}
            <Card className="bg-white/5 backdrop-blur-xl border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center text-white text-2xl">
                  <Database className="h-7 w-7 mr-3 text-cyan-400" />
                  SPV Client Cell
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  A cell is identified as an SPV client cell if its type script matches the SPV type script.
                  SPV client cells store the Bitcoin state. Each Bitcoin SPV instance includes a minimum of three SPV client cells.
                </p>

                <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-6 rounded-xl border border-cyan-500/20">
                  <h4 className="font-semibold text-cyan-300 mb-3 text-lg">Cell Structure</h4>
                  <div className="bg-black/30 p-4 rounded-lg">
                    <pre className="text-cyan-200 text-sm font-mono">
                      {`Client Cell:  
    Type Script:
        code hash: "..."
        hash type: "type"
        args: "typeid + clients count + flags"
    Data:
        - id
        - btc tip block hash
        - btc headers mmr root
        - target adjust info`}
                    </pre>
                  </div>
                </div>

                <div className="bg-black/20 p-4 rounded-xl border border-white/10">
                  <h5 className="font-semibold text-white mb-3">Key Features</h5>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Stores Bitcoin blockchain state</li>
                    <li>• Minimum of 3 cells per SPV instance</li>
                    <li>• Contains MMR roots for verification</li>
                    <li>• Manages target adjustment information</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* SPV Info Cell */}
            <Card className="bg-white/5 backdrop-blur-xl border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center text-white text-2xl">
                  <Server className="h-7 w-7 mr-3 text-green-400" />
                  SPV Info Cell
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  The SPV info cell stores the basic information of the current Bitcoin SPV instance, such as tip_client_id.
                  Each Bitcoin SPV instance contains only one SPV info cell.
                </p>

                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-6 rounded-xl border border-green-500/20">
                  <h4 className="font-semibold text-green-300 mb-3 text-lg">Cell Structure</h4>
                  <div className="bg-black/30 p-4 rounded-lg">
                    <pre className="text-green-200 text-sm font-mono">
                      {`Info Cell:
    Type Script:
        code hash: "..."
        hash type: "type"
        args: "typeid + clients count + flags"
    Data: 
        - tip client cell id`}
                    </pre>
                  </div>
                </div>

                <div className="bg-black/20 p-4 rounded-xl border border-white/10">
                  <h5 className="font-semibold text-white mb-3">Characteristics</h5>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• One per SPV instance</li>
                    <li>• Contains tip client cell ID</li>
                    <li>• Manages current state pointer</li>
                    <li>• Coordinates client cell updates</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Ring Structure */}
        <section>
          <Card className="bg-white/5 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center text-white text-2xl">
                <Clock className="h-7 w-7 mr-3 text-yellow-400" />
                Ring Structure & Updates
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                The SPV cells are initialized in a single transaction, resulting in one SPV info cell and a minimum of three SPV client cells.
                The cells must be arranged consecutively, with the SPV info cell positioned first, followed by the SPV client cells in ascending order of their IDs.
              </p>

              <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 p-6 rounded-xl border border-yellow-500/20">
                <h4 className="font-semibold text-yellow-300 mb-4 text-lg">Ring Structure Operation</h4>
                <div className="space-y-4">
                  <div className="bg-black/30 p-4 rounded-lg">
                    <h5 className="font-semibold text-white mb-3">Initialization</h5>
                    <p className="text-yellow-200 text-sm">
                      Upon initialization, all client cells must contain identical data. The SPV info cell points to the current tip client.
                    </p>
                  </div>

                  <div className="bg-black/30 p-4 rounded-lg">
                    <h5 className="font-semibold text-white mb-3">Update Process</h5>
                    <p className="text-yellow-200 text-sm">
                      The SPV client cell with an ID matching the tip_client_id contains the most recent data, while the next cell in sequence holds the oldest data.
                      This arrangement forms a ring structure where the sequence wraps around from the last cell back to the first cell.
                    </p>
                  </div>

                  <div className="bg-black/30 p-4 rounded-lg">
                    <h5 className="font-semibold text-white mb-3">Data Rotation</h5>
                    <p className="text-yellow-200 text-sm">
                      During updates, new data is written to the cell currently holding the oldest data, and the tip_client_id in the SPV info cell
                      is updated to point to this newly updated cell, effectively marking it as the new "latest data" holder.
                    </p>
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
                    Design Documentation
                  </h4>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full border-blue-500/30 text-blue-300 hover:bg-blue-500/10">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      CKB Bitcoin SPV Design
                    </Button>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-6 rounded-xl border border-green-500/20">
                  <h4 className="font-semibold text-green-300 mb-4 flex items-center">
                    <GitBranch className="h-5 w-5 mr-2" />
                    Implementation
                  </h4>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full border-green-500/30 text-green-300 hover:bg-green-500/10">
                      <GitBranch className="h-4 w-4 mr-2" />
                      SPV Type Script Contracts
                    </Button>
                    <Button variant="outline" className="w-full border-green-500/30 text-green-300 hover:bg-green-500/10">
                      <GitBranch className="h-4 w-4 mr-2" />
                      Bitcoin SPV Library
                    </Button>
                    <Button variant="outline" className="w-full border-green-500/30 text-green-300 hover:bg-green-500/10">
                      <GitBranch className="h-4 w-4 mr-2" />
                      CKB Bitcoin SPV Service
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
            Now that you understand SPV Service, explore other core components and learn how to implement RGB++ in practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/components">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-white/10">
                <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                Back to RGB++ Scripts
              </Button>
            </Link>
            <Link href="/rgbpp-sdk">
              <Button className="bg-blue-500 hover:bg-blue-600">
                RGB++ SDK
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