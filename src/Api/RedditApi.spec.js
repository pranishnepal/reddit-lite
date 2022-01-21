import {fetchRedditPosts, fetchSubRedditIcon, fetchSubReddits} from "./RedditApi";

test("Testing fetchRedditPosts()", async () => {
    const response = await fetchRedditPosts();
    console.log(response);
    expect(response).toBeTruthy();
});

test("Testing fetchSubReddits()", async () => {
    const response = await fetchSubReddits();
    console.log(response);
    expect(response).toBeTruthy();
});

test("Testing fetchSubRedditIcon()", async () => {
    const response = await fetchSubRedditIcon("r/antiwork");
    console.log(response);
    expect(response).toBeTruthy();
});