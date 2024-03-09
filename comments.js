// Create web server that has a route for /comments. This route should accept POST requests and store comments in an array. 
// It should return a JSON object with all the comments when it receives a GET request to /comments.

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

let comments = [];

app.post('/comments', (req, res) => {
    let comment = req.body.comment;
    comments.push(comment);
    res.send("Comment added");
});

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
