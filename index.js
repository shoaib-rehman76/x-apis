import express from 'express'
const app = express()
import env from 'dotenv'
import xRouter from './routes/xTrendsRoutes.js'
import axios from 'axios'
import axiosRetry from 'axios-retry'

// import timeoutHandler from 'express-timeout-handler'
env.config({})

export const twitterClient = axios.create({
    baseURL: 'https://api.twitter.com/2/',
    timeout: 300000,
    headers: {
        'Authorization': `Bearer ${process.env.TOKEN}`,
    },

});

// Configure axios to retry on network errors
// axiosRetry(twitterClient, {
//     retries: 3, // Number of retries
//     retryDelay: (retryCount) => {
//         console.log(`Retry attempt: `);
//         return retryCount * 2000; // Exponential backoff delay between retries (2 seconds)
//     },
//     retryCondition: (error) => {
//         // Retry on network errors or 5xx server errors
//         return error.code === 'ECONNRESET' || axiosRetry.isNetworkOrIdempotentRequestError(error);
//     },
// });
app.use('/api', xRouter)
const server = app.listen(8080, () => console.log('connected'));

// Set the timeout to 5 minutes (300,000 milliseconds)  
server.setTimeout(300000);





// server.listen(process.env.PORT, () => {
//     console.log('sever is listening on port :', process.env.PORT)
// })