const tailwindcss = require('tailwindcss');

module.exports = {
  siteName: 'Gridsome',
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
