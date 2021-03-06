const { description } = require('../../package')

module.exports = {
  base: "/paloma-docs/",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'The Scrappy Messanger Chain',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Docs',
        link: '/guide/abstract',
      },
      {
        text: 'Blog',
        link: 'https://www.palomachain.com/blog/'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/palomachain/paloma'
      },
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Explore',
          collapsable: false,
          children: [
            'abstract',
            ['introduction', 'Introduction'],
          ]
        },
        {
          title: 'Develop',
          collapsable: false,
          children: [
            {
              title: 'Smart Contracts',
              collapsable: false,
              children: [
                ['contracts', 'Writing a Contract'],
              ]
            },
          ]
        },
        {
          title: 'Maintain',
          collapsable: false,
          children: [
            'pigeon',
            {
              title: 'Full node',
              collapsable: false,
              children: [
                'node-management/full-node/system-config',
                'node-management/full-node/build-paloma-core',
                'node-management/full-node/set-up-production',
                'node-management/full-node/join-a-network',
                'node-management/full-node/sync',
                'node-management/full-node/troubleshoot',
                'node-management/full-node/updates-and-additional',
              ]
            },
            {
              title: 'Validate',
              collapsable: false,
              children: [
                ['validate/manage-a-paloma-validator/validate-paloma', 'Get started'],
                'validate/manage-a-paloma-validator/set-up-validator',
                'validate/manage-a-paloma-validator/court-delegations',
                'validate/manage-a-paloma-validator/implement-security',
                'validate/manage-a-paloma-validator/troubleshoot-validator-problems',
                'validate/manage-a-paloma-validator/faq',
              ]
            },
          ]
        },
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
