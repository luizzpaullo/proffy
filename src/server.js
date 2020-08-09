//Dados
const proffys = [
    {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/40010987?s=460&u=7d754f96543451ccc11070b24d9edc0e21a44c44&v=4",
        whatsapp: "67-99999-0000",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Aquímica",
        cost: "200",
        weekday: [0],
        time_from: [720], //Converter em Segundos
        time_to: [1220]


    },


    {
        name: "Teste Prof 02",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "67-99999-0000",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Aquímica",
        cost: "200",
        weekday: [1],
        time_from: [720], //Converter em Segundos
        time_to: [1220]


    },

]

const subjects = [
            "Artes",
            "Biologia",
            "Ciência",
            "Educação Fisica",
            "Física",
            "Geografia",
            "História",
            "Matemática",
            "Português",
            "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]



//Funcionalidades
function getSubject(subjectNumber){
    const position = +subjectNumber - 1
    return subjects[position]
}



function pageLading(req, res) {
    return res.render("index.html")
    
}

function pageStudy(req, res) {
    //return res.sendFile(__dirname + "/views/study.html") - antes de configurar o nunjucks 
    //apos config da template engine
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays})
    
}

function pageGiveClasses(req, res) {
    const data = req.query


    const isNotEmpty = Object.keys(data).length > 0
        // Se tiver dados no array add
    if (isNotEmpty) {

        data.subject = getSubject(data.subject)

        //adionar dados a lista de proffys
         proffys.push(data)

         return res.redirect("/study")
    }
        //Se nao tiver dados mostra a pagina
    return res.render("give-classes.html", {subjects, weekdays})

}


const express = require('express')
const server = express()


//Config Template engine
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//Config do server
server
//config arq estaticos (scripts, css, images)
.use(express.static("public"))
//config as Routes
.get("/", pageLading)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)

