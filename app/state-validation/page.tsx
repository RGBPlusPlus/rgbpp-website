"use client"

import { DocLayout } from "@/components/doc-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Network, CheckCircle, AlertTriangle, Layers, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function StateValidationPage() {
  return (
    <DocLayout
      title="Blockchain-Enhanced State Validation"
      description="Understanding how RGB++ improves upon RGB protocol's client-side validation through CKB's Turing-complete script system."
    >
      <div className="space-y-12">
        {/* Introduction */}
        <section>
          <Card className="bg-white/5 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center text-white text-3xl">
                <Shield className="h-8 w-8 mr-3 text-green-400" />
                The Challenge of Bitcoin Asset Management
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-300 leading-relaxed text-lg">
                The concept of creating and managing assets on Bitcoin has been a long-standing pursuit in the cryptocurrency space.
                While Bitcoin's UTXO model provides a robust foundation for value transfer, its intentionally limited scripting system
                falls short in implementing the sophisticated security validations required for complex asset management, thus creating
                a need for complementary off-chain smart contract solutions.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* RGB Protocol Approach */}
        <section>
          <Card className="bg-white/5 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="text-white text-2xl">RGB Protocol Approach</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 p-6 rounded-xl border border-yellow-500/20">
                <h3 className="font-semibold text-yellow-300 mb-4 text-xl flex items-center">
                  <Network className="h-6 w-6 mr-2" />
                  Client-Side Validation
                </h3>
                <p className="text-yellow-200 leading-relaxed mb-4">
                  The RGB protocol employs client-side validation, where transaction verification doesn't require scanning the entire blockchain
                  to collect contract state changes. Instead, it only needs a series of relevant Bitcoin transactions, the RGB transactions
                  committed by these Bitcoin transactions, and their block inclusion proofs (based on Merkle proofs from block headers).
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/20">
                    <h4 className="font-semibold text-green-300 mb-3 flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      Benefits
                    </h4>
                    <ul className="text-green-200 text-sm space-y-2">
                      <li>• Significantly reduces verification costs</li>
                      <li>• Only requires relevant transaction history</li>
                      <li>• Efficient for specific contract state verification</li>
                      <li>• Scalable validation approach</li>
                    </ul>
                  </div>
                  <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/20">
                    <h4 className="font-semibold text-red-300 mb-3 flex items-center">
                      <AlertTriangle className="h-5 w-5 mr-2" />
                      Challenges
                    </h4>
                    <ul className="text-red-200 text-sm space-y-2">
                      <li>• Users must maintain complete transaction histories</li>
                      <li>• Complex proof generation requirements</li>
                      <li>• Difficult for simple client applications</li>
                      <li>• High technical barrier for end users</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-black/20 p-6 rounded-xl border border-white/10">
                <h4 className="font-semibold text-white mb-4">The User Experience Problem</h4>
                <p className="text-gray-300 leading-relaxed">
                  This design presents challenges for ordinary users: when using simple client applications, they often lack the capability
                  or resources to maintain complete transaction histories, making it difficult to provide transaction proofs to their counterparts.
                  This creates a significant barrier to widespread adoption and usability.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* RGB++ Enhanced Approach */}
        <section>
          <Card className="bg-white/5 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="text-white text-2xl">RGB++ Enhanced Approach</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-blue-500/20">
                <h3 className="font-semibold text-blue-300 mb-4 text-xl flex items-center">
                  <Layers className="h-6 w-6 mr-2" />
                  On-Chain Validation with CKB
                </h3>
                <p className="text-blue-200 leading-relaxed mb-4">
                  RGB++ takes a different approach by leveraging CKB's Turing-complete script system to implement asset security checks.
                  This design offers a more straightforward and accessible verification process for all users.
                </p>

                <div className="bg-black/20 p-6 rounded-lg border border-white/10 mt-6">
                  <h4 className="font-semibold text-white mb-4">Key Advantages</h4>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold text-white mb-1">Eliminates Complex Client-Side Validation</h5>
                        <p className="text-gray-300 text-sm">
                          No need for users to maintain transaction histories or generate complex proofs.
                          All validation logic is handled on-chain through CKB's smart contract system.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold text-white mb-1">Maintains System Transparency</h5>
                        <p className="text-gray-300 text-sm">
                          All validation happens on-chain with public verification. Anyone can audit
                          the validation process and verify transaction correctness.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold text-white mb-1">Reduces User Burden</h5>
                        <p className="text-gray-300 text-sm">
                          Users only need to verify relevant CKB transactions to confirm the correctness
                          of RGB++ transaction state calculations.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                      <div>
                        <h5 className="font-semibold text-white mb-1">Straightforward Verification</h5>
                        <p className="text-gray-300 text-sm">
                          Simple process to confirm RGB++ transaction state calculations, making the system
                          accessible to users with varying technical backgrounds.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Comparison */}
        <section>
          <Card className="bg-white/5 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="text-white text-2xl">RGB vs RGB++ Validation Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 p-6 rounded-xl border border-red-500/20">
                    <h3 className="font-semibold text-red-300 mb-4 text-lg">RGB Protocol</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-red-200 mb-2">Validation Method</h4>
                        <p className="text-red-200 text-sm">Client-side validation required</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-200 mb-2">User Requirements</h4>
                        <p className="text-red-200 text-sm">Users maintain transaction histories</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-200 mb-2">Complexity</h4>
                        <p className="text-red-200 text-sm">Complex proof generation</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-200 mb-2">Accessibility</h4>
                        <p className="text-red-200 text-sm">Higher technical barrier for users</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-6 rounded-xl border border-green-500/20">
                    <h3 className="font-semibold text-green-300 mb-4 text-lg">RGB++ Protocol</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-green-200 mb-2">Validation Method</h4>
                        <p className="text-green-200 text-sm">On-chain validation with CKB</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-200 mb-2">User Requirements</h4>
                        <p className="text-green-200 text-sm">No local state maintenance needed</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-200 mb-2">Complexity</h4>
                        <p className="text-green-200 text-sm">Simplified verification process</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-200 mb-2">Accessibility</h4>
                        <p className="text-green-200 text-sm">Lower barrier for end users</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-500/20">
                <h4 className="font-semibold text-purple-300 mb-3">The Result</h4>
                <p className="text-purple-200 leading-relaxed">
                  By enforcing security checks on-chain, RGB++ eliminates the need for complex client-side validation while maintaining system transparency.
                  This approach significantly reduces the burden on end users and makes RGB++ assets more accessible to a broader audience,
                  while still preserving the security guarantees that make the protocol trustworthy.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Technical Implementation */}
        <section>
          <Card className="bg-white/5 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Technical Implementation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-6 rounded-xl border border-cyan-500/20">
                <h4 className="font-semibold text-cyan-300 mb-4 text-lg">CKB's Role in State Validation</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-cyan-200 mb-3">Turing-Complete Scripts</h5>
                    <ul className="text-cyan-200 text-sm space-y-2">
                      <li>• Full programmability for complex logic</li>
                      <li>• Custom validation rules implementation</li>
                      <li>• Flexible asset management capabilities</li>
                      <li>• Advanced security check mechanisms</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-cyan-200 mb-3">On-Chain Benefits</h5>
                    <ul className="text-cyan-200 text-sm space-y-2">
                      <li>• Transparent validation process</li>
                      <li>• Immutable validation history</li>
                      <li>• Network-wide consensus on state</li>
                      <li>• Reduced client complexity</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-black/20 p-6 rounded-xl border border-white/10">
                <h4 className="font-semibold text-white mb-4">Validation Process Flow</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h5 className="font-semibold text-white mb-1">Transaction Submission</h5>
                      <p className="text-gray-300 text-sm">RGB++ transaction is submitted to CKB network with validation logic</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h5 className="font-semibold text-white mb-1">On-Chain Validation</h5>
                      <p className="text-gray-300 text-sm">CKB scripts execute validation logic and verify transaction correctness</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h5 className="font-semibold text-white mb-1">State Update</h5>
                      <p className="text-gray-300 text-sm">Valid transactions update asset state on CKB with consensus guarantee</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h5 className="font-semibold text-white mb-1">User Verification</h5>
                      <p className="text-gray-300 text-sm">Users can easily verify state by checking CKB transaction results</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Navigation */}
        <section className="bg-gradient-to-r from-gray-500/10 to-slate-500/10 p-8 rounded-xl border border-gray-500/20">
          <h3 className="text-2xl font-bold text-white mb-4">Continue Learning</h3>
          <p className="text-gray-300 mb-6">
            Now that you understand how RGB++ enhances state validation, explore the core components that make this system work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/single-use-seal">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-white/10">
                <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                Back to Single-Use Seal
              </Button>
            </Link>
            <Link href="/components">
              <Button className="bg-blue-500 hover:bg-blue-600">
                Core Components
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/quickstart">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-white/10">
                Quick Start Guide
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </DocLayout>
  )
} 