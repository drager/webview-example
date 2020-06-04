import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import WebView from 'react-native-webview'

export default function App() {
  return (
    <View style={styles.container}>
      <WebView
        source={require('./assets/web/index.html')}
        originWhitelist={['*']}
        allowFileAccess
        javaScriptEnabled
        domStorageEnabled
        allowUniversalAccessFromFileURLs
        allowFileAccessFromFileURLs
        scalesPageToFit
        useWebKit
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
