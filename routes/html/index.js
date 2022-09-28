// MODULES
const path = require('path');
const router = require('express').Router();

// FILES PATH
const notesFilePath = path.join(__dirname, '../../public/notes.html');
const htmlFilePath = path.join(__dirname, '../../public/index.html');

// THE ROUTE SHOULD RETURN notes.html FILE
router.get('/notes', (req, res) => { res.sendFile(notesFilePath)});
// THE ROUTE SHOULD RETURN index.html FILE
router.get('*', (req, res) => {	res.sendFile(htmlFilePath)});

module.exports = router;