import React from 'react'
import {FaEdit, FaTrash} from 'react-icons/fa'

const List = ({items, setItems, setMessage, setWarning, enterEditMode}) => {

    function deleteItem(index) {
        setItems(prevItems => prevItems.filter((prevItem, prevIndex) => prevIndex !== index))
        setWarning(false)
        setMessage("Item deleted!")
    }

    const list = items.map((item, index) => {
        return <article className="grocery-item" key={index}>
            <p className="title">{item}</p>
            <div className="btn-container">
                <button type="button" className="edit-btn">
                    <FaEdit onClick={() => enterEditMode(item, index)}/>
                </button>
                <button type="button" className="delete-btn">
                    <FaTrash onClick={() => deleteItem(index)}/>
                </button>
            </div>
        </article>
    })
    return <div className="grocery-list">
        {list}
    </div>
}

export default List
