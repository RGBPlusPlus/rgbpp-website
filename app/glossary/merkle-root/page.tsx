"use client"

import { DocLayout } from "@/components/doc-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Hash, ExternalLink, ArrowLeft, ArrowRight } from "lucide-react"
import NextLink from "next/link"

export default function MerkleRootPage() {
  return (
    <DocLayout
      title="Merkle Root"
      description="Cryptographic fingerprint for all transactions in a Bitcoin block, preventing tampering."
    >
      <div className="space-y-8">
        {/* Main Definition */}
        <Card className="bg-white/5 backdrop-blur-xl border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center text-white text-3xl">
              <Hash className="h-8 w-8 mr-3 text-red-400" />
              Merkle Root
              <Badge className="ml-4 bg-red-500/20 text-red-300 border-red-500/30">
                Cryptography
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 p-6 rounded-xl border border-red-500/20">
              <p className="text-red-300 leading-relaxed text-lg">
                A merkle root is created by hashing together pairs of TXIDs to get a short and unique fingerprint for all the transactions in a block. This merkle root is placed in a block header to prevent the contents of the block from being tampered with later on.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Key Characteristics</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-black/20 p-4 rounded-xl border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Unique Fingerprint</h4>
                  <p className="text-gray-300 text-sm">
                    Provides a unique identifier for all transactions in a block
                  </p>
                </div>
                <div className="bg-black/20 p-4 rounded-xl border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Tamper Prevention</h4>
                  <p className="text-gray-300 text-sm">
                    Prevents modification of block contents after creation
                  </p>
                </div>
                <div className="bg-black/20 p-4 rounded-xl border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Efficient Verification</h4>
                  <p className="text-gray-300 text-sm">
                    Allows quick verification of transaction inclusion
                  </p>
                </div>
                <div className="bg-black/20 p-4 rounded-xl border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Block Header</h4>
                  <p className="text-gray-300 text-sm">
                    Stored in the block header for space efficiency
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">How Merkle Root is Constructed</h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-4 rounded-xl border border-blue-500/20">
                  <h4 className="font-semibold text-blue-300 mb-2">1. Transaction Hashes (TXIDs)</h4>
                  <p className="text-blue-200 text-sm">
                    Each transaction in the block is hashed to create a unique TXID
                  </p>
                </div>
                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-4 rounded-xl border border-green-500/20">
                  <h4 className="font-semibold text-green-300 mb-2">2. Pairwise Hashing</h4>
                  <p className="text-green-200 text-sm">
                    TXIDs are paired and hashed together to create parent nodes
                  </p>
                </div>
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4 rounded-xl border border-purple-500/20">
                  <h4 className="font-semibold text-purple-300 mb-2">3. Tree Construction</h4>
                  <p className="text-purple-200 text-sm">
                    Process continues recursively until a single root hash remains
                  </p>
                </div>
                <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-4 rounded-xl border border-orange-500/20">
                  <h4 className="font-semibold text-orange-300 mb-2">4. Root Placement</h4>
                  <p className="text-orange-200 text-sm">
                    Final root hash is placed in the block header
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Security Properties</h3>
              <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 p-6 rounded-xl border border-indigo-500/20">
                <ul className="text-indigo-300 space-y-2">
                  <li>• <strong>Immutability:</strong> Any change to transactions changes the root hash</li>
                  <li>• <strong>Integrity:</strong> Verifies all transactions are present and unmodified</li>
                  <li>• <strong>Efficiency:</strong> Single hash represents entire transaction set</li>
                  <li>• <strong>Proof System:</strong> Enables Merkle proofs for transaction inclusion</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Role in Bitcoin</h3>
              <div className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 p-6 rounded-xl border border-orange-500/20">
                <p className="text-orange-300 leading-relaxed">
                  The Merkle root is a critical component of Bitcoin's security model. It's included in every block header
                  and is used in Bitcoin's proof-of-work consensus mechanism. Miners must include the correct Merkle root
                  in their block headers, ensuring that all transactions in the block are accounted for and cannot be modified.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Role in RGB++</h3>
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-500/20">
                <p className="text-purple-300 leading-relaxed">
                  In RGB++, Merkle roots are used to verify Bitcoin transaction inclusion when validating UTXO operations
                  on CKB. The SPV service provides Merkle proofs that reference the Merkle root in Bitcoin block headers,
                  enabling trustless verification of Bitcoin transactions within RGB++ smart contracts.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">External Resources</h3>
              <Button variant="outline" className="border-red-500/30 text-red-300 hover:bg-red-500/10">
                <ExternalLink className="h-4 w-4 mr-2" />
                Bitcoin Developer Reference
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-white/10">
          <NextLink href="/glossary/mmr">
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-white/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: MMR
            </Button>
          </NextLink>
          <NextLink href="/glossary/op-return">
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-white/10">
              Next: OP_RETURN
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </NextLink>
        </div>
      </div>
    </DocLayout>
  )
} 