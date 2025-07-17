"use client"

import { DocLayout } from "@/components/doc-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Layers, Shield, Network, Code, Database, Server, ExternalLink, ArrowRight, GitBranch, Lock, Clock, Settings } from "lucide-react"
import Link from "next/link"
import CodeBlock from "@/components/ui/code-block"

export default function ComponentsPage() {
  return (
    <DocLayout
      title="RGB++ Scripts"
      description="Understanding the core contracts and implementation details of RGB++ Protocol including RGBPP_lock, BTC_TIME_lock, and configuration mechanisms."
    >
      <div className="space-y-12">
        {/* Introduction */}
        <section>
          <Card className="bg-white/5 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center text-white text-3xl">
                <Layers className="h-8 w-8 mr-3 text-blue-400" />
                RGB++ Scripts Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-300 leading-relaxed text-lg">
                Isomorphic binding requires that RGB++ transactions must be submitted on the Bitcoin chain,
                and that users utilize single-use seals on Bitcoin to describe operations on RGB++ cells.
              </p>

              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-blue-500/20">
                <h3 className="font-semibold text-blue-300 mb-4 text-xl">Transaction Process</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0">1</div>
                    <p className="text-blue-200 text-sm">User constructs the CKB raw transaction and the RGB++ commitment</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0">2</div>
                    <p className="text-blue-200 text-sm">Submits Bitcoin transaction that contains the commitment</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0">3</div>
                    <p className="text-blue-200 text-sm">Submits the final CKB transaction</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed text-lg">
                The ownership of Bitcoin UTXOs is encoded in the lock script of RGB++ Cells, specified by the combination of the Bitcoin transaction ID and output index.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                Regarding the commitment calculation, it encompasses the first <code className="bg-gray-800 px-1.5 py-0.5 rounded text-sm text-orange-300">N</code> consecutive inputs and outputs, where <code className="bg-gray-800 px-1.5 py-0.5 rounded text-sm text-orange-300">N</code> must include all inputs and outputs with non-null <code className="bg-gray-800 px-1.5 py-0.5 rounded text-sm text-orange-300">Type</code> scripts. Any additional inputs and outputs with null <code className="bg-gray-800 px-1.5 py-0.5 rounded text-sm text-orange-300">Type</code> scripts that follow these first <code className="bg-gray-800 px-1.5 py-0.5 rounded text-sm text-orange-300">N</code> elements can be included in the CKB transaction without affecting the commitment. This design allows for flexible transaction fee adjustments while maintaining the integrity of the commitment.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Core Contracts */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">Core Contracts</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* RGBPP_lock */}
            <Card className="bg-white/5 backdrop-blur-xl border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center text-white text-2xl">
                  <Lock className="h-7 w-7 mr-3 text-orange-400" />
                  RGBPP_lock
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  A specialized contract that manages the unlocking mechanism for RGB++ Cells, ensuring secure and controlled access to the assets.
                </p>

                <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl border border-orange-500/20 overflow-x-auto">
                  <h4 className="font-semibold text-orange-300 mb-3 text-lg px-6 pt-6">Contract Structure</h4>
                  <CodeBlock language="yaml" className="text-orange-200 p-4 rounded-lg">{`RGBPP_lock:
    code_hash:
        RGBPP_lock
    args:
        out_index | %bitcoin_tx%`}</CodeBlock>
                  <p className="text-orange-200 text-sm mt-3 px-6 pb-6">
                    The combination of <code className="bg-orange-500/20 px-2 py-1 rounded">out_index</code> and{" "}
                    <code className="bg-orange-500/20 px-2 py-1 rounded">bitcoin_tx</code> uniquely identifies the Bitcoin UTXO that owns this Cell.
                  </p>
                </div>


              </CardContent>
            </Card>

            {/* BTC_TIME_lock */}
            <Card className="bg-white/5 backdrop-blur-xl border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center text-white text-2xl">
                  <Clock className="h-7 w-7 mr-3 text-green-400" />
                  BTC_TIME_lock
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  A time-based locking contract that enforces a predetermined block confirmation period when assets are transferred
                  from Bitcoin Layer 1 to Layer 2, providing additional security for cross-layer transactions.
                </p>

                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl border border-green-500/20 overflow-x-auto">
                  <h4 className="font-semibold text-green-300 mb-3 text-lg px-6 pt-6">Contract Structure</h4>
                  <CodeBlock language="yaml" className="text-green-200 p-4 rounded-lg">{`BTC_TIME_lock:
    args: lock_script | after | %new_bitcoin_tx%`}</CodeBlock>
                  <div className="mt-3 space-y-2 text-sm px-6 pb-6">
                    <p className="text-green-200">
                      • <code className="bg-green-500/20 px-2 py-1 rounded">lock_script</code> is the owner of the cell once the time lock is unlocked
                    </p>
                    <p className="text-green-200">
                      • <code className="bg-green-500/20 px-2 py-1 rounded">after</code> enforces a minimum block confirmation threshold
                    </p>
                  </div>
                </div>


              </CardContent>
            </Card>
          </div>
        </section>

        {/* Configuration System */}
        <section>
          <Card className="bg-white/5 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center text-white text-2xl">
                <Settings className="h-7 w-7 mr-3 text-purple-400" />
                Configuration System
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Both the RGBPP_lock and BTC_TIME_lock contracts require access to Bitcoin light client data, which is identified by the associated contract's type_hash.
                To eliminate hardcoded dependencies and enhance configurability, the protocol introduces the concept of Config Cell.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20 overflow-x-auto">
                  <h4 className="font-semibold text-purple-300 mb-4 text-base sm:text-lg px-6 pt-6">RGBPPConfig Structure</h4>
                  <CodeBlock language="rust" className="text-purple-200 text-xs sm:text-sm p-4 rounded-lg">{`struct RGBPPConfig {
  version: Uint16,
  // Type hash of bitcoin light client
  bitcoin_lc_type_hash: Byte32,
  // Type hash of bitcoin time lock contract
  bitcoin_time_lock_type_hash: Byte32,
}`}</CodeBlock>
                </div>

                <div className="bg-black/20 rounded-xl border border-white/10 overflow-x-auto">
                  <h4 className="font-semibold text-white mb-4 text-base sm:text-lg px-6 pt-6">Deployment Process</h4>
                  <CodeBlock language="yaml" className="text-gray-300 text-xs sm:text-sm p-4 rounded-lg">{`# BTC_TIME_lock
inputs: any cells
outputs:
  BTC_TIME_lock code cell
  time_lock_config cell

# RGBPP_lock
inputs: any cells
outputs:
  RGBPP_lock code cell
  rgb_lock_config cell`}</CodeBlock>
                </div>
              </div>

              <div className="bg-black/20 p-4 sm:p-6 rounded-xl border border-white/10">
                <h4 className="font-semibold text-white mb-4 text-base sm:text-lg">Configuration Loading</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0">1</div>
                    <p className="text-gray-300 text-sm sm:text-base"><code className="text-xs sm:text-sm">load_script</code> finds current contract's <code className="text-xs sm:text-sm">type_hash</code></p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0">2</div>
                    <p className="text-gray-300 text-sm sm:text-base">Locates cell dep with matching <code className="text-xs sm:text-sm">type_hash</code></p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0">3</div>
                    <p className="text-gray-300 text-sm sm:text-base">Loads cell dep data to obtain global configuration</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Unlocking Process */}
        <section>
          <Card className="bg-white/5 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center text-white text-2xl">
                <Shield className="h-7 w-7 mr-3 text-cyan-400" />
                RGBPP_Lock Unlocking Process
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                During the RGBPP_Lock unlocking process, the SPV cells are consulted to verify the existence of the corresponding Bitcoin transaction,
                while the commitment is recalculated and validated against the commitment stored in the Bitcoin transaction's OP_RETURN field,
                along with additional security checks.
              </p>

              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-6 rounded-xl border border-cyan-500/20">
                <h4 className="font-semibold text-cyan-300 mb-4 text-lg">Verification Steps</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">1</div>
                    <div>
                      <h5 className="font-semibold text-white mb-1">SPV Verification</h5>
                      <p className="text-cyan-200 text-sm">Consult SPV cells to verify Bitcoin transaction existence</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">2</div>
                    <div>
                      <h5 className="font-semibold text-white mb-1">Commitment Validation</h5>
                      <p className="text-cyan-200 text-sm">Recalculate and validate commitment against OP_RETURN field</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">3</div>
                    <div>
                      <h5 className="font-semibold text-white mb-1">Security Checks</h5>
                      <p className="text-cyan-200 text-sm">Perform additional security validations and integrity checks</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black/20 p-6 rounded-xl border border-white/10">
                <h4 className="font-semibold text-white mb-3">Process Diagram</h4>
                <p className="text-gray-300 text-sm mb-3">
                  The following figure demonstrates the unlocking process with detailed verification steps and security checks.
                </p>
                <img
                  src="https://raw.githubusercontent.com/RGBPlusPlus/RGBPlusPlus-design/refs/heads/main/docs/assets/lock-verify.png"
                  alt="RGB++ Lock Verification Process Diagram"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Technical Resources */}
        <section>
          <Card className="bg-white/5 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center text-white text-2xl">
                <GitBranch className="h-7 w-7 mr-3 text-yellow-400" />
                Technical Resources
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-blue-500/20 overflow-x-auto">
                  <h4 className="font-semibold text-blue-300 mb-4 flex items-center">
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Design Documentation
                  </h4>
                  <div className="space-y-3">
                    <Button variant="cyber" effect="shimmer" className="w-full" asChild>
                      <a href="https://github.com/RGBPlusPlus/RGBPlusPlus-design/blob/main/docs/lockscript-design-prd-en.md" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        RGB++ Script Standard
                      </a>
                    </Button>
                    <Button variant="cyber" effect="shimmer" className="w-full" asChild>
                      <a href="https://github.com/RGBPlusPlus/RGBPlusPlus-design/blob/main/docs/lockscript-design-prd-cn.md" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        RGB++ 合约规范
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-6 rounded-xl border border-green-500/20 overflow-x-auto">
                  <h4 className="font-semibold text-green-300 mb-4 flex items-center">
                    <Code className="h-5 w-5 mr-2" />
                    Implementation
                  </h4>
                  <div className="space-y-3">
                    <Button variant="glass" effect="scale" className="w-full" asChild>
                      <a href="https://github.com/RGBPlusPlus/rgbpp" target="_blank" rel="noopener noreferrer">
                        <GitBranch className="h-4 w-4 mr-2" />
                        RGB++ Script Repository
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 p-6 rounded-xl border border-yellow-500/20">
                <p className="text-yellow-200 text-sm leading-relaxed">
                  For a comprehensive understanding of the protocol design, please refer to the RGB++ Script Standard documentation.
                  The complete implementation can be found in the RGB++ Script repository with detailed code examples and deployment instructions.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>


      </div>
    </DocLayout>
  )
}
