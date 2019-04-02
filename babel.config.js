module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    [
      'import',
      { libraryName: 'ant-design-vue', libraryDirectory: 'es', style: true }
    ],
    [
      'import',
      { libraryName: 'iview', libraryDirectory: 'src/components' },
      'iview'
    ]
  ]
}
