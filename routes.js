const express = require('express')
const router = express.Router()//書き方決まっている

// const default_login_name = process.env.LOGIN_NAME
// const default_passsword = process.env.PASSWORD

router.post('/auth', (req, res) => {
    let message = 'ログインできませんでした。'
    const login_name = req.body.login_name
    const passwrod = req.body.passwordi
    if (login_name == process.env.LOGIN && passwrod == process.env.PASSWORD) {
        message = 'ログインできました。'
    }
    res.send(message)
})
// router.post('/index', (req, res) => {

// })
router.get('/', (req, res) => {
    let data={}
    data.title='トップページ'
    res.render("index.ejs",data) 
})

router.get('/xv', (req, res) => {
    let user={
        name:"名前",
        birthplace:"相模原市",
        hobby:["ゲーム","ドライブ"]

    }
    let data={}
    data.title='プロフィール'
    data.user=user

    
    res.render('indexpr.ejs',data)
})
router.get('/pr', (req, res) => {
    res.render('login.ejs')
})
router.get('/item/:id', (req, res) => {
    const id =req.params.id
    console.log(id)
    res.render('show.ejs')
})

module.exports=router