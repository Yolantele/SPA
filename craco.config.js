const CracoLessPlugin = require('craco-less')
const THEME = {
  primary: '#28B99D',
  black: '#3F3F3F',
  white: '#F5F5F5',
  gold: '#F5A623',
  red: '#E15554',
  grey: 'grey',
  purple: '#55427A'
}

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': THEME.primary,
              '@success-color': THEME.primary,
              '@warning-color': THEME.gold,
              '@error-color': THEME.red,
              '@black': THEME.black,
              '@layout-header-background': THEME.primary,
              '@layout-footer-background': THEME.white,
              '@layout-body-background': THEME.white,
              '@layout-sider-background': 'white',
              '@white': THEME.white,
              '@layout-trigger-background': THEME.purple
            },
            javascriptEnabled: true
          }
        }
      }
    }
  ]
}
