import express from 'express'
const app = express()
import { car } from './routes/routeCars.js'

app.use(express.json())
app.use(car)


app.listen(4000)