"use client"

import { DocLayout } from "@/components/doc-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Link, ArrowLeft, ArrowRight } from "lucide-react"
import NextLink from "next/link"

export default function IsomorphicBindingPage() {
  return (
    <DocLayout
      title="Isomorphic Binding"
      description="One-to-one mapping mechanism linking Bitcoin UTXOs to CKB Cells in RGB++."
    >
      <div className="space-y-8">
        {/* Main Definition */}
        <Card className="bg-white/5 backdrop-blur-xl border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center text-white text-3xl">
              <Link className="h-8 w-8 mr-3 text-purple-400" />
              Isomorphic Binding
              <Badge className="ml-4 bg-purple-500/20 text-purple-300 border-purple-500/30">
                RGB++
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-500/20">
              <p className="text-purple-300 leading-relaxed text-lg">
                A one-to-one mapping mechanism in RGB++ that links Bitcoin UTXOs to CKB Cells, enabling ownership synchronization through Bitcoin's UTXO locks while maintaining state in CKB's Cell data and type fields. This binding allows for Turing-complete Bitcoin UTXO transactions validated by CKB Cells.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-black/20 p-4 rounded-xl border border-white/10">
                  <h4 className="font-semibold text-white mb-2">One-to-One Mapping</h4>
                  <p className="text-gray-300 text-sm">
                    Each Bitcoin UTXO is uniquely bound to exactly one CKB Cell
                  </p>
                </div>
                <div className="bg-black/20 p-4 rounded-xl border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Ownership Sync</h4>
                  <p className="text-gray-300 text-sm">
                    Bitcoin UTXO locks control ownership of the bound CKB Cell
                  </p>
                </div>
                <div className="bg-black/20 p-4 rounded-xl border border-white/10">
                  <h4 className="font-semibold text-white mb-2">State Storage</h4>
                  <p className="text-gray-300 text-sm">
                    Complex state data is maintained in CKB Cell's data and type fields
                  </p>
                </div>
                <div className="bg-black/20 p-4 rounded-xl border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Turing Complete</h4>
                  <p className="text-gray-300 text-sm">
                    Enables complex computations while maintaining Bitcoin security
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">How It Works</h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-4 rounded-xl border border-orange-500/20">
                  <h4 className="font-semibold text-orange-300 mb-2">1. Bitcoin Layer</h4>
                  <p className="text-orange-200 text-sm">
                    UTXOs on Bitcoin blockchain control ownership and provide security
                  </p>
                </div>
                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-4 rounded-xl border border-green-500/20">
                  <h4 className="font-semibold text-green-300 mb-2">2. CKB Layer</h4>
                  <p className="text-green-200 text-sm">
                    Cells on CKB blockchain store state data and execute smart contract logic
                  </p>
                </div>
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4 rounded-xl border border-blue-500/20">
                  <h4 className="font-semibold text-blue-300 mb-2">3. Binding Mechanism</h4>
                  <p className="text-blue-200 text-sm">
                    RGB++ protocol ensures synchronization between UTXO spending and Cell updates
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Benefits</h3>
              <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 p-6 rounded-xl border border-indigo-500/20">
                <ul className="text-indigo-300 space-y-2">
                  <li>• <strong>Bitcoin Security:</strong> Inherits Bitcoin's proven security model</li>
                  <li>• <strong>Programmability:</strong> Enables complex smart contracts on Bitcoin</li>
                  <li>• <strong>Scalability:</strong> Off-loads computation to CKB while maintaining Bitcoin ownership</li>
                  <li>• <strong>Interoperability:</strong> Bridges Bitcoin and CKB ecosystems seamlessly</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-white/10">
          <NextLink href="/glossary/ckb-cell">
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-white/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: CKB Cell
            </Button>
          </NextLink>
          <NextLink href="/glossary/ckb-script">
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-white/10">
              Next: CKB Script
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </NextLink>
        </div>
      </div>
    </DocLayout>
  )
} 