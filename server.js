// REQUIRE MODULES
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

// REQUIRE API AND HTML 
const apiRoutes = require('./routes/api');
const htmlRoutes = require('./routes/html');

// ASSIGNING PORT
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// LISTENING TO PORT
app.listen(PORT, function () {
	console.log('Note Taker is listening on http://localhost:' + PORT);
});
