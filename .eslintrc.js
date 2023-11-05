module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    },
    {
      files: [
        'src/base-components/*/*/*.vue',
        'src/base-components/*/*/*/*.vue'
      ],
      rules: {
        'no-undef': 'off',
        '@typescript-eslint/ban-types': 'off'
      }
    }
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: false,
      jsx: false
    },
    parser: {
      js: 'espree',
      ts: '@typescript-eslint/parser',
      '<template>': 'espree'
    }
  },
  plugins: ['vue'],
  rules: {
    'vue/no-multiple-template-root': 0,
    'prettier/prettier': 'error',
    'vue/multi-word-component-names': 'off'
  }
}
