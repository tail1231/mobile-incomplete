module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ],
  ignore:[
    "./src/lib/mui/js/mui.min.js",
    "./src/lib/mui/js/mui.js"
  ]
}
