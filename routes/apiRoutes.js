let db = require('../Develop/db/db.json');
const fs = require('fs');

module.exports = (app) => {

    app.get("/api/notes", (req, res) => {
        console.table(db)
       fs.readFileSync(db, "utf-8"), (err) => {
            if (err) throw err;
           
             res.JSON(db)
         
        }

    });


app.post('/api/notes', (req, res) => {

    let newNote = req.body;
     let i = 1
 
    newNote.id = i

  
    let db = (fs.readFileSync(db, "utf8"));


    db.push(newNote)
    
 
    fs.writeFileSync(db, JSON.stringify(db));


    res.json(NewNotes);
    i++
})
app.delete("/api/notes:id", (req, res) => {

  
    let deleteNotes = req.params.id;

   
    let notes = (fs.readFileSync(db, "utf8"));

  
    const newNotes = notes.filter(placeHolder => placeHolder.id !== deleteNotes)


    fs.writeFileSync(db, JSON.stringify(newNotes))

    res.json(newNotes)
})
 }