import React,{useState} from 'react';
import Modal from 'react-modal';

function AddMovie({handleAdd}) {

const [name, setName] = useState('')
const [imageURL, setImageURL] = useState('')
const [rate, setRate] = useState(1)

const [modalIsOpen,setIsOpen] = useState(false);

function openModal() {setIsOpen(true);}

function closeModal(){setIsOpen(false);}

const Add = () => {
    const newMovie = {id: Math.random() , title: name , postURL : imageURL, rate: rate}
    handleAdd(newMovie)
    setName('')
    setImageURL('')
    setRate(1)
    closeModal()
}

    return (
<div>   
<button className="Add" onClick={openModal}>Add</button>  
    <Modal isOpen={modalIsOpen} className="Modal">
    <button className="CloseModal" onClick={closeModal}>close</button>
        <form className="FormModal">
            <label className="LabelTitle">title</label>
            <input className="InputTitle" type='text' placeholder='add movie title' value={name} onChange={e => setName(e.target.value)} required/> <br></br>
            <label className="LabelImage">postURL</label>
            <input className="InputImage" type="text" placeholder="add image URL" onChange={e => setImageURL(e.target.value)} required/> <br></br>
            <label className="LabelRate">rate</label>
            <input className="InputRate" type='text' placeholder='add movie rate' value={rate} onChange={e => setRate(e.target.value)} required/> <br></br>
            <button className="Submit" type='submit' onClick={Add}>submit</button>
        </form> 
    </Modal>   
</div>
    )
}

export default AddMovie


