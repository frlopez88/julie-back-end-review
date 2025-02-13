import express from 'express'
export const car = express()
import { getCars, postCars , putCars, deleteCars} from '../controllers/controllerCars.js'

car.get('/cars', getCars)
car.post('/cars', postCars)
car.put('/cars/:id', putCars)
car.delete('/cars/:id', deleteCars)