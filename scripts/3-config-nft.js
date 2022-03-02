import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x4Ae448B7Af3F9BD5d8E2b84f3fA4F6cd40A2a590",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "The Realty Golden Key",
        description: "This NFT will give you access to RealtyDAO!",
        image: readFileSync("scripts/assets/golden-key.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()