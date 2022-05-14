// @ts-check

import adapter from "@sveltejs/adapter-netlify";
import preprocess from "svelte-preprocess";
import path from "node:path";

/** @type {import("@sveltejs/kit").Config} */
export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],

  kit: {
    adapter: adapter(),
    vite: {
      resolve: {
        alias: {
          $icons: path.resolve("src/icons"),
        },
      },
    },
  },
};
