import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = await sdk.getEditionDrop("0x8D716cE384BBB3418FB3b8E77288E1c946DB8f96");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "ARTEDYX GREEN BLOCKCHAIN CLIMATE MARKETPLACE DAO Membership Headband",
        description: "This NFT will give you access to ARTEDYX GREEN BLOCKCHAIN CLIMATE MARKETPLACE DAO Membership !",
        image: readFileSync("scripts/assets/ARTEDYS.png"),
      },
    ]);
    console.log("✅ Successfully created a new eSpatiale NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();