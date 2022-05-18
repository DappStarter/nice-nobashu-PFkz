require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enrich sun food tragic raise magic home inside light army genuine'; 
let testAccounts = [
"0xf692a7c0b426afe53e0ff68a0ae55aa5d19c05cce2462b19935f4051d1dc107d",
"0x4cb2d136d8fcf546ae399f72129a84122ed5686f3448b077fc8a71c51a213d7f",
"0x20936a4bf6f742ffc6b811a283253ac9440ff30e761765c432fa2734439f79f3",
"0xd46eaacec0d349f8848d6b8bc9de84f9d6437f59a219e7c86e816f86a700e82d",
"0x28c422ff23499cc616e5a5d8ebf40e1cd97141cd3619d32a50e91483332d1cbc",
"0xb1f132ec96b38288d85f257d1b6e419167566479053e47842bd4854837411113",
"0xce9b7c025432a98b2fc3ed9ea5ade4c5b3c29a3b43e96bdafec1edbd4b18f9b9",
"0x481ca7a2a6799cee135e77a1f5ee0440f1a17444920aa2f555597e4fcdfe0305",
"0x3547b48ad3203eb911174a3392869dddf8648febaa0337cfb00df28eedc18b90",
"0x9cff1ef569053c8c66057dc5ac8620363da73c3407d3837a8a14374728f8e38d"
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


