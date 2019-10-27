module.exports = {
  'extends': 'airbnb',
  'parser': 'babel-eslint',
  'env': {
    'jest': true,
  },
  'rules': {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    "max-len": [2, 120, 2, {"ignoreUrls": true}],
    'react/no-array-index-key': 'off',
    'no-underscore-dangle': 'off',
    'react/state-in-constructor': 'off',
    'import/prefer-default-export': 'off',
    'semi': 'off',
    'no-unused-expressions': 'off',
    'import/no-unresolved': 'off'
  },
  'globals': {
    "fetch": false
  }
}