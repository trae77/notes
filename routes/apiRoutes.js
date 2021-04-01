let db = require('../db/db.json');
const {v4:uuidv4} = require("uuid");
const fs = require('fs');

module.exports = (app) => {

app.get("/api/notes", (req, res) => {
           
    res.json(db);
         
});



app.post('/api/notes', (req, res) => {

    const newNote = req.body;
 
    newNote.id = uuidv4();

    db.push(newNote)
    
    fs.writeFileSync('./db/db.json', JSON.stringify(db));

    res.json(db);
    
})
app.delete("/api/notes/:id", (req, res) => {

    const deleteNotes = req.params.id;
  
    db = db.filter(placeHolder => placeHolder.id !== deleteNotes);

    fs.writeFileSync('./db/db.json', JSON.stringify(db));

    res.json(db);
})
 }