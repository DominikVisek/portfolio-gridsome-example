const tailwindcss = require('tailwindcss');

module.exports = {
  siteName: 'Porfolio',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          tailwindcss,
          require('postcss-nesting')(),
          require('autoprefixer')()
        ]
      }
    }
  },
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        config: './tailwind.config.js',
      }
    },
    {
      use: 'gridsome-source-graphql',
      options: {
        url: process.env.CRAFT_API_URL,
        fieldName: 'unite',
        typeName: 'unite',
        headers: {
          Authorization: process.env.CRAFT_API_TOKEN,
        }
      }
    }
  ]
};
