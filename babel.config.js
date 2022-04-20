// Babel configuration must stay in a separate file. We are defining
// a project-wide configuration here. If we kept it in "package.json",
// it would be considered a file-relative configuration. For more info see
// https://babeljs.io/docs/en/config-files#project-wide-configuration

module.exports = {
  presets: [
    "@babel/preset-env",
    ["@babel/preset-react", { runtime: "automatic" }],
    "@babel/preset-typescript"
  ]
};
