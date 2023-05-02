module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended", "prettier"],
  plugins: ["eslint-plugin-import", "eslint-plugin-jsdoc"],
  rules: {
    // ESLint Recommended Overrides
    "valid-typeof": "off",

    // EsLint Customizations
    "arrow-body-style": "error",
    "prefer-arrow-callback": "error",
    "brace-style": ["error", "1tbs"],
    camelcase: "error",
    complexity: "error",
    curly: ["error", "multi-line"],
    "class-methods-use-this": "error",
    "eol-last": "error",
    eqeqeq: ["error", "smart"],
    "guard-for-in": "error",
    "id-blacklist": "error",
    "id-match": "error",
    "max-len": ["error", { code: 120 }],
    "new-parens": "error",
    "no-await-in-loop": "error",
    "no-caller": "error",
    "no-console": "error",
    "no-eval": "error",
    "no-lonely-if": "error",
    "no-multiple-empty-lines": "error",
    "no-new-wrappers": "error",
    "no-octal-escape": "error",
    "no-restricted-imports": [
      "error",
      {
        patterns: [
          {
            group: ["src/**"],
            message:
              "imports from this repo's src folder should be a relative path",
          },
          {
            group: ["**/../lib/**", "lib/**"],
            message: "import from /src not from /lib. /lib is a build artifact",
          },
        ],
      },
    ],
    "no-shadow": [
      "error",
      {
        hoist: "all",
      },
    ],
    "no-throw-literal": "error",
    "no-trailing-spaces": "error",
    "no-undef-init": "error",
    "no-underscore-dangle": "error",
    "no-unsafe-finally": "error",
    "no-unused-expressions": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "one-var": ["error", "never"],
    "prefer-const": "error",
    "prefer-spread": "error",
    "quote-props": ["error", "as-needed"],
    radix: "error",
    "spaced-comment": [
      "error",
      "always",
      {
        markers: ["/"],
      },
    ],
    "use-isnan": "error",

    // Special Plugin Rules
    "import/order": "error",
    "jsdoc/check-alignment": "error",
    "jsdoc/check-indentation": "error",
    "jsdoc/tag-lines": [2, "any", { "startLines": 1,"endLines": 1 }]
  },
};
