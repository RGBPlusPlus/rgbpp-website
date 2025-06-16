"use client"

import { DocLayout } from "@/components/doc-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Network, ExternalLink, ArrowLeft, ArrowRight } from "lucide-react"
import NextLink from "next/link"

export default function SPVPage() {
  return (
    <DocLayout
      title="SPV"
      description="Simple Payment Verification - lightweight Bitcoin transaction verification using Merkle proofs."
    >
      <div className="space-y-8">
        {/* Main Definition */}
        <Card className="bg-white/5 backdrop-blur-xl border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center text-white text-3xl">
              <Network className="h-8 w-8 mr-3 text-indigo-400" />
              SPV
              <Badge className="ml-4 bg-indigo-500/20 text-indigo-300 border-indigo-500/30">
                Bitcoin
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 p-6 rounded-xl border border-indigo-500/20">
              <p className="text-indigo-300 leading-relaxed text-lg">
                Simple Payment Verification (SPV) allows a transaction receiver to confirm that the sender has control of the source funds of the payment they are offering, without needing to download the entire blockchain. This is achieved using Merkle proofs.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Key Characteristics</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-black/20 p-4 rounded-xl border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Lightweight</h4>
                  <p className="text-gray-300 text-sm">
                    No need to download the entire blockchain for verification
                  </p>
                </div>
                <div className="bg-black/20 p-4 rounded-xl border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Merkle Proofs</h4>
                  <p className="text-gray-300 text-sm">
                    Uses cryptographic proofs to verify transaction inclusion
                  </p>
                </div>
                <div className="bg-black/20 p-4 rounded-xl border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Payment Verification</h4>
                  <p className="text-gray-300 text-sm">
                    Confirms sender has control of source funds
                  </p>
                </div>
                <div className="bg-black/20 p-4 rounded-xl border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Efficient</h4>
                  <p className="text-gray-300 text-sm">
                    Reduces bandwidth and storage requirements significantly
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">How SPV Works</h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-4 rounded-xl border border-blue-500/20">
                  <h4 className="font-semibold text-blue-300 mb-2">1. Block Headers</h4>
                  <p className="text-blue-200 text-sm">
                    SPV clients download only block headers, not full blocks
                  </p>
                </div>
                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-4 rounded-xl border border-green-500/20">
                  <h4 className="font-semibold text-green-300 mb-2">2. Merkle Path</h4>
                  <p className="text-green-200 text-sm">
                    Request Merkle path for specific transactions of interest
                  </p>
                </div>
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4 rounded-xl border border-purple-500/20">
                  <h4 className="font-semibold text-purple-300 mb-2">3. Proof Verification</h4>
                  <p className="text-purple-200 text-sm">
                    Verify transaction inclusion using Merkle proof and block header
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Role in RGB++</h3>
              <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-6 rounded-xl border border-orange-500/20">
                <p className="text-orange-300 leading-relaxed">
                  SPV is crucial in RGB++ for validating Bitcoin transactions on CKB. The SPV service provides Bitcoin
                  transaction proofs to CKB, enabling the verification of Bitcoin UTXO operations within RGB++ smart
                  contracts without requiring full Bitcoin nodes.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Advantages</h3>
              <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-6 rounded-xl border border-green-500/20">
                <ul className="text-green-300 space-y-2">
                  <li>• <strong>Reduced Storage:</strong> Only requires block headers (~80 bytes per block)</li>
                  <li>• <strong>Lower Bandwidth:</strong> Minimal data download requirements</li>
                  <li>• <strong>Faster Sync:</strong> Quick synchronization with the network</li>
                  <li>• <strong>Mobile Friendly:</strong> Suitable for resource-constrained devices</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">External Resources</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" className="border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/10">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Bitcoin Developer Guide
                </Button>
                <Button variant="outline" className="border-gray-500/30 text-gray-300 hover:bg-gray-500/10">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Bitcoin Whitepaper
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-white/10">
          <NextLink href="/glossary/xudt-script">
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-white/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: xUDT Script
            </Button>
          </NextLink>
          <NextLink href="/glossary/mmr">
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-white/10">
              Next: MMR
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </NextLink>
        </div>
      </div>
    </DocLayout>
  )
} 