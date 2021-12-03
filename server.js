const express = require('express')
const dotenv = require('dotenv')


dotenv.config()
const host = process.env.HOST
const port = process.env.PORT
const routers = require('./routes')//ルーツを読み込む

const app = express()
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: true }))
app.use(routers)


app.set('view engine','ejs')

app.listen(port, host, () => {
  console.log('http://' + host + ':' + port)
})