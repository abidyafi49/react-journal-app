import React from 'react';



function AddNote({handleAddNote}){
    const [inputTitle, setInputTitle] = React.useState('');
    const [inputText, setInputText] = React.useState('');
    const characterLimit = {
      title: 50,
      text: 200,
    }

    function handleChangeInput(event){
      if(characterLimit.title - event.target.value.length >= 0){
        setInputTitle(event.target.value);
      }
    }

    function handleChangeText(event){
      if(characterLimit.text - event.target.value.length >= 0){
        setInputText(event.target.value);
      }
    }

    function handleSaveClick(){
        if(inputText.trim().length > 0 && inputTitle.trim().length > 0){
          handleAddNote(inputTitle, inputText);
          setInputText('');
          setInputTitle('');
        }
    }

    return (
      <div className='note new'>
        <input type='text' placeholder='title...' onChange={handleChangeInput} value={inputTitle}/>
        <textarea rows="8" cols="10" placeholder='Type note here...' onChange={handleChangeText} value={inputText}></textarea>
        <div className='note-footer'>
          <small>{characterLimit.title - inputTitle.length} Character</small>
          <small>{characterLimit.text - inputText.length} Character</small>
          <button className='save' onClick={handleSaveClick}>Save</button>
        </div>
      </div>
    )
}

export default AddNote;