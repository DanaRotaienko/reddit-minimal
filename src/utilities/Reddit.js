
const redirectUri = 'http://localhost:3000/';
let accessToken;

// Authorise to Reddit through Post login request to get an access token

// 10 GET requests from reddit to receive object with information about 10 subreddits;

// Create post ID with randomiser 
fetch('https://www.reddit.com/r/books/new.json')
    .then(function(res) {
        return res.json();   // Convert the data into JSON
    })
    .then(function(data) {
        console.log(data);   // Logs the data to the console
    })
    .catch(function(err) {
        console.log(err);   // Log error if any
    });
// Loop through every post in info.book (ex) to get comments:
/* 
    for (let post in info.book (check object structure)) {
        let data = fetch(apiToGetComents);
        post[comment] = data;
    }
*/

//export all_info 



