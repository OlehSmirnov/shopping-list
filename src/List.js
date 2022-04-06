import React from 'react'
import {FaEdit, FaTrash} from 'react-icons/fa'

const List = ({items, deleteItem, enterEditMode}) => {

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
