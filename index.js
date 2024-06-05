import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import router  from './cinfig/routes.js'


const app = express()
const corsOption ={
    origin:'*'//'localhost:3000'
}

//configuracion del middleword
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/api',cors(corsOption),router)

app.get('/',(req,res)=>
res.send('Bienvenido al API Johitan :D'))

const server = app.listen(process.env.PORT || 8000, ()=>{
    console.log(`Servidor ejecutandose en el puerto: ${server.address().port}`)
})

export default app