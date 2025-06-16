"use client"

import { DocLayout } from "@/components/doc-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Hash, Database, Link, Shield, ExternalLink, ArrowRight, GitBranch, Layers, Network } from "lucide-react"
import NextLink from "next/link"

export default function GlossaryPage() {
  const glossaryTerms = [
    {
      term: "UTXO",
      definition: "A Bitcoin Unspent Transaction Output. It is defined by a transaction hash and a vout index which, collectively, constitute an outpoint.",
      category: "Bitcoin",
      icon: Hash,
      color: "orange"
    },
    {
      term: "CKB Cell",
      definition: "Cells are the primary state units in CKB, within them users can include arbitrary states. All data on Nervos CKB is stored in Cells. A Cell has 4 fields: capacity, data, type and lock.",
      category: "CKB",
      icon: Database,
      color: "green",
      link: "https://docs.nervos.org/docs/tech-explanation/cell-model"
    },
    {
      term: "Isomorphic Binding",
      definition: "A one-to-one mapping mechanism in RGB++ that links Bitcoin UTXOs to CKB Cells, enabling ownership synchronization through Bitcoin's UTXO locks while maintaining state in CKB's Cell data and type fields. This binding allows for Turing-complete Bitcoin UTXO transactions validated by CKB Cells.",
      category: "RGB++",
      icon: Link,
      color: "purple"
    },
    {
      term: "CKB Script",
      definition: "A Script in CKB is a binary executable that can be executed on-chain. It is a program that runs on a virtual machine powered by the RISC-V instruction set, called the CKB-VM, and can perform arbitrary logic to guard and protect your Cells. You can think of it as smart contract.",
      category: "CKB",
      icon: Layers,
      color: "blue",
      subtypes: [
        {
          name: "Lock Script",
          description: "A required Script controlling the ownership and access to a Cell, ensuring only authorized users can spend/consume the Cell.",
          link: "https://docs.nervos.org/docs/tech-explanation/lock-script"
        },
        {
          name: "Type Script",
          description: "An optional Script dictating how a Cell can be used or modified in a transaction.",
          link: "https://docs.nervos.org/docs/tech-explanation/type-script"
        }
      ]
    },
    {
      term: "xUDT Script",
      definition: "Extensible UDT(xUDT) is the User-Defined-Token(fungible token) Script implementation on CKB. You can think of it as the ERC-20 smart contract on Ethereum.",
      category: "CKB",
      icon: Shield,
      color: "cyan",
      link: "https://docs.nervos.org/docs/common-scripts/xudt"
    },
    {
      term: "SPV",
      definition: "Simple Payment Verification (SPV) allows a transaction receiver to confirm that the sender has control of the source funds of the payment they are offering, without needing to download the entire blockchain. This is achieved using Merkle proofs.",
      category: "Bitcoin",
      icon: Network,
      color: "indigo",
      link: "https://developer.bitcoin.org/devguide/operating_modes.html#simplified-payment-verification-spv",
      reference: "https://bitcoin.org/bitcoin.pdf"
    },
    {
      term: "MMR",
      definition: "A Merkle Mountain Range (MMR) is a binary hash tree data structure designed to allow efficient appending of new leaves while maintaining the integrity of the existing nodes. A MMR proof can be utilized to verify whether a specific item is included in the MMR root.",
      category: "Cryptography",
      icon: Hash,
      color: "pink",
      link: "https://github.com/opentimestamps/opentimestamps-server/blob/master/doc/merkle-mountain-range.md"
    },
    {
      term: "Merkle Root",
      definition: "A merkle root is created by hashing together pairs of TXIDs to get a short and unique fingerprint for all the transactions in a block. This merkle root is placed in a block header to prevent the contents of the block from being tampered with later on.",
      category: "Cryptography",
      icon: Hash,
      color: "red",
      link: "https://developer.bitcoin.org/reference/block_chain.html#merkle-trees"
    },
    {
      term: "OP_RETURN",
      definition: "The OP_RETURN standard locking script just contains the OP_RETURN opcode followed by one or more data pushes. The standard OP_RETURN script has a maximum size limit of 83 bytes. However, there is an ongoing discussion and corresponding pull request to relax these standardness restrictions.",
      category: "Bitcoin",
      icon: FileText,
      color: "yellow",
      codeExample: `OP_RETURN
OP_PUSHBYTES_11
68656c6c6f20776f726c64`,
      links: [
        {
          title: "OP_RETURN Technical Details",
          url: "https://learnmeabitcoin.com/technical/script/return/"
        },
        {
          title: "Bitcoin Core Pull Request #32359",
          url: "https://github.com/bitcoin/bitcoin/pull/32359"
        }
      ]
    }
  ]

  const categories = [...new Set(glossaryTerms.map(term => term.category))]

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      orange: "from-orange-500/10 to-red-500/10 border-orange-500/20 text-orange-300",
      green: "from-green-500/10 to-emerald-500/10 border-green-500/20 text-green-300",
      purple: "from-purple-500/10 to-pink-500/10 border-purple-500/20 text-purple-300",
      blue: "from-blue-500/10 to-cyan-500/10 border-blue-500/20 text-blue-300",
      cyan: "from-cyan-500/10 to-blue-500/10 border-cyan-500/20 text-cyan-300",
      indigo: "from-indigo-500/10 to-purple-500/10 border-indigo-500/20 text-indigo-300",
      pink: "from-pink-500/10 to-rose-500/10 border-pink-500/20 text-pink-300",
      red: "from-red-500/10 to-pink-500/10 border-red-500/20 text-red-300",
      yellow: "from-yellow-500/10 to-orange-500/10 border-yellow-500/20 text-yellow-300"
    }
    return colorMap[color] || "from-gray-500/10 to-slate-500/10 border-gray-500/20 text-gray-300"
  }

  const getTermUrl = (term: string) => {
    const urlMap: Record<string, string> = {
      'UTXO': 'utxo',
      'CKB Cell': 'ckb-cell',
      'Isomorphic Binding': 'isomorphic-binding',
      'CKB Script': 'ckb-script',
      'xUDT Script': 'xudt-script',
      'SPV': 'spv',
      'MMR': 'mmr',
      'Merkle Root': 'merkle-root',
      'OP_RETURN': 'op-return'
    }
    return urlMap[term] || term.toLowerCase().replace(/\s+/g, '-').replace('_', '-')
  }

  return (
    <DocLayout
      title="Glossary"
      description="Comprehensive glossary of terms and definitions for RGB++ Protocol, Bitcoin, CKB, and related cryptographic concepts."
    >
      <div className="space-y-12">
        {/* Introduction */}
        <section>
          <Card className="bg-white/5 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center text-white text-3xl">
                <FileText className="h-8 w-8 mr-3 text-blue-400" />
                RGB++ Protocol Glossary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-300 leading-relaxed text-lg">
                This glossary provides definitions for key terms and concepts used throughout the RGB++ Protocol documentation.
                Understanding these terms is essential for working with RGB++ and its underlying technologies.
              </p>

              <div className="grid md:grid-cols-4 gap-4">
                {categories.map((category, index) => (
                  <div key={index} className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4 rounded-xl border border-blue-500/20">
                    <h3 className="font-semibold text-blue-300 text-sm">{category}</h3>
                    <p className="text-blue-200 text-xs mt-1">
                      {glossaryTerms.filter(term => term.category === category).length} terms
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Terms by Category */}
        {categories.map((category, categoryIndex) => (
          <section key={categoryIndex}>
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <Badge className="mr-3 bg-blue-500/20 text-blue-300 border-blue-500/30">
                {category}
              </Badge>
              Terms & Definitions
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {glossaryTerms
                .filter(term => term.category === category)
                .map((term, termIndex) => (
                  <NextLink key={termIndex} href={`/glossary/${getTermUrl(term.term)}`}>
                    <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer group h-full">
                      <CardHeader>
                        <CardTitle className="flex items-center text-white text-xl">
                          <term.icon className={`h-6 w-6 mr-3 group-hover:scale-110 transition-transform duration-200 ${term.color === 'orange' ? 'text-orange-400' :
                            term.color === 'green' ? 'text-green-400' :
                              term.color === 'purple' ? 'text-purple-400' :
                                term.color === 'blue' ? 'text-blue-400' :
                                  term.color === 'cyan' ? 'text-cyan-400' :
                                    term.color === 'indigo' ? 'text-indigo-400' :
                                      term.color === 'pink' ? 'text-pink-400' :
                                        term.color === 'red' ? 'text-red-400' :
                                          term.color === 'yellow' ? 'text-yellow-400' : 'text-gray-400'}`} />
                          {term.term}
                          <Badge className={`ml-auto bg-${term.color}-500/20 text-${term.color}-300 border-${term.color}-500/30`}>
                            {term.category}
                          </Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300 leading-relaxed text-sm line-clamp-3">
                          {term.definition}
                        </p>
                        <div className="mt-4 flex items-center text-blue-400 text-sm group-hover:text-blue-300 transition-colors duration-200">
                          <span>Learn more</span>
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                        </div>
                      </CardContent>
                    </Card>
                  </NextLink>
                ))}
            </div>
          </section>
        ))}

        {/* Additional Resources */}
        <section>
          <Card className="bg-white/5 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center text-white text-2xl">
                <GitBranch className="h-7 w-7 mr-3 text-green-400" />
                Additional Learning Resources
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                For more comprehensive information about RGB++ Protocol and its underlying technologies,
                explore these additional resources and documentation.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-blue-500/20">
                  <h4 className="font-semibold text-blue-300 mb-4 flex items-center">
                    <FileText className="h-5 w-5 mr-2" />
                    Protocol Documentation
                  </h4>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full border-blue-500/30 text-blue-300 hover:bg-blue-500/10 text-sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      RGB++ Light Paper
                    </Button>
                    <Button variant="outline" className="w-full border-blue-500/30 text-blue-300 hover:bg-blue-500/10 text-sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Technical Specifications
                    </Button>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-6 rounded-xl border border-green-500/20">
                  <h4 className="font-semibold text-green-300 mb-4 flex items-center">
                    <Database className="h-5 w-5 mr-2" />
                    CKB Documentation
                  </h4>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full border-green-500/30 text-green-300 hover:bg-green-500/10 text-sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Cell Model Guide
                    </Button>
                    <Button variant="outline" className="w-full border-green-500/30 text-green-300 hover:bg-green-500/10 text-sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Script Development
                    </Button>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-6 rounded-xl border border-orange-500/20">
                  <h4 className="font-semibold text-orange-300 mb-4 flex items-center">
                    <Hash className="h-5 w-5 mr-2" />
                    Bitcoin Resources
                  </h4>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full border-orange-500/30 text-orange-300 hover:bg-orange-500/10 text-sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Bitcoin Developer Guide
                    </Button>
                    <Button variant="outline" className="w-full border-orange-500/30 text-orange-300 hover:bg-orange-500/10 text-sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      UTXO Model Explained
                    </Button>
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
            Now that you're familiar with the key terms, explore the RGB++ Protocol documentation and start building.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <NextLink href="/introduction">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-white/10">
                <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                Back to Introduction
              </Button>
            </NextLink>
            <NextLink href="/quickstart">
              <Button className="bg-blue-500 hover:bg-blue-600">
                Quick Start Guide
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </NextLink>
            <NextLink href="/source-code">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-white/10">
                View Resources
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </NextLink>
          </div>
        </section>
      </div>
    </DocLayout>
  )
} 