const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('Day la Backend Project - Render'));
app.listen(port, () => console.log('Server is running'));
