import fetch from "node-fetch";

export let ALL_INFO = {};

// Function to receive data about posts from a certain subreddit
export const getPostsRequest = async(subreddit) => {
    return await fetch(`https://www.reddit.com/r/${subreddit}/hot.json`)
    .then(function(res) {
        return res.json();
    }).then(function(data) {
        return data;
    })
    .catch(function(err) {
        console.log(err); 
    });
}

// Function to receive data about comments from a certain post by postId, subreddit and topic
export const getCommentsRequest = async(subreddit, postId, topic) => {
    await fetch(`https://www.reddit.com/r/${subreddit}/comments/${postId}/${+topic}/.json`)
    .then(function (res) {
        return res.json();
    }).then(function(data) {
        return data;
    })
    .catch(function(err) {
        console.log(err); 
    });
}

// Function to store data retrieved from request of posts in one object
const storeSubredditData = async(subreddit) => {
    const data = await getPostsRequest(subreddit);
    ALL_INFO[subreddit] = [];
    data.data.children.map((post) => {
        ALL_INFO[subreddit].push(
            {
                author: post.data.author,
                postId: post.data.id,
                postText: post.data.selftext,
                topic: post.data.title,
                publicationTime: post.data.created,
                numComments: post.data.num_comments,
                ups: post.data.ups,
                downs: post.data.downs,
                comments: []
            }
        )
    })
}

/* const storeCommentsDataForPost = async(subreddit, postId, topic) => {
    const data = await getCommentsRequest(subreddit, postId, topic);
    console.log(data);
    data[1].data.children.map((comment) => {
        post.comments.push({
            author: comment.data.author,
            text: comment.data.body,
            time: comment.data.created_utc
        })
    })
} */

// await console.log(ALL_INFO);
// 10 GET requests from reddit to receive object with information about 10 subreddits;
await storeSubredditData('books');
await storeSubredditData('art');
await storeSubredditData('philosophy');
console.log(ALL_INFO);
//export all_info 



