import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'

export default defineConfig([
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },

  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    rules: {
      'no-unused-vars': 'warn',
      'vue/html-self-closing': 'off',
      'vue/html-indent': ["warn", "tab"],
      'vue/attribute-hyphenation': 'off',
      'vue/require-prop-types': 'off', 
    },
  },
])
