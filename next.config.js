module.exports = {
  webpack(config) {
    config.resolve.extensions = ['.ts', '.tsx', '.js', '.json'];
    return config;
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
};
