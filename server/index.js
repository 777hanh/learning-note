const cors = require('cors');
const express = require('express');
const db = require('./src/config/db/index');
const route = require('./src/routes');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(cors());
app.use(express.static('public'));
db.connect();
route(app);

// app.listen(PORT, () => {
//     console.log(`server listen at http://localhost:${PORT}`);
// });
