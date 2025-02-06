import express from 'express'
const app = express()
import env from 'dotenv'
import xRouter from './routes/xTrendsRoutes.js'
import axios from 'axios'

env.config({})

export const twitterClient = axios.create({
    baseURL: 'https://api.twitter.com/2/',
    timeout: 300000,
    headers: {
        'Authorization': `Bearer ${process.env.TOKEN}`,
    },

});

app.get('/', (req, res) => {
    res.send('<h1 style="text-align:center">Server is Connected</h1>')
})

app.use('/api', xRouter)
const server = app.listen(process.env.PORT, () => console.log('connected'));
server.setTimeout(300000);