const path = require('path');
const withSass = require('@zeit/next-sass');
const nextTranslate = require('next-translate');
module.exports = withSass({
  /* bydefault config  option Read For More Optios
here https://github.com/vercel/next-plugins/tree/master/packages/next-sass*/
  cssModules: true
});

module.exports = {
  server: true,
  compress: true,
  ...nextTranslate(),
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  experimental: {
    scrollRestoration: true
  }
};
