module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@next/next/recommended" // add line and install --save-dev
  ],
  "overrides": [
    {
      "env": {
        "node": true,
        "jest": true
      },
      "files": [
        ".eslintrc.{js,cjs}",
        "**/*.test.js",
        "**/*.test.jsx"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parser": "@babel/eslint-parser",
  "parserOptions": {
    "requireConfigFile": false,
    "ecmaVersion": 13,
    "sourceType": "module",
    "allowImportExportEverywhere": true,
    "babelOptions": {
      "presets": ["@babel/preset-react"]
    }
  },
  "plugins": [
    "react",
    "testing-library"
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "rules": {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off"
  }
}
