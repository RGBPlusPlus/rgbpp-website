"use client"

import { useState } from "react"
import { DocLayout } from "@/components/doc-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Zap, Code, Wrench, Bitcoin, Network, ArrowRight, ExternalLink, Copy, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"
import CodeBlock from "@/components/ui/code-block"

export default function UDTExamplePage() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    const text = "npm i ckb-ccc@0.0.0-canary-20250710073207"

    try {
      // Try modern Clipboard API first
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
        return
      }

      // Fallback for older browsers or non-secure contexts
      const textArea = document.createElement('textarea')
      textArea.value = text
      textArea.style.position = 'fixed'
      textArea.style.left = '-999999px'
      textArea.style.top = '-999999px'
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()

      const successful = document.execCommand('copy')
      document.body.removeChild(textArea)

      if (successful) {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } else {
        throw new Error('Copy command failed')
      }
    } catch (err) {
      console.error('Failed to copy text: ', err)
      // Optionally show user-friendly error message
      alert('Copy failed. Please copy manually: ' + text)
    }
  }
  return (
    <DocLayout
      title="UDT"
      description="Learn how to issue, transfer, and manage xUDT tokens using the RGB++ SDK through practical examples."
    >
      <div className="space-y-12">
        {/* Prerequisites */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Wrench className="h-8 w-8 mr-3 text-blue-400" />
            Prerequisites
          </h2>

          <div className="flex flex-col md:grid md:grid-cols-2 gap-6">
            {/* Installation - 移动端和桌面端都在第一行，桌面端跨两列 */}
            <Card className="bg-white/5 backdrop-blur-xl border-white/10 order-1 md:order-1 md:col-span-2">
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
                        npm i ckb-ccc@0.0.0-canary-20250710073207
                      </code>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-gray-600 hover:border-green-500 transition-colors"
                        onClick={handleCopy}
                      >
                        {copied ? (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testnet Access - 移动端第二个，桌面端第二个 */}
            <Card className="bg-white/5 backdrop-blur-xl border-white/10 order-2 md:order-2">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Network className="h-6 w-6 mr-2 text-green-400" />
                  Testnet Access
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <span className="text-gray-400 text-sm">Testnet3 API:</span>
                    <code className="block text-green-400 font-mono text-sm bg-black/20 p-2 rounded mt-1">
                      https://api-testnet.rgbpp.com
                    </code>
                    <code className="block text-green-400 font-mono text-sm bg-black/20 p-2 rounded mt-1">
                      https://api.testnet.rgbpp.io
                    </code>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mainnet Configuration - 移动端第三个，桌面端第三个 */}
            <Card className="bg-white/5 backdrop-blur-xl border-white/10 order-3 md:order-3">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Wrench className="h-6 w-6 mr-2 text-orange-400" />
                  Mainnet Configuration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <span className="text-gray-400 text-sm">Mainnet API:</span>
                    <code className="block text-blue-400 font-mono text-sm bg-black/20 p-2 rounded mt-1">
                      https://api.rgbpp.io
                    </code>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Access:</span>
                    <div className="mt-1">
                      <span className="block text-white text-sm mb-2">Restricted to whitelisted users.
                        Please contact us at{' '}
                        <a href="mailto:buidl@rgbpp.com" className="text-blue-400 hover:text-blue-300 underline transition-colors text-sm">
                          buidl@rgbpp.com
                        </a>.
                      </span>
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

          <div className="space-y-4 text-gray-300 text-lg leading-relaxed mb-8">
            <p>
              In CKB, custom tokens are implemented as User-Defined Tokens (UDTs). The CKB core team has established a minimal standard for UDTs called xUDT (extensible UDT). In this section, we demonstrate the RGB++ protocol by issuing a RGB++ token using the pre-deployed xUDT Script.
            </p>

            <p>
              For a comprehensive guide on issuing fungible tokens on CKB, please refer to the tutorial: <a href="https://docs.nervos.org/docs/dapp/create-token" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Create a Fungible Token</a>. The following discussion will focus on the RGB++-specific aspects of the token issuance process.
            </p>

            <p>
              The complete implementation is available in the <a href="https://github.com/ckb-devrel/ccc/tree/rgbpp-sdk/packages/rgbpp/src/examples/udt" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">RGB++ SDK repository</a>.
            </p>
          </div>

          {/* Token Issuance */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-white mb-6">1. Issuance</h3>

            <div className="space-y-6">
              <div className="space-y-4 text-gray-300 text-base leading-relaxed">
                <p>
                  The process begins by selecting a UTXO (or automatically creating one with the dust limit value of 546 satoshis if not provided) to serve as the initial single-use seal.
                </p>

                <p>
                  Subsequently, we create a CKB cell with its lock script set to the RGB++ lock script, using the UTXO as its argument. This configuration represents the user's intent to issue a RGB++ xUDT token, which will only be fulfilled after the initial UTXO is spent.
                </p>

                <p>
                  Next, a partial CKB transaction is constructed using the CKB cell and xUDT script information. Based on this, the commitment is calculated and the BTC transaction is assembled, which is then submitted to the network.
                </p>

                <p>
                  The BTC transaction's confirmation status is periodically checked through the SPV service. Upon confirmation, we acquire the new single-use seal - a UTXO also with the dust limit value of 546 satoshis - which represents ownership of the issued RGB++ xUDT token. The transaction ID of this UTXO is used to replace the placeholder value in the RGB++ lock script, enabling the assembly of the final CKB transaction.
                </p>

                <p>
                  The final CKB transaction is then submitted to the network, completing the token issuance process.
                </p>

                <p className="font-medium text-white mt-6">
                  The following is the code for the issuance process.
                </p>
              </div>

              <div className="bg-black/20 p-6 rounded-xl border border-white/10">
                <h4 className="font-semibold text-white mb-4 flex items-center">
                  <Code className="h-5 w-5 mr-2 text-green-400" />
                  Code Example: Token Issuance
                </h4>
                <CodeBlock language="typescript">{`async function issueUdt({
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

  // Build and submit the BTC transaction
  const { psbt, indexedCkbPartialTx } = await rgbppBtcWallet.buildPsbt({
    ckbPartialTx,
    ckbClient,
    rgbppUdtClient,
    btcChangeAddress: utxoBasedAccountAddress,
    receiverBtcAddresses: [utxoBasedAccountAddress],
  });
  const btcTxId = await rgbppBtcWallet.signAndSendTx(psbt);
  
  const ckbPartialTxInjected = await rgbppUdtClient.injectTxIdToRgbppCkbTx(
    indexedCkbPartialTx,
    btcTxId,
  );
  // Polling the SPV service to wait for the BTC transaction to be confirmed to construct the witness
  const rgbppSignedCkbTx = await ckbRgbppUnlockSinger.signTransaction(ckbPartialTxInjected);
  
  // Build and submit the final CKB transaction
  await rgbppSignedCkbTx.completeFeeBy(ckbSigner);
  const ckbFinalTx = await ckbSigner.signTransaction(rgbppSignedCkbTx);
  const txHash = await ckbSigner.client.sendTransaction(ckbFinalTx);
  await ckbRgbppUnlockSinger.client.waitTransaction(txHash);  
}

issueUdt({
  udtScriptInfo: {
    name: ccc.KnownScript.XUdt,
    script: await ccc.Script.fromKnownScript(
      ckbClient,
      ccc.KnownScript.XUdt,
      "",
    ),
    cellDep: (await ckbClient.getKnownScript(ccc.KnownScript.XUdt)).cellDeps[0]
      .cellDep,
  },
});`}</CodeBlock>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-2 sm:w-fit">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-300 sm:min-w-[180px]"
                  onClick={() => window.open('https://mempool.space/tx/4cc01a7f14b1196b5be149f3c7a1d3742e6c5c60f1097641ad9eeb64ff83d44d', '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-1 " />
                  View BTC Transaction
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-300 sm:min-w-[180px]"
                  onClick={() => window.open('https://explorer.nervos.org/transaction/0x2d1426fcd4bff7cc7d19ea674dee1ec2e855db0c1648db0b3a222d641055f104', '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-1 " />
                  View CKB Transaction
                </Button>
              </div>
            </div>
          </div>

          {/* Token Transfer */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-white mb-6">2. Transfer on BTC</h3>

            <div className="space-y-6">
              <div className="space-y-4 text-gray-300 text-base leading-relaxed">
                <p>
                  The process of transferring RGB++ xUDT tokens on BTC follows a similar pattern to the issuance process. Key points to note:
                </p>

                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>The unique ID of issued xUDT token, obtained during issuance, is used to construct the xUDT script that identifies the token.</li>
                  <li>The partial CKB transaction assembly is simplified through ccc: by providing the xUDT script, ccc automatically handles the input construction.</li>
                </ul>

                <p className="font-medium text-white mt-6">
                  The following is the code for the transfer process.
                </p>
              </div>

              <div className="bg-black/20 p-6 rounded-xl border border-white/10">
                <h4 className="font-semibold text-white mb-4 flex items-center">
                  <Code className="h-5 w-5 mr-2 text-blue-400" />
                  Code Example: Token Transfer on BTC
                </h4>
                <CodeBlock language="typescript">{`async function transferUdt({
  udtScriptInfo,
  receivers,
}: {
  udtScriptInfo: ScriptInfo;
  receivers: RgbppBtcReceiver[];
}) {
  // ...
                
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

  // the rest is the same as the issuance process...
}

transferUdt({
  udtScriptInfo: {
    name: ccc.KnownScript.XUdt,
    script: await ccc.Script.fromKnownScript(
      ckbClient,
      ccc.KnownScript.XUdt,
      "<unique id of issued xUDT token>",
    ),
    cellDep: (await ckbClient.getKnownScript(ccc.KnownScript.XUdt)).cellDeps[0]
      .cellDep,
  },
  receivers: [
    {
      amount: "<amount of xUDT token to transfer>",
      to: "<receiver's BTC address>",
    },
  ],
});`}</CodeBlock>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-2 sm:w-fit">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-300 sm:min-w-[180px]"
                  onClick={() => window.open('https://mempool.space/tx/4cc01a7f14b1196b5be149f3c7a1d3742e6c5c60f1097641ad9eeb64ff83d44d', '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-1 " />
                  View BTC Transaction
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-300 sm:min-w-[180px]"
                  onClick={() => window.open('https://explorer.nervos.org/transaction/0x2d1426fcd4bff7cc7d19ea674dee1ec2e855db0c1648db0b3a222d641055f104', '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-1 " />
                  View CKB Transaction
                </Button>
              </div>
            </div>
          </div>

          {/* Leap to CKB */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-white mb-6">3. Leap to CKB</h3>

            <div className="space-y-6">
              <p className="text-gray-300">
                The process of leaping xUDT from BTC to CKB follows the same pattern as regular transfer,
                with one key distinction: after the leap, the lock script changes from <code className="text-orange-400">RGBPP_Lock</code> to <code className="text-blue-400">BTC_TIME_lock</code>.
              </p>
              <p className="text-gray-300">
                The following is the code for the leap process.
              </p>

              <div className="bg-black/20 p-6 rounded-xl border border-white/10">
                <h4 className="font-semibold text-white mb-4 flex items-center">
                  <Code className="h-5 w-5 mr-2 text-purple-400" />
                  Code Example: Leap to CKB
                </h4>
                <CodeBlock language="typescript">{`async function btcUdtToCkb({
  udtScriptInfo,
  receivers,
}: {
  udtScriptInfo: ScriptInfo;
  receivers: { address: string; amount: bigint }[];
}) {
  // ...

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

  // the rest is the same as the transfer process...
}

btcUdtToCkb({
    udtScriptInfo: {
        name: ccc.KnownScript.XUdt,
        script: await ccc.Script.fromKnownScript(
        ckbClient,
        ccc.KnownScript.XUdt,
        "<unique id of issued xUDT token>",
        ),
        cellDep: (await ckbClient.getKnownScript(ccc.KnownScript.XUdt)).cellDeps[0]
        .cellDep,
    },
    receivers: [
    {
      address: "<receiver's CKB address>",
      amount: "<amount of xUDT token to leap>",
    },
  ],
});`}</CodeBlock>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-2 sm:w-fit">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-300 sm:min-w-[180px]"
                  onClick={() => window.open('https://mempool.space/tx/76e0495834225675038fe4d90c826e3ab33058c9d921b1615eca234eff7eb125', '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-1 " />
                  View BTC Transaction
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-300 sm:min-w-[180px]"
                  onClick={() => window.open('https://explorer.nervos.org/transaction/0xbf357ba27be87b368ba27e83a60bc4f0e32810634100dc5b2da3e93a4b9ca7fa', '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-1 " />
                  View CKB Transaction
                </Button>
              </div>
            </div>
          </div>

          {/* Unlock Time Lock */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">4. Unlocking BTC_TIME_lock</h3>

            <div className="space-y-6">
              <div className="space-y-4 text-gray-300 text-base leading-relaxed">
                <p>
                  This process is relatively straightforward. We wait for the required number of confirmations (default is 6) before unlocking the <code className="text-blue-400">BTC_TIME_lock</code>. After unlocking, the xUDT becomes a standard CKB asset, with its ownership logic governed by the lock script specified in the <code className="text-blue-400">BTC_TIME_lock</code> arguments. Notably, this process does not require any Bitcoin transaction.
                </p>

                <p className="font-medium text-white mt-6">
                  The following is the code for the unlock process.
                </p>
              </div>

              <div className="bg-black/20 p-6 rounded-xl border border-white/10">
                <h4 className="font-semibold text-white mb-4 flex items-center">
                  <Code className="h-5 w-5 mr-2 text-purple-400" />
                  Code Example: Unlock BTC_TIME_lock
                </h4>
                <CodeBlock language="typescript">{`async function unlockBtcTimeLock(btcTimeLockArgs: string) {
  // ...

  const tx = ccc.Transaction.default();
  const btcTimeLockCells = await collectBtcTimeLockCells(
    btcTimeLockArgs,
    rgbppUdtClient,
  );
  // Complete the inputs and outputs
  btcTimeLockCells.forEach((cell) => {
    const cellInput = ccc.CellInput.from({
      previousOutput: cell.outPoint,
    });
    cellInput.completeExtraInfos(ckbClient);
    tx.inputs.push(cellInput);
    tx.addOutput(
      {
        lock: parseBtcTimeLockArgs(cell.cellOutput.lock.args).lock,
        type: cell.cellOutput.type,
        capacity: cell.cellOutput.capacity,
      },
      cell.outputData,
    );
  });

  // Monitor the SPV service until the Bitcoin transaction achieves the required confirmation threshold for witness construction
  for await (const btcTimeLockCell of btcTimeLockCells) {
    const { btcTxId, confirmations } = parseBtcTimeLockArgs(
      btcTimeLockCell.cellOutput.lock.args,
    );
    const spvProof = await pollForSpvProof(
      rgbppBtcWallet,
      btcTxId,
      confirmations,
    );
    tx.cellDeps.push(
      ccc.CellDep.from({
        outPoint: spvProof.spvClientOutpoint,
        depType: "code",
      }),
    );
    tx.witnesses.push(buildBtcTimeUnlockWitness(spvProof.proof));
  }

  // Build and submit the final CKB transaction
  await tx.completeFeeBy(ckbSigner);
  const signedTx = await ckbSigner.signTransaction(tx);
  const txHash = await ckbSigner.client.sendTransaction(signedTx);
  await ckbSigner.client.waitTransaction(txHash);
}

unlockBtcTimeLock(
  "<btc time lock args>",
)`}</CodeBlock>
              </div>

              <div className="mt-6">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-300 sm:min-w-[180px]"
                  onClick={() => window.open('https://explorer.nervos.org/transaction/0x8a6d5d952614c583722052ec5d58dc8a2acf3e96f8c11825385cf4317abdba9d', '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-1 " />
                  View CKB Transaction
                </Button>
              </div>
            </div>
          </div>
        </section>


      </div>
    </DocLayout>
  )
} 