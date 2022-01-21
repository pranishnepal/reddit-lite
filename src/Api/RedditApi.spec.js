import {fetchRedditPosts} from "./RedditApi";

test("Testing reddit api", async () => {
    const data = await fetchRedditPosts();
    console.log(data);
    expect(data).toBeTruthy();
})