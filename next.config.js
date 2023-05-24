const path = require('path');

module.exports = {
  webpack(config) {
    config.resolve.extensions = ['.ts', '.tsx', '.js', '.json'];
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "scss")],
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
};
