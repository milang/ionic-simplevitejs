// Babel configuration must stay in a separate file, because we are
// specifying project-wide configuration here; if we kept it in "package.json",
// it would be considered to be file-relative configuration; for more info see
// https://babeljs.io/docs/en/config-files#project-wide-configuration

module.exports = {
  presets: [
    ["@babel/preset-env", { useBuiltIns: "usage", corejs: 3 }],
    ["@babel/preset-react", { runtime: "automatic" }],
    "@babel/preset-typescript",
  ],
};
