/*
 * @FilePath: /Web_Tutorials/docs/env.d.ts
 * @author: Wibus
 * @Date: 2022-06-06 16:17:25
 * @LastEditors: Wibus
 * @LastEditTime: 2022-06-06 16:17:26
 * Coding With IU
 */
/// <reference types="vitepress/client" />
/// <reference types="vue/macros-global" />

declare module "@vue/theme/config" {
  import { UserConfig } from "vitepress";
  const config: () => Promise<UserConfig>;
  export default config;
}

declare module "@vue/theme/highlight" {
  const createHighlighter: () => Promise<(input: string) => string>;
  export default createHighlighter;
}
