import express from 'express'
import path from 'path'

const pastaAtual = process.cwd()
const pastaTemplates = path.join(pastaAtual, 'templates')
console.log(pastaTemplates)
//inicializaçao do aplicaivo express
const app = express()
// criaçao de uma porta no servidor
const porta = 3000
//comando para transformaos dados vindos de formularios para objetos JS
app.use(express.urlencoded({extended:true}))
app.use(express.json())


//rota raiz
app.get('/',(req,res)=>{
    res.sendFile(`${pastaTemplates}/index.html`)
})

app.listen(porta, ()=>{
    console.log(`servidor iniciando na porta ${porta}`)
})
