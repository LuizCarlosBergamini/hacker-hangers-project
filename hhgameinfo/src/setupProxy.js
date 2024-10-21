const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://api.igdb.com/',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '/v4', // Remove /api from the path
            },
        })
    );
};