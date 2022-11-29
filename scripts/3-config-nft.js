import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0xeCF9a987680ee41135FfA4C05AAb4A7C1703f188", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "INSPIRE-SAT Project Manager NFT access",
        description: "This NFT will give you access to ARTEDYX DAO CLIMATE Marketplace New Stock Exchange!",
        // image: readFileSync("scripts/assets/ARTEDYS.png"),
        image: readFileSync("scripts/assets/Mustapha.png"),
      },
    ]);
    console.log("✅ Successfully created a new eSpatiale NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
