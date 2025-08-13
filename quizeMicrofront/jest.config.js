module.exports = {
  transform: {
    "\\.(js|jsx|ts|tsx)$": "babel-jest",
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "jest-transform-stub",
  },
  transformIgnorePatterns: ["/node_modules/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
};
