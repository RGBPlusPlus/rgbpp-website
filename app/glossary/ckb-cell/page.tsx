"use client"

import { DocLayout } from "@/components/doc-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Database, ExternalLink, ArrowLeft, ArrowRight } from "lucide-react"
import NextLink from "next/link"

export default function CKBCellPage() {
  return (
    <DocLayout
      title="CKB Cell"
      description="The primary state units in CKB blockchain for storing arbitrary data and states."
    >
      <div className="space-y-8">
        {/* Main Definition */}
        <Card className="bg-white/5 backdrop-blur-xl border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center text-white text-3xl">
              <Database className="h-8 w-8 mr-3 text-green-400" />
              CKB Cell
              <Badge className="ml-4 bg-green-500/20 text-green-300 border-green-500/30">
                CKB
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-6 rounded-xl border border-green-500/20">
              <p className="text-green-300 leading-relaxed text-lg">
                Cells are the primary state units in CKB, within them users can include arbitrary states. All data on Nervos CKB is stored in Cells. A Cell has 4 fields: capacity, data, type and lock.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Cell Structure</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-black/20 p-4 rounded-xl border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Capacity</h4>
                  <p className="text-gray-300 text-sm">
                    The amount of CKB tokens stored in the cell, also represents the storage space
                  </p>
                </div>
                <div className="bg-black/20 p-4 rounded-xl border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Data</h4>
                  <p className="text-gray-300 text-sm">
                    Arbitrary data stored in the cell, can contain any information
                  </p>
                </div>
                <div className="bg-black/20 p-4 rounded-xl border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Type Script</h4>
                  <p className="text-gray-300 text-sm">
                    Optional script that defines how the cell can be used or modified
                  </p>
                </div>
                <div className="bg-black/20 p-4 rounded-xl border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Lock Script</h4>
                  <p className="text-gray-300 text-sm">
                    Required script that controls ownership and access to the cell
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Role in RGB++</h3>
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-500/20">
                <p className="text-purple-300 leading-relaxed">
                  In RGB++, CKB Cells are isomorphically bound to Bitcoin UTXOs, storing the programmable state while
                  Bitcoin UTXOs control the ownership. This binding enables complex smart contract functionality while
                  maintaining Bitcoin's security guarantees.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">External Resources</h3>
              <Button variant="outline" className="border-green-500/30 text-green-300 hover:bg-green-500/10">
                <ExternalLink className="h-4 w-4 mr-2" />
                View CKB Cell Model Documentation
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-white/10">
          <NextLink href="/glossary/utxo">
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-white/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: UTXO
            </Button>
          </NextLink>
          <NextLink href="/glossary/isomorphic-binding">
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-white/10">
              Next: Isomorphic Binding
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </NextLink>
        </div>
      </div>
    </DocLayout>
  )
} 