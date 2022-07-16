const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = app =>{
    app.use(
        createProxyMiddleware("/competitons",
            { target: 'https://api.football-data.org/v4', 
            changeOrigin: true 
        })
    )
}

module.exports = app =>{
    app.use(
        createProxyMiddleware("/teams",
            { target: 'https://api.football-data.org/v4', 
            changeOrigin: true 
        })
    )
}