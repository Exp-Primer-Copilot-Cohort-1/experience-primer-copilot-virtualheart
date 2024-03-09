// Create web server with express
// Create a route to handle GET requests to /comments
// Return a JSON object with a key of comments and a value of an array of comments
// Each comment should be an object with a key of body and a value of the comment itself

const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
    res.json({
        comments: [
            {body: "This is awesome!"},
            {body: "I like this!"}
        ]
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});