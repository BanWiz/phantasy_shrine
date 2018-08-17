const express = require('express');
const app = express();


app.use(express.static('./web_ui/build'));

app.listen(process.env.PORT || 8080);