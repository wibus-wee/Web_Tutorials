/*
 * @FilePath: /Web_Tutorials/docs/.vitepress/config.ts
 * @author: Wibus
 * @Date: 2022-05-28 19:58:17
 * @LastEditors: Wibus
 * @LastEditTime: 2022-06-06 16:34:39
 * Coding With IU
 */


import { join, resolve } from 'path'
import { defineConfig } from 'vitepress'
import Windicss from 'vite-plugin-windicss'
export default defineConfig({

  title: 'Web Tutorials',
  description: 'Evolutionary Web Tutorials',
  outDir: resolve(__dirname, '../../dist'),

  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],

  vue: {
    reactivityTransform: true
  },

  vite: {
    json: {
      stringify: true,
    },
    plugins: [
      Windicss({
        config: join(__dirname, '../../windi.config.ts'),
      }),
    ]
  },
  themeConfig: {

    nav: nav(),
    sidebar: {
      '/guide/': sidebarGuide(),
    },

    logo: '/logo.svg',

    editLink: {
      repo: 'wibus-wee/Web_Tutorials',
      branch: 'main',
      dir: 'docs',
      text: 'Suggest changes to this page'
    },

    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/wibus_wee' },
      // { icon: 'discord', link: 'https://chat.vitejs.dev' },
      { icon: 'github', link: 'https://github.com/wibus-wee' }
    ],

    footer: {
      message: 'Released under the AGPL v3 License.',
      copyright: 'Copyright © 2021-present Wibus & NEXT-Space Contributors'
    },

  }

})

function nav() {
  return [
    { text: 'Guide', link: '/guide/', activeMatch: '/guide/' },
    {
      text: 'Repository',
      link: 'https://github.com/wibus-wee/Web_Tutorials',
    }
  ]
}

function sidebarGuide() {
  return [
    {
      text: '第一章 - Web 入门',
      collapsible: true,
      items: [
        { text: '初次见面', link: '/guide/' },
        { text: '安装基本软件', link: '/guide/Installing_basic_software' },
        { text: '设计网站外观', link: '/guide/What_will_your_website_look_like' },
        { text: '处理文件', link: '/guide/Dealing_with_files' },
        { text: 'HTML 基础知识', link: '/guide/html' },
        { text: 'CSS 基础知识', link: '/guide/css' },
        { text: '发布你的网站', link: '/guide/Publishing_your_website' },
        { text: '网站如何运作（额外）', link: '/guide/How_the_Web_works' },
      ]
    },
    
  ]
}
