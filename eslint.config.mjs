import prettier from 'eslint-plugin-prettier';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import globals from 'globals';

const GLOBALS_BROWSER_FIX = {
  ...globals.browser,
  AudioWorkletGlobalScope: globals.browser['AudioWorkletGlobalScope']
};
delete GLOBALS_BROWSER_FIX['AudioWorkletGlobalScope '];

export default [
  {
    ignores: ['dist/**/*', 'build/**/*', 'node_modules/**/*']
  },
  {
    files: ['eslint.config.mjs'],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest'
    }
  },
  {
    files: ['*.js', '*.cjs', 'vite.config.ts', 'vite.*.config.ts', 'vitest.config.ts'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.node.json'
      },
      globals: {
        ...globals.node
      }
    },
    plugins: {
      prettier,
      '@typescript-eslint': typescriptPlugin
    },
    rules: {
      'prettier/prettier': 2,
      'no-console': 'off',
      'no-unused-vars': 'warn'
    }
  },
  {
    files: ['src/**/*.{jsx,ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
          experimentalObjectRestSpread: true
        },
        project: './tsconfig.json'
      },
      globals: {
        ...GLOBALS_BROWSER_FIX,
        ...globals.node,
        ...globals.jest
      }
    },
    plugins: {
      prettier,
      '@typescript-eslint': typescriptPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin
    },
    rules: {
      'prettier/prettier': 2,
      'no-console': 'off',
      'no-param-reassign': 'error',
      'no-unused-vars': [
        'warn',
        {
          vars: 'all',
          args: 'none'
        }
      ],
      'no-plusplus': [
        'error',
        {
          allowForLoopAfterthoughts: true
        }
      ],
      'react/jsx-key': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-boolean-value': 'off',
      'react/prop-types': 'off',
      'react/no-unescaped-entities': 'off',
      'react/jsx-one-expression-per-line': 'off',
      'react/jsx-wrap-multilines': 'off',
      'react/destructuring-assignment': 'off',
      'react-hooks/exhaustive-deps': 'warn',
      eqeqeq: 'warn',
      'jsx-a11y/anchor-is-valid': 'off',
      'array-callback-return': 'off',
      'no-unused-expressions': 'off',
      'import/prefer-default-export': 'off',
      'no-restricted-syntax': [
        'error',
        {
          selector: "JSXAttribute[name.name='style']",
          message: 'Avoid using inline styles in JSX.'
        }
      ]
    }
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js'],
    rules: {
      'id-match': 'off'
    }
  }
];
