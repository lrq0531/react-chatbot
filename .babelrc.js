const config = {
  presets: [
    [
      '@babel/preset-env',
    ],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
  ],
};

if (process.env.NODE_ENV !== 'test') {
  // config.presets[0][1].modules = false;
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push('transform-react-remove-prop-types');
}

module.exports = config;
