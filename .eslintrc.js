module.exports = {
    env: {
        node: true,
        jest: true
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        sourceType: module
    },
    extends: ["plugins:@typescript-eslint/recommended", "prettier/@typescript-eslint", "plugin:prettier/recommended"]
}
