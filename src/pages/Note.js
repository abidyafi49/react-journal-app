import React from 'react';
import { nanoid } from 'nanoid';
import {MdDelete} from 'react-icons/md';
import '../assets/css/note.css'
import AddNote from '../components/AddNote';


function NoteList(){
  const [notes, setNotes] = React.useState([]);

  function addNote (title, text){
    const date = new Date();
    const newNote = {
      id: nanoid(16),
      title: title,
      text: text,
      date: date.toLocaleDateString()
    }

    const newNotes = [
      ...notes,
      newNote
    ]

    setNotes(newNotes)
  }

  function deleteNote(id){
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }


  return (
    <div className='notes-list'>
      {notes.map(({id,title,text,date})=>{
        return (
          <div className="note" key={id}>
            <div className='note-header'>
              <h2>{title}</h2>
              <span>{text}</span>
            </div>
            <div className="note-footer">
                <small>{date}</small>
                <div className='note-footer-icon'>
                  <MdDelete className='delete-icon' size='1.2rem' onClick={()=>deleteNote(id)}/>
                </div>
            </div>
        </div>
        )
      })}
      
      <AddNote handleAddNote={addNote}/>
    </div>

  )
}

export default NoteList;