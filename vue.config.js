const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});

module.exports = {
  configureWebpack: {
    plugins: [
      require("unplugin-element-plus/webpack")({
        // options
      }),
    ],
  },
};
