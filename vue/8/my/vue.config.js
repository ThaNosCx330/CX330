const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    devServer:{
      host:'localhost',
      port:8002,
      open:true
    },

  transpileDependencies: true
})
