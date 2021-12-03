const express = require('express')
const dotenv = require('dotenv')

dotenv.config()
const host = process.env.HOST
const port = process.env.PORT
// const id= process.eny.LOGIN
// const pa=process.eny.PASSWORD
const app = express()


app.use(express.static(__dirname + '/public'))

app.use(express.urlencoded({ extended: true }))

app.post('/auth', (req, res) => {
  let message = 'ログインできませんでした。'
  const login_name = req.body.login_name
  const passwrod = req.body.password
  if (login_name == process.env.LOGIN && passwrod == process.env.PASSWORD) {
    message = 'ログインできました。'
  }
  res.send(message)
})
// app.post('/index', (req, res) => {

// })
app.get('/', (req, res) => {
  res.send("aa")
})

app.get('/profile', (req, res) => {
  res.send('This is profile page')
})

app.listen(port, host, () => {
  console.log('http://' + host + ':' + port)
})