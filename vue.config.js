const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    workboxOptions: {
      runtimeCaching : [
        {
          urlPattern: new RegExp('https://api.spoonacular.com/.*&sort=popularity'), //Matches routes to the urlPattern
          handler: 'cacheFirst', //specifies the catching strategy to be used
          options: {
            cacheName: 'popular-recipes',
            expiration:{   //specify the options that will be used to configure the cache in the options property
              maxAgeSeconds: 7 * 24 * 60 * 60,
            }
          }

        },
        {
          urlPattern: new RegExp('https://api\\.spoonacular\\.com/recipes/\\d+/information.*'),
          handler: 'cacheFirst',
          options: {
            cacheName: 'recently-viewed',
            expiration:{
              maxEntries: 8
            }
          }
        }
      ]
    }
  }
})
