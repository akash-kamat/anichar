const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const { MongoClient } = require("mongodb");
const cors = require("cors")

const connectionString = ""

const client = new MongoClient(connectionString);
app.use(bodyParser.json())
app.use(cors())



app.get('/', (req, res) => {
    res.json("working")
})

app.get('/users', (req, res) => {
    async function run() {
        try {
            await client.connect();
            const database = client.db("anychar");
            const collection = database.collection("users");
            const result = collection.find({});
            l = []
            await result.forEach(doc => l.push(doc));
            res.json(l)

        } finally {
            await client.close();
        }
    }
    run().catch(console.dir);
})


app.post('/register', (req, res) => {
    async function run() {
        try {
            await client.connect();
            const database = client.db("anychar");
            const collection = database.collection("users");
            usr = await collection.insertOne({
                "name": req.body.name,
                "password": req.body.password,
                "joinedOn": new Date,
                "favorites": []
            })
            console.log("Registered:\n", usr)
            res.json("sucessfully registered")
            // console.log(req.body)

        } finally {
            // Ensures that the client will close when you finish/error
            await client.close();
        }
    }
    run().catch(console.dir);
})

app.post('/login', (req, res) => {
    async function run() {
        try {
            await client.connect();
            const database = client.db("anychar");
            const collection = database.collection("users");
            const result = await collection.findOne(req.body);

            if (result == null) {
                console.log("wrong")
                res.json({ "login": "0" })
            }
            else {
                console.log("Logged In Sucessfully")
                res.json({
                    "login": "1",
                    "name": result.name,
                    "password": result.password,
                    "joinedOn": result.joinedOn,
                    "favorites": result.favorites
                })
            }

        } finally {
            await client.close();
        }
    }
    run().catch(console.dir);
})

app.post('/like', (req, res) => {
    async function run() {
        try {
            await client.connect();
            const database = client.db("anychar");
            const collection = database.collection("users");
            const query = { "name": req.body.name};
            const update =  await collection.updateOne(query,{$push:{favorites:req.body.fav}})
            console.log(update)
            const result = await collection.findOne({"name":req.body.name});

            res.json({
                "login": "1",
                "name": result.name,
                "password": result.password,
                "joinedOn": result.joinedOn,
                "favorites": result.favorites
            })

        } finally {
            await client.close();
        }
    }
    run().catch(console.dir);
})

app.post('/unlike', (req, res) => {
    async function run() {
        try {
            await client.connect();
            const database = client.db("anychar");
            const collection = database.collection("users");
            const query = { "name": req.body.name};
            const update =  await collection.updateOne(query,{$pull:{favorites:req.body.unlike}})
            console.log(update)
            const result = await collection.findOne({"name":req.body.name});

            res.json({
                "login": "1",
                "name": result.name,
                "password": result.password,
                "joinedOn": result.joinedOn,
                "favorites": result.favorites
            })

        } finally {
            await client.close();
        }
    }
    run().catch(console.dir);
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})