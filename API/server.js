const express = require ('express')
const api = express ()
const drive = 'mongodb+srv://<db_akalinigentil_db_user>:admin@cluster0.yex3f1c.mongodb.net/?appName=Cluster0'

//mongodb+srv://<db_akalinigentil_db_user>:admin@cluster0.yex3f1c.mongodb.net/?appName=Cluster0

api.listen(3000, function(){
    console.log("o nosso servidor esta na porta 3000")
})

api.get('/',(req,resp) => {
    resp.send("olá mundo!")
})