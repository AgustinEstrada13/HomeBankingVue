module.exports = {
    // proxy all webpack dev-server requests starting with /api
    // to our Spring Boot backend (localhost:8098) using http-proxy-middleware
    // see https://cli.vuejs.org/config/#devserver-proxy
    publicPath: process.env.NODE_ENV === "production" ? "/vue-gh-pages/" : "/",
    devServer: {
      port: 8082,
      proxy: {
        '/api': {
          target: 'http://localhost:8080/',
          ws: true,
          changeOrigin: true
        }
      }
    },
    // Change build paths to make them Maven compatible
    // see https://cli.vuejs.org/config/
    outputDir: 'target/dist',
    assetsDir: 'static'
   }