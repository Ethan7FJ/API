import mysql from 'mysql2/promise'
import dab from '../cinfig/database.js'

export default class infoController{
    static async index(req,res){
        let connection;
        try{
            connection  = await mysql.createConnection(dab)
            const[resultado] = await connection.execute("SELECT * FROM bob")
            console.log(resultado)
            res.json(resultado)
        }
        catch(error){
            res.status(500).json({'Error':error.message})
        }
        finally{
            if(connection){
                await connection.end()
            }
            
        }
    }

    static async store(req,res){
        let connectionx;
        try{
            const {title,descripcion,img} = req.body
            connectionx = await mysql.createConnection(dab)
            const [enviar] = await connectionx.execute("INSERT INTO bob (title,descripcion,img) VALUES(?,?,?)",[title,descripcion,img])
            console.log(enviar)
        }
        catch(error){
            res.status(500).json({'ERROR AL SUBIR SUS DATOS': error.message})
        }
        finally{
            if(connectionx){
                await connectionx.end()
            }
        }
    }

    static async details(req,res){
        let connectionx;
        try{
            const id_b = req.params.id
            connectionx = await mysql.createConnection(dab)
            const [AID] = await connectionx.execute("SELECT * FROM bob WHERE id_b = ?",[id_b])
            console.log(AID)
            res.status(200).json(AID)
        }
        catch(error){
            res.status(500).json({'ERROR AL SUBIR SUS DATOS': error.message})
        }
        finally{
            if(connectionx){
                await connectionx.end()
            }
        }
    }

}