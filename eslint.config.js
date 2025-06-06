import globals from "globals";
import pluginJs from "@eslint/js";// 检验js规范的（推荐）
import tseslint from "typescript-eslint"; // 推荐的ts规范
import pluginVue from "eslint-plugin-vue"; // 推荐的vue规范
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import autoImport from './.eslintrc-auto-import.json'

// esModule commonjs
// 1.
// import autoImport from './.eslintrc-auto-import.json' with { type: 'json' }

// 2.
import { createRequire } from "module";
const require = createRequire(import.meta.url)
const autoImport = require('./.eslintrc-auto-import.json')

// 3.  fs.readFile 

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,vue}"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node, ...autoImport.globals } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  { files: ["**/*.vue"], // 校验vue中ts代码
    languageOptions: { parserOptions: { parser: tseslint.parser } } },
  {
    // 哪些文件不通过 eslint校验
    ignores: ['.css','*.d.ts']
  },
  {
    //自定义规则
    rules: {
      'no-console': 'warn',
      'semi': ['error']
    }
  },
  prettierRecommended //prettier 覆盖 eslint规则
];