"use client"

import { DocLayout } from "@/components/doc-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lock, Bitcoin, CheckCircle, ExternalLink, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function SingleUseSealPage() {
  return (
    <DocLayout
      title="Single-Use Seal"
      description="Understanding the cryptographic mechanism that ensures single-use properties in RGB++ Protocol through Bitcoin UTXOs."
    >
      <div className="space-y-12">
        {/* Introduction */}
        <section>
          <Card className="bg-white/5 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center text-white text-3xl">
                <Lock className="h-8 w-8 mr-3 text-orange-400" />
                What is a Single-Use Seal?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-300 leading-relaxed text-lg">
                Single-use seals are a cryptographic mechanism that locks a seal on a message, ensuring that the message
                can only be read or used once. The RGB++ protocol leverages Bitcoin UTXOs' inherent single-use property
                to implement this sealing mechanism.
              </p>

              <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-6 rounded-xl border border-orange-500/20">
                <h3 className="font-semibold text-orange-300 mb-4 text-xl flex items-center">
                  <Bitcoin className="h-6 w-6 mr-2" />
                  How RGB++ Implements Single-Use Seals
                </h3>
                <p className="text-orange-200 leading-relaxed mb-4">
                  Through the use of single-use seals, the RGB++ protocol creates assets that are cryptographically bound to specific Bitcoin UTXOs.
                  The ownership of these corresponding UTXOs directly establishes ownership of the RGB++ issued assets.
                </p>
                <p className="text-orange-200 leading-relaxed">
                  To transfer a RGB++ asset, the holder must spend their corresponding UTXO, which effectively consumes the single-use seal
                  and ensures the asset can only be transferred once.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Key Properties */}
        <section>
          <Card className="bg-white/5 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Key Properties</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white mb-2">Cryptographic Binding</h4>
                      <p className="text-gray-300">
                        Assets are cryptographically bound to specific Bitcoin UTXOs, creating an unbreakable link between
                        Bitcoin's security model and RGB++ asset ownership.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white mb-2">Direct Ownership</h4>
                      <p className="text-gray-300">
                        UTXO ownership directly establishes RGB++ asset ownership, eliminating the need for complex
                        ownership verification mechanisms.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white mb-2">Single-Use Guarantee</h4>
                      <p className="text-gray-300">
                        Assets can only be transferred once per UTXO consumption, preventing double-spending and
                        ensuring transaction finality.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white mb-2">Bitcoin Security</h4>
                      <p className="text-gray-300">
                        Inherits Bitcoin's consensus security model, providing the highest level of security
                        available in the cryptocurrency ecosystem.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* How It Works */}
        <section>
          <Card className="bg-white/5 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="text-white text-2xl">How Single-Use Seals Work in RGB++</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Asset Creation</h4>
                    <p className="text-gray-300">
                      An RGB++ asset is cryptographically bound to a specific Bitcoin UTXO during the creation process.
                      This UTXO serves as the single-use seal for the asset.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Ownership Establishment</h4>
                    <p className="text-gray-300">
                      The owner of the Bitcoin UTXO automatically becomes the owner of the corresponding RGB++ asset.
                      No additional verification or registration is required.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Transfer Process</h4>
                    <p className="text-gray-300">
                      To transfer the RGB++ asset, the current owner must spend the corresponding Bitcoin UTXO.
                      This action consumes the single-use seal and triggers the asset transfer.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Security Guarantee</h4>
                    <p className="text-gray-300">
                      Bitcoin's consensus mechanism ensures that the UTXO can only be spent once, providing
                      cryptographic guarantee that the asset transfer is final and cannot be reversed.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Technical Deep Dive */}
        <section>
          <Card className="bg-white/5 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Technical Foundation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-blue-500/20">
                <h4 className="font-semibold text-blue-300 mb-4 text-lg">Bitcoin UTXO Properties</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-blue-200 mb-3">Inherent Characteristics</h5>
                    <ul className="text-blue-200 space-y-2">
                      <li>• <strong>Atomic Spending:</strong> UTXOs can only be spent entirely, never partially</li>
                      <li>• <strong>Single Use:</strong> Once spent, a UTXO cannot be used again</li>
                      <li>• <strong>Cryptographic Security:</strong> Protected by Bitcoin's proof-of-work consensus</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-200 mb-3">RGB++ Utilization</h5>
                    <ul className="text-blue-200 space-y-2">
                      <li>• <strong>Asset Binding:</strong> RGB++ assets are bound to specific UTXOs</li>
                      <li>• <strong>Ownership Model:</strong> UTXO ownership equals asset ownership</li>
                      <li>• <strong>Transfer Mechanism:</strong> Asset transfers require UTXO spending</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 p-6 rounded-xl border border-yellow-500/20">
                <h4 className="font-semibold text-yellow-300 mb-3 flex items-center">
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Further Reading
                </h4>
                <p className="text-yellow-200 mb-4">
                  For a comprehensive explanation of single-use seals and their theoretical foundation,
                  please refer to Peter Todd's seminal technical article.
                </p>
                <Button variant="outline" className="border-yellow-500/30 text-yellow-300 hover:bg-yellow-500/10">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  State Machine Consensus Building Blocks
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Navigation */}
        <section className="bg-gradient-to-r from-gray-500/10 to-slate-500/10 p-8 rounded-xl border border-gray-500/20">
          <h3 className="text-2xl font-bold text-white mb-4">Continue Learning</h3>
          <p className="text-gray-300 mb-6">
            Now that you understand single-use seals, explore how RGB++ enhances state validation compared to the original RGB protocol.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/introduction">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-white/10">
                <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                Back to Introduction
              </Button>
            </Link>
            <Link href="/state-validation">
              <Button className="bg-green-500 hover:bg-green-600">
                State Validation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/components">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-white/10">
                Core Components
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </DocLayout>
  )
} 