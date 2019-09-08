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
  ]
};
