"use client"

import { DocLayout } from "@/components/doc-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Layers, ExternalLink, ArrowLeft, ArrowRight, Lock, Shield } from "lucide-react"
import NextLink from "next/link"

export default function CKBScriptPage() {
  return (
    <DocLayout
      title="CKB Script"
      description="Binary executables that run on CKB-VM to implement smart contract logic."
    >
      <div className="space-y-8">
        {/* Main Definition */}
        <Card className="bg-white/5 backdrop-blur-xl border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center text-white text-3xl">
              <Layers className="h-8 w-8 mr-3 text-blue-400" />
              CKB Script
              <Badge className="ml-4 bg-blue-500/20 text-blue-300 border-blue-500/30">
                CKB
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-6 rounded-xl border border-blue-500/20">
              <p className="text-blue-300 leading-relaxed text-lg">
                A Script in CKB is a binary executable that can be executed on-chain. It is a program that runs on a virtual machine powered by the RISC-V instruction set, called the CKB-VM, and can perform arbitrary logic to guard and protect your Cells. You can think of it as smart contract.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Key Characteristics</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-black/20 p-4 rounded-xl border border-white/10">
                  <h4 className="font-semibold text-white mb-2">RISC-V Based</h4>
                  <p className="text-gray-300 text-sm">
                    Runs on CKB-VM powered by the RISC-V instruction set
                  </p>
                </div>
                <div className="bg-black/20 p-4 rounded-xl border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Binary Executable</h4>
                  <p className="text-gray-300 text-sm">
                    Compiled binary code that executes deterministically on-chain
                  </p>
                </div>
                <div className="bg-black/20 p-4 rounded-xl border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Arbitrary Logic</h4>
                  <p className="text-gray-300 text-sm">
                    Can implement any computation logic to validate transactions
                  </p>
                </div>
                <div className="bg-black/20 p-4 rounded-xl border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Cell Protection</h4>
                  <p className="text-gray-300 text-sm">
                    Guards and protects Cells through validation rules
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Types of Scripts</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 p-6 rounded-xl border border-yellow-500/20">
                  <div className="flex items-center mb-4">
                    <Lock className="h-6 w-6 mr-3 text-yellow-400" />
                    <h4 className="font-semibold text-yellow-300 text-lg">Lock Script</h4>
                  </div>
                  <p className="text-yellow-200 text-sm mb-4">
                    A required Script controlling the ownership and access to a Cell, ensuring only authorized users can spend/consume the Cell.
                  </p>
                  <Button variant="outline" className="border-yellow-500/30 text-yellow-300 hover:bg-yellow-500/10 text-xs">
                    <ExternalLink className="h-3 w-3 mr-2" />
                    Learn More
                  </Button>
                </div>

                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-6 rounded-xl border border-green-500/20">
                  <div className="flex items-center mb-4">
                    <Shield className="h-6 w-6 mr-3 text-green-400" />
                    <h4 className="font-semibold text-green-300 text-lg">Type Script</h4>
                  </div>
                  <p className="text-green-200 text-sm mb-4">
                    An optional Script dictating how a Cell can be used or modified in a transaction.
                  </p>
                  <Button variant="outline" className="border-green-500/30 text-green-300 hover:bg-green-500/10 text-xs">
                    <ExternalLink className="h-3 w-3 mr-2" />
                    Learn More
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Role in RGB++</h3>
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-500/20">
                <p className="text-purple-300 leading-relaxed">
                  CKB Scripts in RGB++ implement the validation logic for isomorphic binding, ensuring that Bitcoin UTXO
                  operations are properly synchronized with CKB Cell state changes. They enforce the rules that maintain
                  the integrity of the RGB++ protocol.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-white/10">
          <NextLink href="/glossary/isomorphic-binding">
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-white/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: Isomorphic Binding
            </Button>
          </NextLink>
          <NextLink href="/glossary/xudt-script">
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-white/10">
              Next: xUDT Script
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </NextLink>
        </div>
      </div>
    </DocLayout>
  )
} 