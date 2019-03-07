import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';

import schema from './lib/graphql';

mongoose.connect('mongodb://127.0.0.1:27017/football');

const db = mongoose.connection;

db.on('error', () => {
    console.log('error connecting to database mongoDB')
}).once('open', () => {
    console.log('success connecting to database mongoDB')
})

const app = express();
const PORT = 8000;

app.get('/', (req, res, next) => {
    res.send('Hello World!');
});

app.use('/graphql', graphqlHTTP(() => ({
    schema,
    graphiql: true,
    pretty: true
})));

app.listen(PORT, () => {
    console.log(`Server running on port ${ PORT }`);
});