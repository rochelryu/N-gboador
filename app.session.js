const express = require('express')
var session = require('express-session')
const cookieParser = require('cookie-parser')

var fs = require('fs')

app = express();


app.use(cookieParser())
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true }
  }))
// Access the session as req.session
// Access the session as req.session
app.get('/', function(req, res) {
  console.log(req.session.views)

  if (req.session.views) {
    req.session.views = 1
    res.end('welcome to the session demo. refresh!')
    console.log(req.session.views)
  } else {
    req.session.views++
    res.setHeader('Content-Type', 'text/html')
    res.write('<p>views: ' + req.session.views + '</p>')
    res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
res.send({user: req.session.views}) 
 }
})

app.listen(3000)
