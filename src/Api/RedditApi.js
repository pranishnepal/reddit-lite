const BASE_API_PATH = "https://www.reddit.com";

export const fetchRedditPosts = async (subRedditName = "r/memes") => {
    try {
        const apiURL = `${BASE_API_PATH}/${subRedditName}.json`;
        const response = await fetch(apiURL);
        const jsonResponse = await response.json();

        return jsonResponse.data.children.map((item) => {
            return item.data;
        });

    } catch (err) {
        console.error("Error fetching data!");
    }
}

export const fetchSubReddits = async () => {
    try {
        const apiURL = `${BASE_API_PATH}/subreddits.json`;
        const response = await fetch(apiURL);
        const jsonResponse = await response.json();

        return jsonResponse.data.children.map((item) => {
            return item.data;
        });
    } catch (err) {
        console.error("Error fetching subreddits!");
    }
}

export const fetchSubRedditIcon = async (subRedditName) => {
    /*
     * returns subreddit's icon as a url string for subreddit `subRedditName`.
     */
    try {
        const apiURL = `${BASE_API_PATH}/${subRedditName}/about.json`;
        const response = await fetch(apiURL);
        const jsonResponse = await response.json();

        return jsonResponse.data.icon_img;
    } catch (err) {
        console.error("Error fetching subreddit icon!");
    }
}