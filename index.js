const express = require('express')
var bodyParser = require('body-parser')
var User = require('./model/User');


const app = express()
app.use(bodyParser.json({ type: 'application/*+json' }))


const user1 = new User(1,"Ann",21)
const user2 = new User(2,"Mary",19)
const user3 = new User(3,"Alen",21)

const arr =[user1,user2,user3]

 
app.get('/user', (req, res)=> {
  res.send(arr)
})
 

app.get('/news',(req,res)=>{
    res.sendFile(__dirname + "/news.json");
})

app.get('/user/:id', (req, res)=> {
    var id = req.params.id
    switch (id) {
        case '1':
            res.send(user1)
            break;
        case '2':
            res.send(user2)
            break;
        case '3':
            res.send(user3)
            break;
        default:
            res.status(404).send('Not found')
            break;
    }
  })

app.listen(3000)



