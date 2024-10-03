import axios from "axios";
import { twitterClient } from "../index.js";
import { getAllGemeineTrends } from "../helpers/scrapingApi.js";

export const loadAllTweets = async (req, res) => {
    console.log('called loadAllTweets');
    const allTweetsArr = []
    try {
        const hashtag = await getAllGemeineTrends()
        console.log(Object.values(hashtag).splice(0, 10), 'hashtags ------>');
        const keywords = Object.values(hashtag).splice(0, 10);

        // keywords.forEach(async (keyword) => {
        // console.log('i am called ', keyword);
        const response = await twitterClient.get(`tweets/search/recent?query=germany&max_results=10&tweet.fields=author_id,conversation_id,created_at,geo,id,lang,source,text&user.fields=created_at,description,entities,id,location,name,url,username`)
        // console.log(response, 'res');

        // if (response) {
        //     allTweetsArr.push(response)
        // }
        // })

        const data = response.data
        if (!response.data) {
            return res.status(400).json({
                status: 'fail',
                message: 'data not found',
                data,
            })
        }


        return res.status(201).json({
            status: 'success',
            message: 'data loaded successfully',
            data,
        })



    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: 'server error',
        })
    }
}

export const loadSingleTweets = async (req, res) => {
    try {
        const response = await twitterClient.get(`tweets/search/recent?query=money&max_results=10&tweet.fields=author_id,conversation_id,created_at,geo,id,lang,source,text&user.fields=created_at,description,entities,id,location,name,url,username`)
        const data = response.data
        if (!response.data) {
            return res.status(403).json({
                status: 'fail',
                message: 'data not found',
                data,
            })
        }

        return res.status(201).json({
            status: 'success',
            message: 'data loaded successfully',
            data,
        })

    } catch (error) {
        throw new Error(error)
    }
}

export const loadTweetConversation = async (req, res) => {
    try {
        const id = req.params.id
        console.log(id, 'id------>');
        // https://api.x.com/2/tweets/search/recent?query=conversation_id:1841006384235565302
        const response = await axios.get(`https://api.x.com/2/tweets/search/recent?query=conversation_id:${id}`)
        const data = response.data
        if (!response.data) {
            return res.status(403).json({
                status: 'fail',
                message: 'data not found',
                data,
            })
        }

        return res.status(201).json({
            status: 'success',
            message: 'Conversation loaded successfully',
            data,
        })

    } catch (error) {
        throw new Error(error)
    }
}

