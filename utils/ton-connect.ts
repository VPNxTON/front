import TonConnect from '@tonconnect/sdk';

const manifestTonConnectWallet = 'https://vpnxton.def.team/tonconnect-manifest.json'
export const connector = new TonConnect({
    manifestUrl: manifestTonConnectWallet,
});

export function exitFromWallet(){
    connector.disconnect();
}


connector.restoreConnection();

export async function getWalletsList(){
   return await connector.getWallets()
}

export function connectTonWallet(wallet){

    if(wallet.embedded || wallet.injected){

        connector.connect({jsBridgeKey: wallet.jsBridgeKey});
    }else if(wallet.bridgeUrl){
        return connector.connect({
            universalLink: wallet.universalLink,
            bridgeUrl: wallet.bridgeUrl
        });
    }
}
