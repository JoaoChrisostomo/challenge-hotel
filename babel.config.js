{import('@jest/types').Config.InitialOptions}
const config = {
  verbose: true,
};

module.exports = config;

module.exports = async () => {
  return {
    verbose: true,
  };
};

const {defaults} = require('jest-config');
module.exports = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx', 'js', 'jsx'],
};

module.exports = {
    presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
  };
  module.exports = api => {
  const isTest = api.env('test');
  // You can use isTest to determine what presets and plugins to use.

  return {
    // ...
  };
};