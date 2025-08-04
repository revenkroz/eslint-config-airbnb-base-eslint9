import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { writeFileSync } from 'node:fs'

import { FlatCompat } from '@eslint/eslintrc'
import importPlugin from 'eslint-plugin-import'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname
})

const rules = compat.extends('airbnb-base')
rules.forEach((rule) => {
  if (rule.plugins) {
    delete rule.plugins
  }
})

writeFileSync('index.js', `export default ${JSON.stringify(rules)}`);

export default [
  {
    plugins: {
      'import': importPlugin
    },
  },
  ...rules,
]
