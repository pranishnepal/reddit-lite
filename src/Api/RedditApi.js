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
        console.error("Error fetching data");
    }
}