"use client"

import { DocLayout } from "@/components/doc-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, ExternalLink, ArrowLeft, ArrowRight } from "lucide-react"
import NextLink from "next/link"

export default function XUDTScriptPage() {
  return (
    <DocLayout
      title="xUDT Script"
      description="Extensible User-Defined-Token implementation on CKB, similar to ERC-20 on Ethereum."
    >
      <div className="space-y-8">
        {/* Main Definition */}
        <Card className="bg-white/5 backdrop-blur-xl border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center text-white text-3xl">
              <Shield className="h-8 w-8 mr-3 text-cyan-400" />
              xUDT Script
              <Badge className="ml-4 bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
                CKB
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-6 rounded-xl border border-cyan-500/20">
              <p className="text-cyan-300 leading-relaxed text-lg">
                Extensible UDT(xUDT) is the User-Defined-Token(fungible token) Script implementation on CKB. You can think of it as the ERC-20 smart contract on Ethereum.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-black/20 p-4 rounded-xl border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Fungible Tokens</h4>
                  <p className="text-gray-300 text-sm">
                    Implements fungible token functionality similar to ERC-20
                  </p>
                </div>
                <div className="bg-black/20 p-4 rounded-xl border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Extensible Design</h4>
                  <p className="text-gray-300 text-sm">
                    Allows for custom extensions and additional functionality
                  </p>
                </div>
                <div className="bg-black/20 p-4 rounded-xl border border-white/10">
                  <h4 className="font-semibold text-white mb-2">User-Defined</h4>
                  <p className="text-gray-300 text-sm">
                    Users can define their own token parameters and rules
                  </p>
                </div>
                <div className="bg-black/20 p-4 rounded-xl border border-white/10">
                  <h4 className="font-semibold text-white mb-2">CKB Native</h4>
                  <p className="text-gray-300 text-sm">
                    Built specifically for CKB's Cell model architecture
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Comparison with ERC-20</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-blue-500/20">
                  <h4 className="font-semibold text-blue-300 text-lg mb-4">ERC-20 (Ethereum)</h4>
                  <ul className="text-blue-200 text-sm space-y-2">
                    <li>• Account-based model</li>
                    <li>• Global state management</li>
                    <li>• Gas fees for operations</li>
                    <li>• Smart contract based</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 p-6 rounded-xl border border-cyan-500/20">
                  <h4 className="font-semibold text-cyan-300 text-lg mb-4">xUDT (CKB)</h4>
                  <ul className="text-cyan-200 text-sm space-y-2">
                    <li>• UTXO-based model</li>
                    <li>• Local state in Cells</li>
                    <li>• Flexible fee structure</li>
                    <li>• Type Script based</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Role in RGB++</h3>
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-500/20">
                <p className="text-purple-300 leading-relaxed">
                  xUDT Scripts can be used in RGB++ to create Bitcoin-backed fungible tokens. The tokens exist as CKB Cells
                  but are controlled by Bitcoin UTXOs through isomorphic binding, combining Bitcoin's security with CKB's
                  programmable token functionality.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Use Cases</h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-4 rounded-xl border border-green-500/20">
                  <h4 className="font-semibold text-green-300 mb-2">Stablecoins</h4>
                  <p className="text-green-200 text-sm">
                    Create Bitcoin-backed stablecoins with programmable features
                  </p>
                </div>
                <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-4 rounded-xl border border-orange-500/20">
                  <h4 className="font-semibold text-orange-300 mb-2">Utility Tokens</h4>
                  <p className="text-orange-200 text-sm">
                    Build utility tokens for dApps with Bitcoin security
                  </p>
                </div>
                <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 p-4 rounded-xl border border-indigo-500/20">
                  <h4 className="font-semibold text-indigo-300 mb-2">Governance Tokens</h4>
                  <p className="text-indigo-200 text-sm">
                    Implement DAO governance tokens with Bitcoin ownership
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">External Resources</h3>
              <Button variant="outline" className="border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10">
                <ExternalLink className="h-4 w-4 mr-2" />
                View xUDT Documentation
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-white/10">
          <NextLink href="/glossary/ckb-script">
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-white/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: CKB Script
            </Button>
          </NextLink>
          <NextLink href="/glossary/spv">
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-white/10">
              Next: SPV
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </NextLink>
        </div>
      </div>
    </DocLayout>
  )
} 