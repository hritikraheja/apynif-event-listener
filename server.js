const express = require("express");
require("dotenv").config();
const Web3 = require("web3");
const ethers = require("ethers");
const NftContract = require("./abis/NFT.json");
const CollectionsContract = require("./abis/Collections.json");
const BusinessesContract = require("./abis/Businesses.json");
const MarketplaceContract = require("./abis/Marketplace.json");

const NftContractAbi = NftContract.abi;
const CollectionsContractAbi = CollectionsContract.abi;
const BusinessesContractAbi = BusinessesContract.abi;
const MarketplaceContractAbi = MarketplaceContract.abi;

const nftRopstenAddress = NftContract.networks["3"].address;
const collectionsRopstenAddress = CollectionsContract.networks["3"].address;
const businessesRopstenAddress = BusinessesContract.networks["3"].address;
const marketplaceRopstenAddress = MarketplaceContract.networks["3"].address;

const nftMaticAddress = NftContract.networks["80001"].address;
const collectionsMaticAddress = CollectionsContract.networks["80001"].address;
const businessesMaticAddress = BusinessesContract.networks["80001"].address;
const marketplaceMaticAddress = MarketplaceContract.networks["80001"].address;

const ropstenNetwork = new ethers.providers.WebSocketProvider(
  process.env.ROPSTEN_PROVIDER
);
const maticNetwork = new ethers.providers.WebSocketProvider(
  process.env.MATIC_PROVIDER
);

const nftContractInstanceRopsten = new ethers.Contract(
  nftRopstenAddress,
  NftContractAbi,
  ropstenNetwork
);
const collectionsContractInstanceRopsten = new ethers.Contract(
  collectionsRopstenAddress,
  CollectionsContractAbi,
  ropstenNetwork
);
const businessesContractInstanceRopsten = new ethers.Contract(
  businessesRopstenAddress,
  BusinessesContractAbi,
  ropstenNetwork
);
const marketplaceContractInstanceRopsten = new ethers.Contract(
  marketplaceRopstenAddress,
  MarketplaceContractAbi,
  ropstenNetwork
);

const nftContractInstanceMatic = new ethers.Contract(
  nftMaticAddress,
  NftContractAbi,
  maticNetwork
);

const collectionsContractInstanceMatic = new ethers.Contract(
  collectionsMaticAddress,
  CollectionsContractAbi,
  maticNetwork
);
const businessesContractInstanceMatic = new ethers.Contract(
  businessesMaticAddress,
  BusinessesContractAbi,
  maticNetwork
);
const marketplaceContractInstanceMatic = new ethers.Contract(
  marketplaceMaticAddress,
  MarketplaceContractAbi,
  maticNetwork
);

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World !");
});

app.listen(8080, () => {
  console.log("Running on port 8080");
});
