// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://ideal-happiness151418.github.io",
  base: "/alumtu-web-landing/",
  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
      },
      {
        protocol: "https",
        hostname: "sitios.udla.edu.ec",
      },
      {
        protocol: "https",
        hostname: "www.ecuavisa.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
});
