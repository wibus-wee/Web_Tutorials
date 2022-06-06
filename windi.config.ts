/*
 * @FilePath: /Web_Tutorials/windi.config.ts
 * @author: Wibus
 * @Date: 2022-06-06 16:12:38
 * @LastEditors: Wibus
 * @LastEditTime: 2022-06-06 16:12:38
 * Coding With IU
 */
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['src/**/*.{jsx,tsx,css,vue,md}'],
    exclude: ['node_modules', '.git', '.next'],
  },
  darkMode: 'class',
  plugins: [require('windicss/plugin/line-clamp')],
  theme: {},
})
