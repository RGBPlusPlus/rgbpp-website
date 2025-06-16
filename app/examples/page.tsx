import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, ArrowRight, FileText, Play, Copy, Bitcoin, Layers, Globe, Clock } from "lucide-react"
import Link from "next/link"

export default function ExamplesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Floating example icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[Bitcoin, Layers, Globe, Clock].map((Icon, i) => (
          <div
            key={i}
            className="absolute text-white/10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            <Icon className="h-8 w-8" />
          </div>
        ))}
      </div>

      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <FileText className="h-8 w-8 text-orange-400 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 h-8 w-8 text-orange-400 animate-ping opacity-20">
                  <FileText className="h-8 w-8" />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  RGB++ Examples
                </h1>
                <p className="text-xs text-gray-400">Use Cases & Implementation</p>
              </div>
            </Link>
            <Link
              href="/"
              className="text-gray-300 hover:text-orange-400 transition-all duration-300 hover:scale-105 group"
            >
              <ArrowLeft className="h-4 w-4 inline mr-1 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-400 mb-8 animate-fade-in-up">
          <Link href="/" className="hover:text-orange-400 transition-colors duration-300">
            Home
          </Link>
          <span>/</span>
          <span className="text-white">RGB++ Examples & Use Cases</span>
        </div>

        {/* Page Header */}
        <div className="mb-16 text-center animate-fade-in-up animation-delay-200">
          <Badge className="mb-6 bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 border-orange-500/30 hover:scale-105 transition-transform duration-300">
            <Play className="w-4 h-4 mr-2" />
            Implementation Examples
          </Badge>
          <h1 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white via-orange-200 to-red-200 bg-clip-text text-transparent">
            RGB++ Examples & Use Cases
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Explore practical, real-world RGB++ Protocol implementation examples including UDT operations, cross-chain
            transfers, and asset management workflows.
          </p>
        </div>

        <div className="animate-fade-in-up animation-delay-400">
          <Tabs defaultValue="udt" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4 bg-white/5 backdrop-blur-xl border border-white/10 p-1 rounded-xl">
              <TabsTrigger
                value="udt"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-600 data-[state=active]:to-red-600 data-[state=active]:text-white transition-all duration-300"
              >
                UDT Operations
              </TabsTrigger>
              <TabsTrigger
                value="transfer"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white transition-all duration-300"
              >
                Asset Transfers
              </TabsTrigger>
              <TabsTrigger
                value="leap"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-blue-600 data-[state=active]:text-white transition-all duration-300"
              >
                Cross-Chain
              </TabsTrigger>
              <TabsTrigger
                value="timelock"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white transition-all duration-300"
              >
                Time Lock
              </TabsTrigger>
            </TabsList>

            <TabsContent value="udt" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* UDT Issuance Example */}
                <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-orange-500/40 transition-all duration-500 transform hover:scale-[1.02] group animate-fade-in-up animation-delay-100">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center space-x-3 text-white">
                          <div className="p-2 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <Bitcoin className="h-5 w-5 text-white" />
                          </div>
                          <span>UDT Issuance</span>
                        </CardTitle>
                        <CardDescription className="text-gray-300">
                          Complete example of issuing RGB++ tokens
                        </CardDescription>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          variant="glass"
                          size="sm"
                          effect="scale"
                        >
                          <Play className="h-4 w-4 mr-2" />
                          Run
                        </Button>
                        <Button
                          variant="glass"
                          size="sm"
                          effect="scale"
                        >
                          <Copy className="h-4 w-4 mr-2" />
                          Copy
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-900/80 backdrop-blur-sm text-gray-100 p-4 rounded-lg overflow-x-auto mb-4 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
                      <pre className="text-sm">
                        {`// Example code for UDT Issuance
import { RgbppSDK } from 'rgbpp-sdk';
import { CCC } from '@nervosnetwork/ckb-sdk-core';

async function issueUDT() {
  const sdk = new RgbppSDK({
    btcAssetsApiToken: process.env.BTC_ASSETS_API_TOKEN,
    network: 'testnet'
  });

  const udtInfo = {
    name: 'My RGB++ Token',
    symbol: 'MRT',
    decimals: 8,
    totalSupply: '21000000'
  };

  const result = await sdk.issueUDT(udtInfo);
  console.log('UDT issued:', result);
}

issueUDT();`}
                      </pre>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg border border-orange-500/20">
                      <h4 className="font-semibold text-orange-300 mb-2">Key Features</h4>
                      <ul className="text-orange-200 text-sm space-y-1">
                        <li>• Token creation with metadata</li>
                        <li>• Initial distribution setup</li>
                        <li>• Bitcoin UTXO binding</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* UDT Transfer Example */}
                <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-blue-500/40 transition-all duration-500 transform hover:scale-[1.02] group animate-fade-in-up animation-delay-200">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center space-x-3 text-white">
                          <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <Layers className="h-5 w-5 text-white" />
                          </div>
                          <span>UDT Transfer</span>
                        </CardTitle>
                        <CardDescription className="text-gray-300">Bitcoin-based RGB++ asset transfers</CardDescription>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          variant="glass"
                          size="sm"
                          effect="scale"
                        >
                          <Play className="h-4 w-4 mr-2" />
                          Run
                        </Button>
                        <Button
                          variant="glass"
                          size="sm"
                          effect="scale"
                        >
                          <Copy className="h-4 w-4 mr-2" />
                          Copy
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-900/80 backdrop-blur-sm text-gray-100 p-4 rounded-lg overflow-x-auto mb-4 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                      <pre className="text-sm">
                        {`// Example code for UDT Transfer
import { RgbppSDK } from 'rgbpp-sdk';

async function transferUDT() {
  const sdk = new RgbppSDK({
    btcAssetsApiToken: process.env.BTC_ASSETS_API_TOKEN,
    network: 'testnet'
  });

  const transferParams = {
    udtId: 'your-udt-id',
    fromAddress: 'sender-bitcoin-address',
    toAddress: 'receiver-bitcoin-address',
    amount: '1000000' // 0.01 tokens (8 decimals)
  };

  const result = await sdk.transferUDT(transferParams);
  console.log('Transfer completed:', result);
}

transferUDT();`}
                      </pre>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg border border-blue-500/20">
                      <h4 className="font-semibold text-blue-300 mb-2">Transfer Features</h4>
                      <ul className="text-blue-200 text-sm space-y-1">
                        <li>• Secure asset movement</li>
                        <li>• Bitcoin anchoring</li>
                        <li>• RGB++ protocol compliance</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="transfer" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Bitcoin-based Transfer */}
                <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-purple-500/40 transition-all duration-500 transform hover:scale-[1.02] group animate-fade-in-up animation-delay-100">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center space-x-3 text-white">
                          <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <Bitcoin className="h-5 w-5 text-white" />
                          </div>
                          <span>Bitcoin-based RGB++ Transfers</span>
                        </CardTitle>
                        <CardDescription className="text-gray-300">
                          Transfer assets using Bitcoin transactions
                        </CardDescription>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          variant="glass"
                          size="sm"
                          effect="scale"
                        >
                          <Play className="h-4 w-4 mr-2" />
                          Run
                        </Button>
                        <Button
                          variant="glass"
                          size="sm"
                          effect="scale"
                        >
                          <Copy className="h-4 w-4 mr-2" />
                          Copy
                        </Button>
                        <Link href="https://mempool.space/tx/YOUR_BITCOIN_TX_ID" target="_blank">
                          <Button
                            variant="glass"
                            size="sm"
                            effect="scale"
                          >
                            View Transaction
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-900/80 backdrop-blur-sm text-gray-100 p-4 rounded-lg overflow-x-auto mb-4 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                      <pre className="text-sm">
                        {`// Bitcoin-based RGB++ asset transfers
import { RgbppSDK } from 'rgbpp-sdk';
import { BitcoinWallet } from 'bitcoin-wallet';

async function bitcoinBasedTransfer() {
  const wallet = new BitcoinWallet();
  const sdk = new RgbppSDK({
    btcAssetsApiToken: process.env.BTC_ASSETS_API_TOKEN,
    network: 'testnet'
  });

  // Create Bitcoin transaction with RGB++ commitment
  const btcTx = await wallet.createTransaction({
    outputs: [{
      address: 'recipient-address',
      value: 546 // dust amount
    }],
    opReturn: sdk.createCommitment({
      udtId: 'your-udt-id',
      amount: '1000000'
    })
  });

  // Broadcast Bitcoin transaction
  const txId = await wallet.broadcast(btcTx);
  console.log('Bitcoin TX:', txId);

  // Process RGB++ transfer
  const result = await sdk.processTransfer(txId);
  console.log('RGB++ transfer:', result);
}

bitcoinBasedTransfer();`}
                      </pre>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
                      <h4 className="font-semibold text-purple-300 mb-2">Transfer Features</h4>
                      <ul className="text-purple-200 text-sm space-y-1">
                        <li>• Bitcoin transaction anchoring</li>
                        <li>• OP_RETURN commitments</li>
                        <li>• Cross-chain verification</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="leap" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Leap to CKB Example */}
                <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-green-500/40 transition-all duration-500 transform hover:scale-[1.02] group animate-fade-in-up animation-delay-100">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center space-x-3 text-white">
                          <div className="p-2 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <Globe className="h-5 w-5 text-white" />
                          </div>
                          <span>Leap to CKB</span>
                        </CardTitle>
                        <CardDescription className="text-gray-300">Moving assets from Bitcoin to CKB</CardDescription>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          variant="glass"
                          size="sm"
                          effect="scale"
                        >
                          <Play className="h-4 w-4 mr-2" />
                          Run
                        </Button>
                        <Button
                          variant="glass"
                          size="sm"
                          effect="scale"
                        >
                          <Copy className="h-4 w-4 mr-2" />
                          Copy
                        </Button>
                        <Link href="https://explorer.nervos.org/transaction/YOUR_CKB_TX_ID" target="_blank">
                          <Button
                            variant="glass"
                            size="sm"
                            effect="scale"
                          >
                            View Transaction
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-900/80 backdrop-blur-sm text-gray-100 p-4 rounded-lg overflow-x-auto mb-4 border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
                      <pre className="text-sm">
                        {`// Moving assets from Bitcoin to CKB
import { RgbppSDK } from 'rgbpp-sdk';
import { CCC } from '@nervosnetwork/ckb-sdk-core';

async function leapToCKB() {
  const sdk = new RgbppSDK({
    btcAssetsApiToken: process.env.BTC_ASSETS_API_TOKEN,
    network: 'testnet'
  });

  const ckb = new CCC({
    url: process.env.CKB_RPC_URL
  });

  // Initiate leap from Bitcoin to CKB
  const leapParams = {
    udtId: 'your-udt-id',
    amount: '1000000',
    fromBtcAddress: 'bitcoin-address',
    toCkbAddress: 'ckb-address'
  };

  // Create leap transaction
  const leapTx = await sdk.createLeapToCKB(leapParams);
  
  // Submit to CKB network
  const txHash = await ckb.rpc.sendTransaction(leapTx);
  console.log('Leap transaction:', txHash);

  // Monitor leap completion
  const result = await sdk.waitForLeapCompletion(txHash);
  console.log('Leap completed:', result);
}

leapToCKB();`}
                      </pre>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/20">
                      <h4 className="font-semibold text-green-300 mb-2">Leap Features</h4>
                      <ul className="text-green-200 text-sm space-y-1">
                        <li>• Cross-chain asset transfer</li>
                        <li>• Secure bridge mechanism</li>
                        <li>• CKB programmability unlock</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="timelock" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Time Lock Unlock Example */}
                <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-yellow-500/40 transition-all duration-500 transform hover:scale-[1.02] group animate-fade-in-up animation-delay-100">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center space-x-3 text-white">
                          <div className="p-2 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <Clock className="h-5 w-5 text-white" />
                          </div>
                          <span>Time Lock Unlock</span>
                        </CardTitle>
                        <CardDescription className="text-gray-300">Unlocking BTC_TIME_lock contracts</CardDescription>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          variant="glass"
                          size="sm"
                          effect="scale"
                        >
                          <Play className="h-4 w-4 mr-2" />
                          Run
                        </Button>
                        <Button
                          variant="glass"
                          size="sm"
                          effect="scale"
                        >
                          <Copy className="h-4 w-4 mr-2" />
                          Copy
                        </Button>
                        <Link href="https://rgbpp.space/tx/YOUR_RGBPP_TX_ID" target="_blank">
                          <Button
                            variant="glass"
                            size="sm"
                            effect="scale"
                          >
                            View Transaction
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-900/80 backdrop-blur-sm text-gray-100 p-4 rounded-lg overflow-x-auto mb-4 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
                      <pre className="text-sm">
                        {`// Unlocking BTC_TIME_lock contracts
import { RgbppSDK } from 'rgbpp-sdk';
import { CCC } from '@nervosnetwork/ckb-sdk-core';

async function unlockTimeLock() {
  const sdk = new RgbppSDK({
    btcAssetsApiToken: process.env.BTC_ASSETS_API_TOKEN,
    network: 'testnet'
  });

  const ckb = new CCC({
    url: process.env.CKB_RPC_URL
  });

  // Check if time lock has expired
  const timeLockCell = await ckb.rpc.getLiveCell({
    outPoint: {
      txHash: 'time-lock-tx-hash',
      index: '0x0'
    }
  });

  const currentBlock = await ckb.rpc.getTipBlockNumber();
  const lockTime = timeLockCell.output.type.args;

  if (parseInt(currentBlock) >= parseInt(lockTime)) {
    // Create unlock transaction
    const unlockTx = await sdk.createTimeLockUnlock({
      timeLockOutPoint: timeLockCell.outPoint,
      recipient: 'recipient-address'
    });

    const txHash = await ckb.rpc.sendTransaction(unlockTx);
    console.log('Time lock unlocked:', txHash);
  } else {
    console.log('Time lock not yet expired');
  }
}

unlockTimeLock();`}
                      </pre>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg border border-yellow-500/20">
                      <h4 className="font-semibold text-yellow-300 mb-2">Time Lock Features</h4>
                      <ul className="text-yellow-200 text-sm space-y-1">
                        <li>• Conditional asset release</li>
                        <li>• Time-based constraints</li>
                        <li>• Secure contract execution</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10 animate-fade-in-up animation-delay-800">
          <Link href="/concepts">
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 transform hover:scale-105 group"
            >
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              Previous: Core Concepts
            </Button>
          </Link>

          <Link href="/components">
            <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white border-0 shadow-lg transform hover:scale-105 transition-all duration-300 group">
              Next: Core Components
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
