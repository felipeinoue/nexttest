/** @type {import("next").NextConfig} */
module.exports = {
  output: "standalone",
  experimental: {
      serverActions: {
          allowedOrigins: [
            "192.168.20.1",
            "localhost",
            "15.228.160.85",
          ],
      },
  },
}
