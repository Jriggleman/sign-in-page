const express = require('express');
const app = express();
const cors = require('cors');

//middleware
app.use(cors());

//this should eventually get users from database
//hardcoding user for testing
app.get('/users', (req, res) => {
    const user = {
        username: "Luke",
        password: "Skywalker",
    };
    res.json(user);
});

PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
