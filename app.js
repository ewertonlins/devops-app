const express = require('express');
const app = express();

app.get('/health', (req, res) => {
    res.send('It1s Work!');
});

app.get('/users', (req, res) => {
    res.json([{ id:1 , name: 'User test' }]);
});

app.listen(3000,() => {
    console.log('Server running on port 3000');

});

