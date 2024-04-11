/** @type {import("next").NextConfig} */
module.exports = {
  output: "standalone",
  // output: "node .next/standalone/server.js",
}

const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        "website.com", 
        "localhost:3000",
        "http://15.229.77.132/next",
        "http://15.229.77.132",
        "*",
      ]
    }
  }
}

module.exports = nextConfig
