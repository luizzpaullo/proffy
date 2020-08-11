//Servidor
const express = require('express')
const server = express()

const {
    pageLading,
    pageStudy,
    pageGiveClasses,
    saveClasses 
} = require('./pages')


//Config Template engine
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//Config do server
server
//receber os dados de req.body
.use(express.urlencoded({extended:true}))

//config arq estaticos (scripts, css, images)
.use(express.static("public"))
//config as Routes
.get("/", pageLading)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500)

