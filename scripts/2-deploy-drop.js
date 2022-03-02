import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0xbb7101Ab886B295fBea7FBfC504c2B637d5B1214");

(async () => {
  try {
    const bundleDropModule = await app.deployBundleDropModule({
      // The collection's name, ex. CryptoPunks
      name: "RealtyDAO Membership",
      // A description for the collection.
      description: "The DAO for Realtors",
      // The image for the collection that will show up on OpenSea.
      image: readFileSync("scripts/assets/realty-trust-isotipo-original.png"),
      // We need to pass in the address of the person who will be receiving the proceeds from sales of nfts in the module.
      // We're planning on not charging people for the drop, so we'll pass in the 0x0 address
      // you can set this to your own wallet address if you want to charge for the drop.
      primarySaleRecipientAddress: ethers.constants.AddressZero,
    });
    
    console.log(
      "✅ Successfully deployed bundleDrop module, address:",
      bundleDropModule.address,
    );
    console.log(
      "✅ bundleDrop metadata:",
      await bundleDropModule.getMetadata(),
    );
  } catch (error) {
    console.log("failed to deploy bundleDrop module", error);
  }
})()
// 0x4Ae448B7Af3F9BD5d8E2b84f3fA4F6cd40A2a590
// https://cloudflare-ipfs.com/ipfs/bafkreifv2acgor4i6oovxi3p2xcnksx5ac2xhmgq4crdkie3kwltcivufq