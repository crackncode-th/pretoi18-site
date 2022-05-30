// @ts-check

import fs from "node:fs/promises";
import csvtojson from "csvtojson";

const jsonArr = await csvtojson().fromFile("./src/data/test_data.csv");

const tasks = Object.keys(jsonArr[0]).filter(
  (k) => k != "P" && k != "Global" && !k.startsWith("User")
);

await fs.writeFile(
  "./src/data/test_data.g.json",
  JSON.stringify(
    {
      users: jsonArr,
      tasks,
    },
    null,
    4
  )
);
