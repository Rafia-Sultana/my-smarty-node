const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('hello from my smarty node');
});


const users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
    },
    {
        "id": 2,
        "name": "Ardashi",
        "username": "Bret",
        "email": "ardashincere@april.biz",
    },
    {
        "id": 3,
        "name": "Tanher",
        "username": "Bret",
        "email": "anherincere@april.biz",
    },
    {
        "id": 4,
        "name": "Eahutyinh",
        "username": "Bret",
        "email": "ahutyinhcere@april.biz",
    },
    {
        "id": 5,
        "name": "Fraihhabhin",
        "username": "Bret",
        "email": "farvinncere@april.biz",
    },
    {
        "id": 6,
        "name": "Amrihngfu",
        "username": "Bret",
        "email": "amringdhncere@april.biz",
    }
]
app.get('/users', (req, res) => {
    //filter search qery by parameter 
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);
    }
    else {
        res.send(users);
    }

})
app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    // first way
    //const user = users[id];
    // second way
    const user = users.find(u => u.id === id);

    res.send(user);
})


app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})
app.listen(port, () => {
    console.log("listening to port", port);
})