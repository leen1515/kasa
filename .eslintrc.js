module.exports = {
  extends: [
    'semistandard',
    'plugin:react/recommended'
  ],
  rules: {
    // ...
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'react/prop-types': 0
  }
};
