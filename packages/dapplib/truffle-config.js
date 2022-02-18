require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give nation flush special drift release pizza artwork hidden praise army genre'; 
let testAccounts = [
"0x8e82ea08ac7ccd006124abbede0041d46b292334ae40689bd290577c2ee26dc2",
"0x1c258a0dc5adbd23424ac0635284b7dea0080f7c49df7be98048db8db0da880f",
"0x7fa610ef289149e44aae82b1ec7bca56a4deff118ee6897f7ee2d48e27035e14",
"0x0b98942a4bf2d499a7ee8486d9839c86fb8ecd83aad4abda9a0cca52523cd686",
"0x7a0acfe8c2f1a1988c86f101c65685169abe6668830977d082a3c1bdd6dfe1a1",
"0xf3d55b713b35e144db96f18271194bf36886e2f2ec93e7bc978763bd957a0961",
"0xf806cc42e281812e12ac36f751c70abdffda1cee3f04a25131e885b69734ea00",
"0x69e6e90563791a95e80d82126d4a8d97c37ca92d0605330f5dc50d72c612712d",
"0xd3108ac4a96e6e5d9ab46b202646a38cca597fc8f805075bb978b4e47287dd6e",
"0xbf153abb3e6ab7020ac1dc7a7782139e9a81e05aa99a6b59da1883de82474f27"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


