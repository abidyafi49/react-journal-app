import React from "react";
import {MdDelete} from 'react-icons/md'
import { nanoid } from "nanoid";
import AddJournal from "../components/AddJournal";
import '../assets/css/journal.css'
function Journal(){
    const [journals, setJournals] = React.useState([
        {
            id: nanoid(),
            text: 'Contoh Journal',
            value: 'critical',
            date: new Date().toLocaleDateString()
        }
    ]);

    function addJournal(text, value){
        const date = new Date();
        const newJournal = {
            id: nanoid(),
            text: text,
            value: value,
            date: date.toLocaleDateString()
        }

        const newJournals = [...journals, newJournal]
        setJournals(newJournals);
    }

    function deleteJournal(id){
        const filterJournals = journals.filter((journal) => journal.id!==id);
        setJournals(filterJournals);
    }

    return (
        <div className="journal-container">
            {journals.map(({id,text,value,date})=>{
                return (
                  <div className={value} key={id}>
                    <div className='journal-header'>
                      <span>{text}</span>
                    </div>
                    <div className="journal-footer">
                        <small>{date}</small>
                        <div className='journal-footer-icon'>
                          <MdDelete className='journal-delete-icon' size='1.2rem' onClick={()=>deleteJournal(id)}/>
                        </div>
                    </div>
                </div>
                )
            })}
            <AddJournal handleAddJournal={addJournal}/>
        </div>
    )
}


export default Journal;