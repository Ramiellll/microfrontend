const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");
const tailwindConfig = require('./tailwind.config')

module.exports = {
  plugins: [tailwindcss, autoprefixer, tailwindConfig],
  'postcss-prefixer': {
    prefix: 'cr-'
  }
};
