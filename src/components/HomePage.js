
import React, { useState, useEffect } from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";



function HomePage() {
    const [notes, setNotes] = useState(() => {
        const saved = localStorage.getItem("notes");
        const initialValue = JSON.parse(saved);
    
        return initialValue || [];
      });
    
      useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
      }, [notes]);
    
      function addNote(newNote) {
        setNotes((prevNotes) => {
          return [...prevNotes, newNote];
        });
      }
    
      function deleteNote(id) {
        setNotes((prevNotes) => {
          return prevNotes.filter((noteItem) => {
            return noteItem.id !== id;
          });
        });
      }
  return (
    <div>
      
              <CreateArea notes={notes} setNotes={setNotes} onAdd={addNote} />

              {notes.map((noteItem) => {
                return (
                  <Note
                    key={noteItem.id}
                        note={noteItem}
                    onDelete={deleteNote}
                  />
                );
              })}
            
    </div>
  )
}

export default HomePage
