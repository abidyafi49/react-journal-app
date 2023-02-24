import React from "react";
import { MdAdd, MdClose } from "react-icons/md";
import '../assets/css/addJournal.css';

function AddJournal({handleAddJournal}){
    const [modal,setModal] = React.useState(false);
    const [inputText, setInputText] = React.useState('');
    const [inputRadio, setInputRadio] = React.useState('');
    const characterLimit = 400;

    function toggle(){
        setModal(!modal);
    }
    function handleChangeText(event){
        if(characterLimit - event.target.value.length >= 0){
          setInputText(event.target.value);
        }
    }

    function handleSaveClick(){
        if(inputText.trim().length > 0){
          handleAddJournal(inputText, inputRadio);
          setInputText('');
          setInputRadio('');
          toggle();
        }
    }

    if(modal){
        document.body.classList.add('active-modal');
    }else{
        document.body.classList.remove('active-modal')
    }

    return (
        <div>
            {modal && (
                <div className="modal">
                    <div className="overlay" onClick={toggle}></div>
                    <div className="modal-content">
                        <div className='journal new'>
                            <textarea rows="12" cols="10" placeholder='Type journal here...' onChange={handleChangeText} value={inputText}></textarea>
                            <div className="journal-color">
                                <label className="label label-critical">
                                    <input type="radio" name="journal-background" value='critical' onClick={() => setInputRadio('critical')}/>
                                    <p>Critical</p>
                                </label>
                                <label className="label label-normal">
                                    <input type="radio" name="journal-background" value='normal' onClick={() => setInputRadio('normal')}/>
                                    <p>Normal</p>
                                </label>
                                <label className="label label-info">
                                    <input type="radio" name="journal-background" value='info' onClick={() => setInputRadio('info')}/>
                                    <p>Info</p>
                                </label>
                            </div>
                            <div className='journal-footer'>
                              <small>{characterLimit - inputText.length} Character</small>
                              <button className='save' onClick={handleSaveClick}>Save</button>
                            </div>
                        </div>
                        <button className="close-modal" onClick={toggle}>
                            <MdClose size='1.3em'/>
                        </button>
                    </div>
                </div>
            )}
            <button className="add-button" onClick={toggle}>
                <MdAdd size='2.5em'/>
            </button>
        </div>
        
    )
}


export default AddJournal