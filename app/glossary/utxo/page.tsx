"use client"

import { DocLayout } from "@/components/doc-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Hash, ExternalLink, ArrowLeft, ArrowRight } from "lucide-react"
import NextLink from "next/link"

export default function UTXOPage() {
  return (
    <DocLayout
      title="UTXO"
      description="Bitcoin Unspent Transaction Output - the fundamental building block of Bitcoin transactions."
    >
      <div className="space-y-8">
        {/* Main Definition */}
        <Card className="bg-white/5 backdrop-blur-xl border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center text-white text-3xl">
              <Hash className="h-8 w-8 mr-3 text-orange-400" />
              UTXO
              <Badge className="ml-4 bg-orange-500/20 text-orange-300 border-orange-500/30">
                Bitcoin
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-6 rounded-xl border border-orange-500/20">
              <p className="text-orange-300 leading-relaxed text-lg">
                A Bitcoin Unspent Transaction Output. It is defined by a transaction hash and a vout index which, collectively, constitute an outpoint.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Key Characteristics</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-black/20 p-4 rounded-xl border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Transaction Hash</h4>
                  <p className="text-gray-300 text-sm">
                    A unique identifier for the transaction that created this UTXO
                  </p>
                </div>
                <div className="bg-black/20 p-4 rounded-xl border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Vout Index</h4>
                  <p className="text-gray-300 text-sm">
                    The output index within the transaction (starting from 0)
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Role in RGB++</h3>
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-500/20">
                <p className="text-purple-300 leading-relaxed">
                  In RGB++, UTXOs are bound to CKB Cells through isomorphic binding, enabling Bitcoin's security model
                  to protect programmable assets stored in CKB's Cell model. This creates a bridge between Bitcoin's
                  proven security and CKB's programmability.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-white/10">
          <NextLink href="/glossary">
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-white/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Glossary
            </Button>
          </NextLink>
          <NextLink href="/glossary/ckb-cell">
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-white/10">
              Next: CKB Cell
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </NextLink>
        </div>
      </div>
    </DocLayout>
  )
} 