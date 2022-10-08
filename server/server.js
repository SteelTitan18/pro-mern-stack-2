const express = require('express');
const app = express();
const fileServerMiddleware = express.static('public');
app.use('/', fileServerMiddleware);

app.listen(3000, function () {
    console.log('App started on port 3000');
});

// const express = require('express');
// const app = express();
// app.use(express.static('public'));
// app.listen(3000, function () {
//     console.log('App started on port 3000');
// });
