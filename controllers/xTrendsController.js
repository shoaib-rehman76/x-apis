import express from "express";
import { apiResponse } from "../helpers/apiResponse.js";
import { allTweets } from "../helpers/getTweets.js";

export const loadXtrends = async (req, res) => {
    try {
        const data = await allTweets()

        console.log(data, 'data at controller');
        apiResponse('success', 'tweets loaded successfully', data, res, 200)


    } catch (error) {
        apiResponse('fail', 'server error', {}, res, 500)
    }
}