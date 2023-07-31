module.exports = {
  extends: [
    'semistandard',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime'
  ],
  rules: {
    // ...
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off'
  }
};
