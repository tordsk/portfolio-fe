module.exports = {
    title: 'Work in progress',
    description: 'Just playing around',
    head: [
        ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "apple-touch-icon.png"}],
        ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "favicon-32x32.png"}],
        ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "favicon-16x16.png"}],
        ['link', { rel: "manifest", href: "site.webmanifest"}],
        ['link', { rel: "shortcut icon", href: "favicon.ico"}]
    ],
    chainWebpack: (config, isServer) => {
            // mutate the config for client
    config.module
        .rule('js' /* or css */)
        .include
        .add(__dirname + '/node_modules/vue-awesome')
    }
}
