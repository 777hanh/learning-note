const cors = require('cors');
const express = require('express');
const db = require('../src/config/db/index');
const route = require('../src/routes');

const app = express();
const PORT = process.env.PORT || 5000;
// app.use(cors());
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', true);
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    }),
);
db.connect();
route(app);

app.get('/vercel', (req, res) => res.send('Express on Vercel'));

// app.listen(3000, () => console.log('Server ready on port 3000.'));

module.exports = app;
