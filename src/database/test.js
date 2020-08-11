const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async(db) => {
    //insirir dados
    proffyValue = {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/40010987?s=460&u=7d754f96543451ccc11070b24d9edc0e21a44c44&v=4",
        whatsapp: "67-99999-0000",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",      
    }

    classValue = {
        subject: 1,
        cost: "200",
    }

    classScheduleValues = [
        //class_id vira pelo banco de dados apos cadastrarmos a class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
        
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //consultar dados inseridos

    //consultar todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    //consultar as classes de uma determinado professor 
    //e trazer junto os dados do professor
    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)

    // console.log(selectedClassesAndProffys)

    //horario que a pessoa trabalha por exemplo é das 08hs as 18hs
    //horario do time_from 8h precisa ser menor ou igual ao horario solicitado
    //o time_to precisa acima
    const selectedClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <="520"
        AND class_schedule.time_to > "520"

    `)

    // console.log(selectedClassesSchedules)

})