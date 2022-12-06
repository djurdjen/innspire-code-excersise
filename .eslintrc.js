module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: false
    }
  },
  plugins: ["unused-imports"],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'comma-dangle': ['warn', 'never'],
    'eol-last': ['error', 'always'],
    'semi': ["warn", 'always'],
    'vue/no-unused-components': 0,
    "unused-imports/no-unused-imports": 1,
    "unused-imports/no-unused-vars": ["warn", {
      "vars": "all",
      "varsIgnorePattern": "^_",
      "args": "after-used",
      "argsIgnorePattern": "^_"
    }],
    "@intlify/vue-i18n/no-raw-text": 0,
    "vue/no-reserved-component-names": 0,
    "vue/multi-word-component-names": 0,
    "vue/no-v-html": 0
  }
};
