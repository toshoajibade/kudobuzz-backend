module.exports = {
  extends: ["airbnb-base", "prettier"],
  plugins: ["prettier"],
  rules: {
    "linebreak-style": ["error", "windows"],
    "no-underscore-dangle": [0],
    "consistent-return": [0],
    "func-names": [0],
    "prefer-arrow-callback": [0],
    "import/prefer-default-export": [0],
    "prettier/prettier": "error"
  }
};
