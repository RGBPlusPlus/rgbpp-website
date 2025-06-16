"use client"

import { DocLayout } from "@/components/doc-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, ExternalLink, ArrowLeft, ArrowRight } from "lucide-react"
import NextLink from "next/link"

export default function OPReturnPage() {
  return (
    <DocLayout
      title="OP_RETURN"
      description="Bitcoin script opcode for embedding arbitrary data in transactions."
    >
      <div className="space-y-8">
        {/* Main Definition */}
        <Card className="bg-white/5 backdrop-blur-xl border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center text-white text-3xl">
              <FileText className="h-8 w-8 mr-3 text-yellow-400" />
              OP_RETURN
              <Badge className="ml-4 bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                Bitcoin
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 p-6 rounded-xl border border-yellow-500/20">
              <p className="text-yellow-300 leading-relaxed text-lg">
                The OP_RETURN standard locking script just contains the OP_RETURN opcode followed by one or more data pushes. The standard OP_RETURN script has a maximum size limit of 83 bytes. However, there is an ongoing discussion and corresponding pull request to relax these standardness restrictions.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Key Characteristics</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-black/20 p-4 rounded-xl border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Data Embedding</h4>
                  <p className="text-gray-300 text-sm">
                    Allows embedding arbitrary data directly in Bitcoin transactions
                  </p>
                </div>
                <div className="bg-black/20 p-4 rounded-xl border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Provably Unspendable</h4>
                  <p className="text-gray-300 text-sm">
                    Creates outputs that can never be spent, reducing UTXO set size
                  </p>
                </div>
                <div className="bg-black/20 p-4 rounded-xl border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Size Limit</h4>
                  <p className="text-gray-300 text-sm">
                    Standard limit of 83 bytes for data payload
                  </p>
                </div>
                <div className="bg-black/20 p-4 rounded-xl border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Standard Script</h4>
                  <p className="text-gray-300 text-sm">
                    Recognized as a standard transaction type by Bitcoin nodes
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Script Structure</h3>
              <div className="bg-black/30 p-6 rounded-lg border border-white/10">
                <h4 className="font-semibold text-white text-lg mb-4">Example OP_RETURN Script</h4>
                <pre className="text-yellow-200 text-sm font-mono leading-relaxed">
                  <code>{`OP_RETURN
OP_PUSHBYTES_11
68656c6c6f20776f726c64`}</code>
                </pre>
                <p className="text-gray-300 text-sm mt-4">
                  This example embeds "hello world" (in hexadecimal) into the Bitcoin blockchain.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Use Cases</h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-4 rounded-xl border border-blue-500/20">
                  <h4 className="font-semibold text-blue-300 mb-2">Timestamping</h4>
                  <p className="text-blue-200 text-sm">
                    Prove the existence of documents or data at a specific time
                  </p>
                </div>
                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-4 rounded-xl border border-green-500/20">
                  <h4 className="font-semibold text-green-300 mb-2">Asset Protocols</h4>
                  <p className="text-green-200 text-sm">
                    Embed metadata for colored coins and other asset protocols
                  </p>
                </div>
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4 rounded-xl border border-purple-500/20">
                  <h4 className="font-semibold text-purple-300 mb-2">Commitment Schemes</h4>
                  <p className="text-purple-200 text-sm">
                    Store hash commitments for off-chain protocols
                  </p>
                </div>
                <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-4 rounded-xl border border-orange-500/20">
                  <h4 className="font-semibold text-orange-300 mb-2">Protocol Signaling</h4>
                  <p className="text-orange-200 text-sm">
                    Signal protocol upgrades or network parameters
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Role in RGB++</h3>
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-500/20">
                <p className="text-purple-300 leading-relaxed">
                  OP_RETURN outputs may be used in RGB++ transactions to embed commitment data or protocol identifiers
                  that link Bitcoin transactions to their corresponding CKB Cell operations. This enables the binding
                  mechanism to work by providing verifiable on-chain commitments.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Advantages & Considerations</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-6 rounded-xl border border-green-500/20">
                  <h4 className="font-semibold text-green-300 text-lg mb-4">Advantages</h4>
                  <ul className="text-green-200 text-sm space-y-2">
                    <li>• Permanent data storage</li>
                    <li>• Standard transaction type</li>
                    <li>• Provably unspendable</li>
                    <li>• Widely supported</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-6 rounded-xl border border-orange-500/20">
                  <h4 className="font-semibold text-orange-300 text-lg mb-4">Considerations</h4>
                  <ul className="text-orange-200 text-sm space-y-2">
                    <li>• Limited data size (83 bytes)</li>
                    <li>• Increases blockchain size</li>
                    <li>• Transaction fees apply</li>
                    <li>• Not suitable for large data</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Recent Developments</h3>
              <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 p-6 rounded-xl border border-indigo-500/20">
                <p className="text-indigo-300 leading-relaxed mb-4">
                  There are ongoing discussions in the Bitcoin community about relaxing the 83-byte size limit for
                  OP_RETURN outputs. Bitcoin Core Pull Request #32359 proposes changes to these standardness restrictions.
                </p>
                <p className="text-indigo-200 text-sm">
                  These changes could potentially allow for larger data payloads in OP_RETURN outputs, which would
                  benefit protocols like RGB++ that need to embed commitment data.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">External Resources</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" className="border-yellow-500/30 text-yellow-300 hover:bg-yellow-500/10">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Learn Me A Bitcoin
                </Button>
                <Button variant="outline" className="border-gray-500/30 text-gray-300 hover:bg-gray-500/10">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Bitcoin Core PR #32359
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-white/10">
          <NextLink href="/glossary/merkle-root">
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-white/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Merkle Root
            </Button>
          </NextLink>
          <NextLink href="/glossary">
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-white/10">
              Back to Glossary
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </NextLink>
        </div>
      </div>
    </DocLayout>
  )
} 