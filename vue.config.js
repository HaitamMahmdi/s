// vue.config.js
const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/scss/main.scss";`, // تعديل المسار حسب مكان تواجد الملف
      },
    },
  },
});
