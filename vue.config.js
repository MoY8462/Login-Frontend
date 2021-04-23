module.exports = {
    css: {
        loaderOptions: {
            sass: {
                implementation: require('sass'),
                prependData: `@import "./src/sass/main.scss";`
            }
        }
    }
}