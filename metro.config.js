const {getDefaultConfig} = require('metro-config')
const blacklist = require('metro-config/src/defaults/blacklist')

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig()

  return {
    resolver: {
      assetExts: [...defaultConfig.resolver.assetExts, 'html', 'webviewjs'],
    },
  }
})()
