const express = require ('express');
const cors= require('cors');
class Server{
    
    constructor(){
        this.app=express();
        //Rutas de mi aplicacion
        this.middlewares();
        this.usuariosPath= "/api/usuarios"

        this.routes();
        this.port=process.env.PORT;
    }

    middlewares(){
        //cors
        this.app.use(cors());
        //Lectura y parseo del body
        this.app.use(express.json());
        //directorio publico
        this.app.use(express.static('public'));
    }
    routes(){ 
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('Sevidor corriendo en el puerto '+ this.port);
        });
    }

}


module.exports= Server;