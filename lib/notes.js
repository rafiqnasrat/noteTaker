// REQUIRE MODULES
const fs = require('fs');
const path = require('path');

// FUNCTION FOR DELETED NOTES
const deleteNote = (id, notesArray) => 
{
	// DB PATH
	const dbPath = path.join(__dirname, '../db/notes.json');
	const result = notesArray.filter((note) => note.id !== id);
	fs.writeFileSync(dbPath, JSON.stringify({ notes: result }, null, 2));
	return result;
}

// VALIDATING NODES
const validateNote = (note) => 
{
	if (!note.title || typeof note.title !== 'string') return false; 
	if (!note.text || typeof note.text !== 'string') return false; 
	return true;
}

// CREATING NEW NOTES
const createNewNote = (body, notesArray) => 
{
	const note = body;
	const dbPath = path.join(__dirname, '../db/notes.json');
	let newNoteArray = [...notesArray, note];
	fs.writeFileSync(dbPath, JSON.stringify({ notes: newNoteArray }, null, 2));
	return note;
}

// EXPORTING ALL THREE FUNCTIONS
module.exports = {deleteNote, validateNote,	createNewNote};
