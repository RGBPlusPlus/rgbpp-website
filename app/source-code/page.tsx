"use client"

import { DocLayout } from "@/components/doc-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Book, Bitcoin, Network, Shield, Zap, Layers, ExternalLink, Code, ArrowRight, Server, Database, Lock, Globe, FileText, GitBranch, Workflow, CheckCircle, Terminal, Package } from "lucide-react"
import Link from "next/link"

export default function SourceCodePage() {
  return (
    <DocLayout
      title="Resources"
      description="Comprehensive resources, documentation, and development tools for RGB++ Protocol."
    >
      <div className="space-y-16">
        {/* Quick Links */}
        <section>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 cursor-pointer group">
              <CardContent className="p-6 text-center">
                <FileText className="h-8 w-8 mx-auto mb-3 text-blue-400 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-white mb-1">Light Paper</h3>
                <p className="text-xs text-gray-400">Protocol Overview</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20 hover:border-green-400/40 transition-all duration-300 cursor-pointer group">
              <CardContent className="p-6 text-center">
                <Code className="h-8 w-8 mx-auto mb-3 text-green-400 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-white mb-1">RGB++ SDK</h3>
                <p className="text-xs text-gray-400">Development Kit</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 cursor-pointer group">
              <CardContent className="p-6 text-center">
                <Globe className="h-8 w-8 mx-auto mb-3 text-purple-400 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-white mb-1">Explorer</h3>
                <p className="text-xs text-gray-400">Block Explorer</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-500/20 hover:border-orange-400/40 transition-all duration-300 cursor-pointer group">
              <CardContent className="p-6 text-center">
                <GitBranch className="h-8 w-8 mx-auto mb-3 text-orange-400 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-white mb-1">GitHub</h3>
                <p className="text-xs text-gray-400">Source Code</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Protocol Overview */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-3">Protocol Overview</h2>
            <p className="text-gray-400">Essential documentation and resources for understanding RGB++ Protocol</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-white/20 transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-white text-lg">
                  <FileText className="h-6 w-6 mr-3 text-blue-400" />
                  RGB++ Protocol Light Paper
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg hover:bg-black/30 transition-colors">
                  <span className="text-gray-300">English Version</span>
                  <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-white/10" asChild>
                    <a href="https://talk.nervos.org/t/rgb-protocol-light-paper-translation/7790" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Read
                    </a>
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg hover:bg-black/30 transition-colors">
                  <span className="text-gray-300">中文版本</span>
                  <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-white/10" asChild>
                    <a href="https://talk.nervos.org/t/rgb-protocol-light-paper/7733" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      阅读
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-white/20 transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-white text-lg">
                  <Server className="h-6 w-6 mr-3 text-purple-400" />
                  Infrastructure
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg hover:bg-black/30 transition-colors">
                  <div>
                    <div className="text-gray-300 font-medium">RGB++ Explorer</div>
                    <div className="text-xs text-gray-500">Block explorer for RGB++ transactions and assets</div>
                  </div>
                  <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-white/10" asChild>
                    <a href="https://explorer.rgbpp.io/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Visit
                    </a>
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg hover:bg-black/30 transition-colors">
                  <div>
                    <div className="text-gray-300 font-medium">btc-assets-api</div>
                    <div className="text-xs text-gray-500">API service for BTC/RGB++ asset management</div>
                  </div>
                  <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-white/10" asChild>
                    <a href="https://github.com/RGBPlusPlus/btc-assets-api" target="_blank" rel="noopener noreferrer">
                      <GitBranch className="h-3 w-3 mr-1" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Core Components */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-3">Core Components</h2>
            <p className="text-gray-400">Essential building blocks of the RGB++ Protocol</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white/5 backdrop-blur-xl border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center text-white text-lg">
                  <Shield className="h-6 w-6 mr-3 text-orange-400" />
                  RGB++ Script Standard
                </CardTitle>
                <p className="text-gray-400 text-sm mt-2">
                  Core contracts implementing the RGB++ Protocol
                </p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg hover:bg-black/30 transition-colors">
                  <span className="text-gray-300">RGB++ Script Standard (English)</span>
                  <Button size="sm" variant="cyber" effect="shimmer" asChild>
                    <a href="https://github.com/RGBPlusPlus/RGBPlusPlus-design/blob/main/docs/lockscript-design-prd-en.md" target="_blank" rel="noopener noreferrer">
                      <FileText className="h-3 w-3 mr-1" />
                      Docs
                    </a>
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg hover:bg-black/30 transition-colors">
                  <span className="text-gray-300">RGB++ Script Standard (中文)</span>
                  <Button size="sm" variant="cyber" effect="shimmer" asChild>
                    <a href="https://github.com/RGBPlusPlus/RGBPlusPlus-design/blob/main/docs/lockscript-design-prd-cn.md" target="_blank" rel="noopener noreferrer">
                      <FileText className="h-3 w-3 mr-1" />
                      文档
                    </a>
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg hover:bg-black/30 transition-colors">
                  <span className="text-gray-300">RGB++ Script Repository</span>
                  <Button size="sm" variant="cyber" effect="shimmer" asChild>
                    <a href="https://github.com/RGBPlusPlus/rgbpp" target="_blank" rel="noopener noreferrer">
                      <GitBranch className="h-3 w-3 mr-1" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-xl border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center text-white text-lg">
                  <Network className="h-6 w-6 mr-3 text-blue-400" />
                  CKB Bitcoin SPV
                </CardTitle>
                <p className="text-gray-400 text-sm mt-2">
                  Light client implementation for Bitcoin-CKB bridge
                </p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg hover:bg-black/30 transition-colors">
                  <span className="text-gray-300">CKB Bitcoin SPV Design</span>
                  <Button size="sm" variant="cyber" effect="shimmer" asChild>
                    <a href="https://github.com/RGBPlusPlus/ckb-bitcoin-spv/blob/master/docs/Design.md" target="_blank" rel="noopener noreferrer">
                      <FileText className="h-3 w-3 mr-1" />
                      Design
                    </a>
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg hover:bg-black/30 transition-colors">
                  <span className="text-gray-300">CKB Bitcoin SPV Contracts</span>
                  <Button size="sm" variant="cyber" effect="shimmer" asChild>
                    <a href="https://github.com/RGBPlusPlus/ckb-bitcoin-spv-contracts" target="_blank" rel="noopener noreferrer">
                      <GitBranch className="h-3 w-3 mr-1" />
                      Code
                    </a>
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg hover:bg-black/30 transition-colors">
                  <span className="text-gray-300">CKB Bitcoin SPV Library</span>
                  <Button size="sm" variant="cyber" effect="shimmer" asChild>
                    <a href="https://github.com/RGBPlusPlus/ckb-bitcoin-spv" target="_blank" rel="noopener noreferrer">
                      <GitBranch className="h-3 w-3 mr-1" />
                      Code
                    </a>
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg hover:bg-black/30 transition-colors">
                  <span className="text-gray-300">CKB Bitcoin SPV Service</span>
                  <Button size="sm" variant="cyber" effect="shimmer" asChild>
                    <a href="https://github.com/RGBPlusPlus/ckb-bitcoin-spv-service" target="_blank" rel="noopener noreferrer">
                      <GitBranch className="h-3 w-3 mr-1" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Development Tools */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-3">Development Tools</h2>
            <p className="text-gray-400">SDKs and tools for building RGB++ applications</p>
          </div>

          <Card className="bg-white/5 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center text-white text-lg">
                <Code className="h-6 w-6 mr-3 text-green-400" />
                RGB++ SDK
              </CardTitle>
              <p className="text-gray-400 text-sm mt-2">
                TypeScript/JavaScript SDK for building RGB++ applications
              </p>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg hover:bg-black/30 transition-colors">
                <div className="flex items-center">
                  <span className="text-gray-300">RGB++ SDK (Primary SDK)</span>
                  <Badge variant="outline" className="text-xs ml-2 border-green-500/30 text-green-400">Recommended</Badge>
                </div>
                <Button size="sm" variant="cyber" effect="shimmer" asChild>
                  <a href="https://github.com/ckb-devrel/ccc/tree/rgbpp-sdk" target="_blank" rel="noopener noreferrer">
                    <GitBranch className="h-3 w-3 mr-1" />
                    TypeScript
                  </a>
                </Button>
              </div>
              <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg hover:bg-black/30 transition-colors">
                <span className="text-gray-300">RGB++ SDK (Legacy SDK)</span>
                <Button size="sm" variant="cyber" effect="shimmer" asChild>
                  <a href="https://github.com/RGBPlusPlus/rgbpp-sdk" target="_blank" rel="noopener noreferrer">
                    <GitBranch className="h-3 w-3 mr-1" />
                    TypeScript
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Community Resources */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-3">Community Resources</h2>
            <p className="text-gray-400">Community-contributed articles and educational content</p>
          </div>

          <Card className="bg-white/5 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center text-white text-lg">
                <Book className="h-6 w-6 mr-3 text-pink-400" />
                Community Articles
              </CardTitle>
              <p className="text-gray-400 text-sm mt-2">
                Community-contributed articles and resources
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg hover:bg-black/30 transition-colors">
                <div>
                  <div className="text-gray-300 text-sm">从 RGB 到 RGB++</div>
                  <div className="text-xs text-gray-500">CKB如何赋能比特币生态资产协议</div>
                </div>
                <Button size="sm" variant="cyber" effect="shimmer" asChild>
                  <a href="https://talk.nervos.org/t/rgb-rgb-ckb/7791/1" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    阅读
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Deployment */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-3">Deployment</h2>
            <p className="text-gray-400">Contract deployments and API endpoints across different networks</p>
          </div>

          <div className="space-y-8">
            {/* Mainnet Deployment */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
                Mirana Mainnet
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-500/20">
                  <CardHeader>
                    <CardTitle className="flex items-center text-white">
                      <Shield className="h-5 w-5 mr-2 text-orange-400" />
                      RGB++ Script
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-xs font-mono">
                    <div className="grid grid-cols-3 gap-2 text-gray-400">
                      <span>Parameter</span>
                      <span className="col-span-2">Value</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <span className="text-gray-400">code_hash</span>
                      <span className="col-span-2 text-gray-300 break-all">0xbc6c568a1a0d0a09f6844dc9d74ddb4343c32143ff25f727c59edf4fb72d6936</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <span className="text-gray-400">hash_type</span>
                      <span className="col-span-2 text-gray-300">type</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <span className="text-gray-400">tx_hash</span>
                      <span className="col-span-2 text-gray-300 break-all">0x04c5c3e69f1aa6ee27fb9de3d15a81704e387ab3b453965adbe0b6ca343c6f41</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <span className="text-gray-400">index</span>
                      <span className="col-span-2 text-gray-300">0x0</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <span className="text-gray-400">dep_type</span>
                      <span className="col-span-2 text-gray-300">code</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20">
                  <CardHeader>
                    <CardTitle className="flex items-center text-white">
                      <Lock className="h-5 w-5 mr-2 text-blue-400" />
                      BTC_TIME_lock Script
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-xs font-mono">
                    <div className="grid grid-cols-3 gap-2 text-gray-400">
                      <span>Parameter</span>
                      <span className="col-span-2">Value</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <span className="text-gray-400">code_hash</span>
                      <span className="col-span-2 text-gray-300 break-all">0x70d64497a075bd651e98ac030455ea200637ee325a12ad08aff03f1a117e5a62</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <span className="text-gray-400">hash_type</span>
                      <span className="col-span-2 text-gray-300">type</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <span className="text-gray-400">tx_hash</span>
                      <span className="col-span-2 text-gray-300 break-all">0x6257bf4297ee75fcebe2654d8c5f8d93bc9fc1b3dc62b8cef54ffe166162e996</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <span className="text-gray-400">index</span>
                      <span className="col-span-2 text-gray-300">0x0</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <span className="text-gray-400">dep_type</span>
                      <span className="col-span-2 text-gray-300">code</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Testnet Deployments */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Code className="h-5 w-5 mr-2 text-yellow-400" />
                Meepo Testnet
              </h3>

              {/* Bitcoin Testnet3 */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-300 mb-4 flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                  Bitcoin Testnet3
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-500/20">
                    <CardHeader>
                      <CardTitle className="flex items-center text-white">
                        <Shield className="h-5 w-5 mr-2 text-orange-400" />
                        RGB++ Script
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-xs font-mono">
                      <div className="grid grid-cols-3 gap-2 text-gray-400">
                        <span>Parameter</span>
                        <span className="col-span-2">Value</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <span className="text-gray-400">code_hash</span>
                        <span className="col-span-2 text-gray-300 break-all">0x61ca7a4796a4eb19ca4f0d065cb9b10ddcf002f10f7cbb810c706cb6bb5c3248</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <span className="text-gray-400">hash_type</span>
                        <span className="col-span-2 text-gray-300">type</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <span className="text-gray-400">tx_hash</span>
                        <span className="col-span-2 text-gray-300 break-all">0xf1de59e973b85791ec32debbba08dff80c63197e895eb95d67fc1e9f6b413e00</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <span className="text-gray-400">index</span>
                        <span className="col-span-2 text-gray-300">0x0</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <span className="text-gray-400">dep_type</span>
                        <span className="col-span-2 text-gray-300">code</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20">
                    <CardHeader>
                      <CardTitle className="flex items-center text-white">
                        <Lock className="h-5 w-5 mr-2 text-blue-400" />
                        BTC_TIME_lock Script
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-xs font-mono">
                      <div className="grid grid-cols-3 gap-2 text-gray-400">
                        <span>Parameter</span>
                        <span className="col-span-2">Value</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <span className="text-gray-400">code_hash</span>
                        <span className="col-span-2 text-gray-300 break-all">0x00cdf8fab0f8ac638758ebf5ea5e4052b1d71e8a77b9f43139718621f6849326</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <span className="text-gray-400">hash_type</span>
                        <span className="col-span-2 text-gray-300">type</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <span className="text-gray-400">tx_hash</span>
                        <span className="col-span-2 text-gray-300 break-all">0xde0f87878a97500f549418e5d46d2f7704c565a262aa17036c9c1c13ad638529</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <span className="text-gray-400">index</span>
                        <span className="col-span-2 text-gray-300">0x0</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <span className="text-gray-400">dep_type</span>
                        <span className="col-span-2 text-gray-300">code</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Bitcoin Signet */}
              <div>
                <h4 className="text-lg font-semibold text-gray-300 mb-4 flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                  Bitcoin Signet
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-500/20">
                    <CardHeader>
                      <CardTitle className="flex items-center text-white">
                        <Shield className="h-5 w-5 mr-2 text-orange-400" />
                        RGB++ Script
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-xs font-mono">
                      <div className="grid grid-cols-3 gap-2 text-gray-400">
                        <span>Parameter</span>
                        <span className="col-span-2">Value</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <span className="text-gray-400">code_hash</span>
                        <span className="col-span-2 text-gray-300 break-all">0xd07598deec7ce7b5665310386b4abd06a6d48843e953c5cc2112ad0d5a220364</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <span className="text-gray-400">hash_type</span>
                        <span className="col-span-2 text-gray-300">type</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <span className="text-gray-400">tx_hash</span>
                        <span className="col-span-2 text-gray-300 break-all">0x61efdeddbaa0bb4132c0eb174b3e8002ff5ec430f61ba46f30768d683c516eec</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <span className="text-gray-400">index</span>
                        <span className="col-span-2 text-gray-300">0x0</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <span className="text-gray-400">dep_type</span>
                        <span className="col-span-2 text-gray-300">code</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20">
                    <CardHeader>
                      <CardTitle className="flex items-center text-white">
                        <Lock className="h-5 w-5 mr-2 text-blue-400" />
                        BTC_TIME_lock Script
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-xs font-mono">
                      <div className="grid grid-cols-3 gap-2 text-gray-400">
                        <span>Parameter</span>
                        <span className="col-span-2">Value</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <span className="text-gray-400">code_hash</span>
                        <span className="col-span-2 text-gray-300 break-all">0x80a09eca26d77cea1f5a69471c59481be7404febf40ee90f886c36a948385b55</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <span className="text-gray-400">hash_type</span>
                        <span className="col-span-2 text-gray-300">type</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <span className="text-gray-400">tx_hash</span>
                        <span className="col-span-2 text-gray-300 break-all">0x5364b3535965e9eac9a35dd7af8e9e45a61d30a16e115923c032f80b28783e21</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <span className="text-gray-400">index</span>
                        <span className="col-span-2 text-gray-300">0x0</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <span className="text-gray-400">dep_type</span>
                        <span className="col-span-2 text-gray-300">code</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* API Endpoints */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Database className="h-5 w-5 mr-2 text-purple-400" />
                btc-assets-api
              </h3>
              <Card className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-purple-500/20">
                <CardContent className="p-6">
                  <p className="text-purple-200 text-sm mb-4">
                    RGB++ provides dedicated API endpoints for different network environments:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="space-y-2">
                      <div className="text-purple-200 text-sm font-medium">Testnet</div>
                      <code className="bg-black/30 px-3 py-2 rounded text-xs text-purple-100 block">
                        https://api.testnet.rgbpp.io
                      </code>
                    </div>
                    <div className="space-y-2">
                      <div className="text-purple-200 text-sm font-medium">Signet</div>
                      <code className="bg-black/30 px-3 py-2 rounded text-xs text-purple-100 block">
                        https://api.signet.rgbpp.io
                      </code>
                    </div>
                  </div>
                  <p className="text-purple-200 text-xs">
                    <strong>Mainnet:</strong> For production applications, access instructions are available in the{" "}
                    <a href="https://github.com/RGBPlusPlus/btc-assets-api?tab=readme-ov-file#mainnet" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-100 underline">
                      btc-assets-api repository
                    </a>.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-8 rounded-xl border border-purple-500/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Start Building with RGB++</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Ready to dive into RGB++ development? Start with our quick start guide or explore the core concepts to understand the protocol better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quickstart">
                <Button variant="gradient" effect="scale" className="shadow-lg shadow-purple-500/30">
                  <Zap className="mr-2 h-4 w-4" />
                  Quick Start Guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/concepts">
                <Button variant="cyber" effect="scale">
                  <Book className="mr-2 h-4 w-4" />
                  Core Concepts
                </Button>
              </Link>
              <Link href="/introduction">
                <Button variant="glass" effect="scale">
                  <Bitcoin className="mr-2 h-4 w-4" />
                  Introduction
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </DocLayout>
  )
}
