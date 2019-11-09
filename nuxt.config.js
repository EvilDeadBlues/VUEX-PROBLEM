const pkg = require('./package');

module.exports = {
    mode: 'spa',
    srcDir: 'src/',
    extension: ['js', 'ts'],
    server: {
        host: '127.0.0.1',
        port: 1337,
    },
    head: {
        title: "test",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: "NTEST" }
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
        ]
    },
    loading: { color: "#3B8070" },
    css: [
    ],
    buildModules: [
    ],
    modules: [
        '~/modules/typescript',
    ],
    plugins: [
    ],

    env: {
        WS_URL: process.env.WS_URL || 'http://localhost:1337'
    },

    axios: {},

    build: {
        extend(config, ctx) { },
    },

}