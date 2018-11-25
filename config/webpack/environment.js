const {environment} = require('@rails/webpacker');

environment.config.resolve.symlinks = false;

const sassLoader = environment.loaders.get('sass').use.find(el => el.loader === 'sass-loader');
sassLoader.options.includePaths = environment.toWebpackConfig().resolveLoader.modules;

module.exports = environment;
