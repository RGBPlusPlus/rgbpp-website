"use client"

import { DocLayout } from "@/components/doc-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Zap, Code, Wrench, Bitcoin, Network, ArrowRight, ExternalLink, Copy, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function QuickStartPage() {
  return (
    <DocLayout
      title="Quick Start"
      description="Get up and running with RGB++ Protocol. Learn how to issue, transfer, and manage xUDT tokens using the RGB++ SDK."
    >
      <div className="space-y-12">
        {/* Prerequisites */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Wrench className="h-8 w-8 mr-3 text-blue-400" />
            Prerequisites
          </h2>

          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-blue-500/20 mb-6">
            <div className="flex items-start space-x-4">
              <AlertCircle className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-blue-300 mb-2">Before You Start</h4>
                <p className="text-blue-200 text-sm mb-4">
                  Before getting started, refer to the btc-assets-api section to apply for an access token.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-gray-300">Node.js 16+ installed</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-gray-300">Basic understanding of Bitcoin UTXOs</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-gray-300">RGB++ API access token</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white/5 backdrop-blur-xl border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Network className="h-6 w-6 mr-2 text-green-400" />
                  Testnet Access
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <span className="text-gray-400 text-sm">Testnet API:</span>
                    <code className="block text-green-400 font-mono text-sm bg-black/20 p-2 rounded mt-1">
                      https://api.testnet.rgbpp.io
                    </code>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Signet API:</span>
                    <code className="block text-blue-400 font-mono text-sm bg-black/20 p-2 rounded mt-1">
                      https://api.signet.rgbpp.io
                    </code>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-xl border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Code className="h-6 w-6 mr-2 text-purple-400" />
                  Installation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <span className="text-gray-400 text-sm">Primary SDK (Recommended):</span>
                    <div className="flex items-center space-x-2 mt-1">
                      <code className="flex-1 text-purple-400 font-mono text-sm bg-black/20 p-2 rounded">
                        npm install @ckb-ccc/rgbpp
                      </code>
                      <Button size="sm" variant="outline" className="border-gray-600">
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* UDT Operations */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Bitcoin className="h-8 w-8 mr-3 text-orange-400" />
            UDT Token Operations
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            In CKB, custom tokens are implemented as User-Defined Tokens (UDTs). The following examples demonstrate
            RGB++ protocol by issuing a RGB++ token using the pre-deployed xUDT Script.
          </p>

          {/* Token Issuance */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-white mb-6">1. Token Issuance</h3>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-white/10">
                <h4 className="font-semibold text-white mb-4">Process Overview</h4>
                <div className="grid md:grid-cols-4 gap-4">
                  {[
                    { step: "1", title: "UTXO Selection", desc: "Select or create initial single-use seal" },
                    { step: "2", title: "CKB Transaction", desc: "Create RGB++ lock script with UTXO" },
                    { step: "3", title: "Bitcoin Transaction", desc: "Submit commitment to Bitcoin network" },
                    { step: "4", title: "Finalization", desc: "Complete CKB transaction after confirmation" }
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-2">
                        {item.step}
                      </div>
                      <h5 className="font-semibold text-white text-sm mb-1">{item.title}</h5>
                      <p className="text-gray-400 text-xs">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-black/20 p-6 rounded-xl border border-white/10">
                <h4 className="font-semibold text-white mb-4 flex items-center">
                  <Code className="h-5 w-5 mr-2 text-green-400" />
                  Code Example: Token Issuance
                </h4>
                <pre className="text-sm text-gray-300 overflow-x-auto">
                  <code>{`async function issueUdt({
  udtScriptInfo,
  utxoSeal,
}: {
  udtScriptInfo: ScriptInfo;
  utxoSeal?: UtxoSeal;
}) {
  // Initialize the RGB++ environment
  const {
    rgbppBtcWallet, 
    rgbppUdtClient, 
    utxoBasedAccountAddress, 
    ckbRgbppUnlockSinger,
  } = initializeRgbppEnv();

  // Prepare the initial single-use seal and corresponding RGB++ cells
  if (!utxoSeal) {
    utxoSeal = await rgbppBtcWallet.prepareUtxoSeal();
  }
  const rgbppIssuanceCells = await prepareRgbppCells(utxoSeal, rgbppUdtClient);

  // Construct the partial CKB transaction
  const ckbPartialTx = await rgbppUdtClient.issuanceCkbPartialTx({
    token: udtToken,
    amount: issuanceAmount,
    rgbppLiveCells: rgbppIssuanceCells,
    udtScriptInfo,
  });

  // Build and submit the Bitcoin transaction
  const { psbt, indexedCkbPartialTx } = await rgbppBtcWallet.buildPsbt({
    ckbPartialTx,
    ckbClient,
    rgbppUdtClient,
    btcChangeAddress: utxoBasedAccountAddress,
    receiverBtcAddresses: [utxoBasedAccountAddress],
  });
  
  const btcTxId = await rgbppBtcWallet.signAndSendTx(psbt);
  
  // Complete the CKB transaction
  const ckbPartialTxInjected = await rgbppUdtClient.injectTxIdToRgbppCkbTx(
    indexedCkbPartialTx,
    btcTxId,
  );
  
  const rgbppSignedCkbTx = await ckbRgbppUnlockSinger.signTransaction(ckbPartialTxInjected);
  await rgbppSignedCkbTx.completeFeeBy(ckbSigner);
  const ckbFinalTx = await ckbSigner.signTransaction(rgbppSignedCkbTx);
  const txHash = await ckbSigner.client.sendTransaction(ckbFinalTx);
  
  return txHash;
}`}</code>
                </pre>
              </div>

              <div className="flex items-center space-x-4">
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-300">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  View Bitcoin Transaction
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-300">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  View CKB Transaction
                </Button>
              </div>
            </div>
          </div>

          {/* Token Transfer */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-white mb-6">2. Token Transfer on Bitcoin</h3>

            <div className="space-y-6">
              <p className="text-gray-300">
                The process of transferring RGB++ xUDT tokens on Bitcoin follows a similar pattern to the issuance process.
                The unique ID obtained during issuance is used to construct the xUDT script that identifies the token.
              </p>

              <div className="bg-black/20 p-6 rounded-xl border border-white/10">
                <h4 className="font-semibold text-white mb-4 flex items-center">
                  <Code className="h-5 w-5 mr-2 text-blue-400" />
                  Code Example: Token Transfer
                </h4>
                <pre className="text-sm text-gray-300 overflow-x-auto">
                  <code>{`async function transferUdt({
  udtScriptInfo,
  receivers,
}: {
  udtScriptInfo: ScriptInfo;
  receivers: RgbppBtcReceiver[];
}) {
  const udt = new ccc.udt.Udt(
    udtScriptInfo.cellDep.outPoint,
    udtScriptInfo.script,
  );
  
  // Complete the outputs
  let { res: tx } = await udt.transfer(
    ckbSigner as unknown as ccc.Signer,
    receivers.map((receiver) => ({
      to: rgbppUdtClient.buildPseudoRgbppLockScript(),
      amount: ccc.fixedPointFrom(receiver.amount),
    })),
  );
  
  // Auto complete the xUDT inputs
  const txWithInputs = await udt.completeChangeToLock(
    tx,
    ckbRgbppUnlockSinger,
    rgbppUdtClient.buildPseudoRgbppLockScript(),
  );

  // Continue with Bitcoin transaction submission...
}`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Leap to CKB */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-white mb-6">3. Leap to CKB</h3>

            <div className="space-y-6">
              <p className="text-gray-300">
                The process of leaping xUDT from Bitcoin to CKB follows the same pattern as regular transfer,
                with one key distinction: after the leap, the lock script changes from <code className="text-orange-400">RGBPP_Lock</code> to <code className="text-blue-400">BTC_TIME_lock</code>.
              </p>

              <div className="bg-black/20 p-6 rounded-xl border border-white/10">
                <h4 className="font-semibold text-white mb-4 flex items-center">
                  <Code className="h-5 w-5 mr-2 text-purple-400" />
                  Code Example: Leap to CKB
                </h4>
                <pre className="text-sm text-gray-300 overflow-x-auto">
                  <code>{`async function btcUdtToCkb({
  udtScriptInfo,
  receivers,
}: {
  udtScriptInfo: ScriptInfo;
  receivers: { address: string; amount: bigint }[];
}) {
  const udt = new ccc.udt.Udt(
    udtScriptInfo.cellDep.outPoint,
    udtScriptInfo.script,
  );

  let { res: tx } = await udt.transfer(
    ckbSigner as unknown as ccc.Signer,
    await Promise.all(
      receivers.map(async (receiver) => ({
        // build the BTC_TIME_lock script
        to: await rgbppUdtClient.buildBtcTimeLockScript(receiver.address),
        amount: ccc.fixedPointFrom(receiver.amount),
      })),
    ),
  );

  // Continue with transaction processing...
}`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Unlock Time Lock */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">4. Unlocking BTC_TIME_lock</h3>

            <div className="space-y-6">
              <p className="text-gray-300">
                This process is straightforward. Wait for the required number of confirmations (default is 6) before
                unlocking the <code className="text-blue-400">BTC_TIME_lock</code>. After unlocking, the xUDT becomes a standard CKB asset.
              </p>

              <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 p-4 rounded-lg border border-yellow-500/20">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-yellow-300 mb-1">Important Note</h5>
                    <p className="text-yellow-200 text-sm">
                      This process does not require any Bitcoin transaction. Only CKB transaction is needed to unlock the time lock.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* API Configuration */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Wrench className="h-8 w-8 mr-3 text-green-400" />
            API Configuration
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/5 backdrop-blur-xl border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Testnet Configuration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-gray-400 text-sm">API Endpoint:</label>
                  <code className="block text-green-400 font-mono text-sm bg-black/20 p-2 rounded mt-1">
                    https://api.testnet.rgbpp.io
                  </code>
                </div>
                <div>
                  <label className="text-gray-400 text-sm">Network:</label>
                  <span className="block text-white mt-1">Bitcoin Testnet3 + CKB Testnet</span>
                </div>
                <div>
                  <label className="text-gray-400 text-sm">Token Generation:</label>
                  <span className="block text-white mt-1">Available via /token/generate API</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-xl border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Mainnet Configuration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-gray-400 text-sm">Access:</label>
                  <span className="block text-white mt-1">Whitelisted users only</span>
                </div>
                <div>
                  <label className="text-gray-400 text-sm">Network:</label>
                  <span className="block text-white mt-1">Bitcoin Mainnet + CKB Mainnet</span>
                </div>
                <div>
                  <label className="text-gray-400 text-sm">Contact:</label>
                  <span className="block text-white mt-1">Request access token from team</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Next Steps */}
        <section className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-8 rounded-xl border border-orange-500/20">
          <h3 className="text-2xl font-bold text-white mb-4">What's Next?</h3>
          <p className="text-gray-300 mb-6">
            Now that you understand the basics, dive deeper into RGB++ concepts and explore advanced features.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/concepts">
              <Button variant="cyber" effect="scale" className="w-full">
                <Bitcoin className="mr-2 h-4 w-4" />
                Core Concepts
              </Button>
            </Link>
            <Link href="/examples">
              <Button variant="glass" effect="scale" className="w-full">
                <Code className="mr-2 h-4 w-4" />
                More Examples
              </Button>
            </Link>
            <Link href="/components">
              <Button variant="gradient" effect="scale" className="w-full shadow-lg shadow-purple-500/30">
                <Network className="mr-2 h-4 w-4" />
                Components
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </DocLayout>
  )
}
