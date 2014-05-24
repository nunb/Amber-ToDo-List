({
    baseUrl: '.',
    mainConfigFile: 'main.js',
    dir: "build",
    optimize: 'uglify2',
    modules: [
      {
        name: "main"
      }
    ],
    removeCombined: true
})
