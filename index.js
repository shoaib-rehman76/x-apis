import express from 'express'
const app = express()
import env from 'dotenv'
import xRouter from './routes/xTrendsRoutes.js'

env.config({})

app.use('/api', xRouter)



app.listen(process.env.PORT, () => {
    console.log('sever is listening on port :', process.env.PORT)
})