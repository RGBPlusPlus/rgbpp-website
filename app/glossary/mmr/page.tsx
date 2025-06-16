"use client"

import { DocLayout } from "@/components/doc-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Hash, ExternalLink, ArrowLeft, ArrowRight } from "lucide-react"
import NextLink from "next/link"

export default function MMRPage() {
  return (
    <DocLayout
      title="MMR"
      description="Merkle Mountain Range - efficient binary hash tree for appending new leaves while maintaining integrity."
    >
      <div className="space-y-8">
        {/* Main Definition */}
        <Card className="bg-white/5 backdrop-blur-xl border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center text-white text-3xl">
              <Hash className="h-8 w-8 mr-3 text-pink-400" />
              MMR
              <Badge className="ml-4 bg-pink-500/20 text-pink-300 border-pink-500/30">
                Cryptography
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-gradient-to-r from-pink-500/10 to-rose-500/10 p-6 rounded-xl border border-pink-500/20">
              <p className="text-pink-300 leading-relaxed text-lg">
                A Merkle Mountain Range (MMR) is a binary hash tree data structure designed to allow efficient appending of new leaves while maintaining the integrity of the existing nodes. A MMR proof can be utilized to verify whether a specific item is included in the MMR root.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-black/20 p-4 rounded-xl border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Efficient Appending</h4>
                  <p className="text-gray-300 text-sm">
                    Allows adding new leaves without rebuilding the entire tree
                  </p>
                </div>
                <div className="bg-black/20 p-4 rounded-xl border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Integrity Preservation</h4>
                  <p className="text-gray-300 text-sm">
                    Maintains integrity of existing nodes when adding new data
                  </p>
                </div>
                <div className="bg-black/20 p-4 rounded-xl border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Inclusion Proofs</h4>
                  <p className="text-gray-300 text-sm">
                    Provides cryptographic proofs for item inclusion verification
                  </p>
                </div>
                <div className="bg-black/20 p-4 rounded-xl border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Binary Hash Tree</h4>
                  <p className="text-gray-300 text-sm">
                    Based on binary tree structure with cryptographic hashing
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">How MMR Works</h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-4 rounded-xl border border-blue-500/20">
                  <h4 className="font-semibold text-blue-300 mb-2">1. Mountain Structure</h4>
                  <p className="text-blue-200 text-sm">
                    Organizes data as a series of perfect binary trees (mountains) of different heights
                  </p>
                </div>
                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-4 rounded-xl border border-green-500/20">
                  <h4 className="font-semibold text-green-300 mb-2">2. Append-Only</h4>
                  <p className="text-green-200 text-sm">
                    New items are added to the right, creating new mountains or merging existing ones
                  </p>
                </div>
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4 rounded-xl border border-purple-500/20">
                  <h4 className="font-semibold text-purple-300 mb-2">3. Proof Generation</h4>
                  <p className="text-purple-200 text-sm">
                    Generates inclusion proofs by providing the path from leaf to root across mountains
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Advantages over Standard Merkle Trees</h3>
              <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 p-6 rounded-xl border border-indigo-500/20">
                <ul className="text-indigo-300 space-y-2">
                  <li>• <strong>No Rebalancing:</strong> Doesn't require rebuilding when adding new items</li>
                  <li>• <strong>Efficient Updates:</strong> O(log n) complexity for appends</li>
                  <li>• <strong>Historical Integrity:</strong> Previous states remain valid and verifiable</li>
                  <li>• <strong>Scalable:</strong> Suitable for continuously growing datasets</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Use Cases</h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-4 rounded-xl border border-orange-500/20">
                  <h4 className="font-semibold text-orange-300 mb-2">Blockchain Applications</h4>
                  <p className="text-orange-200 text-sm">
                    Efficient storage and verification of transaction histories
                  </p>
                </div>
                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-4 rounded-xl border border-green-500/20">
                  <h4 className="font-semibold text-green-300 mb-2">Audit Trails</h4>
                  <p className="text-green-200 text-sm">
                    Maintaining tamper-proof logs with efficient verification
                  </p>
                </div>
                <div className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 p-4 rounded-xl border border-cyan-500/20">
                  <h4 className="font-semibold text-cyan-300 mb-2">Timestamping Services</h4>
                  <p className="text-cyan-200 text-sm">
                    Proving the existence of data at specific points in time
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Role in RGB++</h3>
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-500/20">
                <p className="text-purple-300 leading-relaxed">
                  MMR structures may be used in RGB++ for efficient verification of Bitcoin block history and
                  transaction inclusion proofs, providing a scalable way to maintain cryptographic commitments
                  to the growing Bitcoin blockchain data.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">External Resources</h3>
              <Button variant="outline" className="border-pink-500/30 text-pink-300 hover:bg-pink-500/10">
                <ExternalLink className="h-4 w-4 mr-2" />
                OpenTimestamps MMR Documentation
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-white/10">
          <NextLink href="/glossary/spv">
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-white/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: SPV
            </Button>
          </NextLink>
          <NextLink href="/glossary/merkle-root">
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-white/10">
              Next: Merkle Root
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </NextLink>
        </div>
      </div>
    </DocLayout>
  )
} 