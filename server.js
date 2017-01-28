var webpack = require('webpack')
var express = require('express')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.hot.config.js')

var app = express()
var port = 3000
var host = '0.0.0.0'

var compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
	stats: {
        colors: true
    },
	publicPath: config.output.publicPath
}))

app.use(webpackHotMiddleware(compiler))

app.get("/", function(req, res){
	res.sendFile(__dirname + '/index.html')
})

app.listen(port, host, function(error) {
	if(error){
		console.log(error)
	}else{
		console.info("專案已經啟動: http://" + host + ":" + port)
	}
})