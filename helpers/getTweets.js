import axios from "axios";


export const allTweets = async (querFilters) => {
    console.log(querFilters, 'query----->');
    try {
        const response = await axios.get(`https://api.twitter.com/2/tweets/search/recent?query=STRDY&max_results=10&tweet.fields=author_id,conversation_id,created_at,geo,id,lang,source,text&user.fields=created_at,description,entities,id,location,name,url,username`, {
            headers: {
                'Authorization': `bearer ${process.env.token}`,
            },
            timeout: 10000 // Optional: Increase timeout to 5 seconds
        })
        console.log(response, 'response ------>');
        return response.data
    } catch (error) {
        console.log(error, 'error');
    }
}