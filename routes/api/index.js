// MODULES
const router = require('express').Router();
const fs = require('fs');
const { createNewNote, validateNote, deleteNote } = require('../../lib/notes');

// GET NOTES READ AND RETURN ALL NOTES
router.get('/notes', (req, res) => {
	// READ AND  RETURN notes.js AS JSON
	let results = fs.readFileSync('db/notes.json', 'utf8');
	results = JSON.parse(results);
	res.json(results.notes);
});

//POST METHOD, GET NEW NOTES SAVE THEM AND RETURN THEM TO NEW NOT FOR THE CLIENT
router.post('/notes', (req, res) => {
	let newID = Math.floor(Math.random() * 10000);
	req.body.id = newID.toString();

	if (!validateNote(req.body)) {
		res.status(400).send('The note is not properly formatted.');
	} else {
		let results = fs.readFileSync('db/notes.json', 'utf8');
		results = JSON.parse(results);
		const note = createNewNote(req.body, results.notes);
		res.json(note);
	}
});

// DELETE METHOD TO DELETE A NOTE ACCORDING TO THE ID
router.delete('/notes/:id', (req, res) => {
	let results = fs.readFileSync('db/notes.json', 'utf8');
	results = JSON.parse(results);
	let notes = results.notes;
	const result = deleteNote(req.params.id, notes);

	if (!result) {
		res.status(404).send('The note with the given ID was not found.');
	} else {
		res.json(result);
	}
});

// EXPORT
module.exports = router;
