import { apiResponse } from "../helpers/apiResponse.js";
import { allTweets } from "../helpers/getTweets.js";
import { twitterClient } from "../index.js";
export const loadXtrends = async (req, res) => {
    // try {
    const response = await twitterClient.get(`tweets/search/recent?query=money&max_results=10&tweet.fields=author_id,conversation_id,created_at,geo,id,lang,source,text&user.fields=created_at,description,entities,id,location,name,url,username`, {
        headers: {
            'Authorization': `bearer ${process.env.TOKEN}`,
        },
    })

    if (response.data)
        return apiResponse('error', 'no data found', {}, res, 404)


    //     // if (!data) {
    // return apiResponse('fail', 'no data found', {}, res, 400)

    //     // }
    //     console.log(data, 'data at controller');
    return apiResponse('success', 'data', response.data, res, 200)

    // } catch (error) {
    //     apiResponse('fail', 'server error', {}, error, 500)
    // }
}