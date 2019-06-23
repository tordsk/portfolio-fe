module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    chainWebpack: (config, isServer) => {
            // mutate the config for client
    config.module
        .rule('js' /* or css */)
        .include
        .add(__dirname + '/node_modules/vue-awesome')
    }
}
