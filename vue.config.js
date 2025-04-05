const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.module
      .rule("svg")
      .oneOf("raw")
      .resourceQuery(/raw/)
      .type("asset/source")
      .end();
  },
});
