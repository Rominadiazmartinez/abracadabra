import express from 'express'

const app = express()
app.use(express.static('assets'))

const usuarios = ["Juan", "Jocelyn", "Astrid", "Maria", "Ignacia", "Javier", "Brian"]

app.get('/abracadabra/usuarios', (req, res) =>{
    res.json(usuarios)
})

app.use('/abracadabra/juego/:usuario', (req, res, next) =>{
    const {usuario} = req.params
    console.log(req.params)
    if( usuarios.includes(usuario)){
        next()
        
    }else{
        res.send(`<img src="/who.jpeg" alt="">`)
    }
})

app.get(`/abracadabra/juego/:usuario`, (req, res) =>{
    const {usuario} = req.params
    res.send(`Usuario: ${usuario} encontrado :)`)
})

app.get('/abracadabra/conejo/:n', (req, res) =>{
    const {n} = req.params
    const numeroAleatorio = Math.floor(Math.random() * 4) + 1;
    if(n == numeroAleatorio){
        res.send(`<img src="/conejito.jpg" alt="Conejito">`)
    }else{
        res.send(`<img src="/voldemort.jpg" alt="Voldi">`)
    }
})

app.listen(3000, () =>{
    console.log('Servidor arriba con Express')
})

app.all('*', (req, res) =>{
    res.send('Esta página no existe')
})