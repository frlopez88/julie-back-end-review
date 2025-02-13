import { db } from "../db/cn.js"

export const getCars = async(req,res)=>{

    const sql = `select * from cars`
    const result = await db.query(sql)
    res.json(result)

}

export const postCars = async (req, res)=>{

    const temp = req.body
    const params = [temp.make, temp.model, temp.year]
    const sql  = `insert into cars (make, model, year) values ($1, $2, $3) returning id_car`
    const result = await db.query(sql, params)
    res.json({message: "Object Created"})

}

export const putCars = async (req, res)=>{

    const temp = req.body
    const id_car = req.params.id
    const params = [temp.make, temp.model, temp.year, id_car]
    const sql  = ` update cars 
                        set make = $1, 
                            model = $2, 
                            year = $3
                    where id_car = $4 returning *`
    const result = await db.query(sql, params)
    res.json({message: "Object Modified"})

}

export const deleteCars = async (req, res)=>{


    const id_car = req.params.id
    const params = [id_car]
    const sql  = ` delete from cars where id_car = $1`
    const result = await db.query(sql, params)
    res.json({message: "Object Deleted"})

}