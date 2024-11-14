const http = require("http"); // require permite trazer um modulo dentro de outro arquino, que esse caso seria o modulo http
const host = "127.0.0.1"
const port = 3000
// estamos criando um servidor, o qual se for criado ele receberar um  status 200 
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-type','text/plain');// sera o tipo de conteudo que sera apresentado nesse caso o TEXT/PLAIN e do tipo texto 
    res.end('ola meu primeiro script')// a renderizado na porta sera "ola meu primeiro script"
})

//listen e a maneira de escuta a porta 
server.listen(port,host,()=>{
        console.log(`server running at http://${host}:${port}`)
})

//https://nodeschool.io/pt-br/
