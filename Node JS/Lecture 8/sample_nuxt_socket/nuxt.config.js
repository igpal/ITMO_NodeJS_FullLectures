module.exports = {
    css: [
        'assets/main.css'
    ],
    head: {
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ]
    },
    modules: [
        '@nuxtjs/axios',
    ],
    plugins: [
        { src: '~/plugins/socket.client.js' }
    ],
}