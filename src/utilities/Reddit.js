
const redirectUri = 'http://localhost:3000/';
let accessToken;
let posts;

async function getRedditPosts()  {
    await fetch('https://www.reddit.com/r/books/hot.json').then(function(res) {
  	    return res.json;
    }).catch(function(error) {
  	    console.log(error);
    });
  
  console.log(data);
}

getRedditPosts();

