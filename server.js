const express = require('express')
require('dotenv').config()
const Web3 = require('web3')
const ethers = require('ethers')
const NftContract = require('./abis/NFT.json')
const CollectionsContract = require('./abis/Collections.json')
const BusinessesContract = require('./abis/Businesses.json')
const MarketplaceContract = require('./abis/Marketplace.json')

const NftContractAbi = NftContract.abi
const CollectionsContractAbi = CollectionsContract.abi
const BusinessesContractAbi = BusinessesContract.abi
const MarketplaceContractAbi = MarketplaceContract.abi

const nftRopstenAddress = NftContract.networks['3'].address
const collectionsRopstenAddress = CollectionsContract.networks['3'].address
const businessesRopstenAddress = BusinessesContract.networks['3'].address  
const marketplaceRopstenAddress = MarketplaceContract.networks['3'].address

const nftMaticAddress = NftContract.networks['80001'].address
const collectionsMaticAddress = CollectionsContract.networks['80001'].address
const businessesMaticAddress = BusinessesContract.networks['80001'].address  
const marketplaceMaticAddress = MarketplaceContract.networks['80001'].address

// const ropstenNetwork = new Web3(new Web3.providers.WebsocketProvider())
console.log(process.env.NAME)

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World !')
})

app.listen(8080,  () => {
    console.log('Running on port 8080')
} );