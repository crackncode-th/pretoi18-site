// @ts-check
/* eslint-disable no-console */

import fs from "node:fs/promises";
import csvtojson from "csvtojson";

const day1 = await csvtojson().fromFile("./src/data/day1.csv");
const day2 = await csvtojson().fromFile("./src/data/day2.csv");

/** @type {{[user: string]: Object}}} */
const users = {};

for (const user of day1) {
  users[user.Username] = { ...users[user.Username], ...user };
}

for (const user of day2) {
  users[user.Username] = { ...users[user.Username], ...user };
}

const allTasks = [
  "multiverse",
  "isekai",
  "boringpath",
  "cover",
  "explosion",
  "carnival",
];

const zeroButSubmitted = [
  "user140",
  "user75",
  "user95",
  "user120",
  "user45",
  "user92",
];

const sortedUser = [];

for (const [_, user] of Object.entries(users)) {
  user.Name = user.User;
  delete user.User;

  for (const task of allTasks) {
    user[task] = +user[task];
  }

  user["Day 1"] = user.multiverse + user.isekai + user.boringpath;
  user["Day 2"] = user.cover + user.explosion + user.carnival;
  user.Global = user["Day 1"] + user["Day 2"];
  delete user.P;

  if (user.Global > 0 || zeroButSubmitted.includes(_)) {
    sortedUser.push(user);
  }
}

sortedUser.sort((a, b) => {
  if (a.Global < b.Global) return 1;
  else if (a.Global > b.Global) return -1;
  else {
    if (a.Name < b.Name) return -1;
    else if (a.Name > b.Name) return 1;
    return 0;
  }
});

let lastIndex = 0;
let lastScore = 999;
for (let index = 0; index < sortedUser.length; index++) {
  if (sortedUser[index].Global < lastScore) {
    lastIndex = index;
    lastScore = sortedUser[index].Global;
  }

  sortedUser[index].Rank = lastIndex + 1;
}

await fs.writeFile("./src/data/data.json", JSON.stringify(sortedUser, null, 4));
