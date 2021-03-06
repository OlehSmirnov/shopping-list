import React, {useState, useEffect} from 'react'
import List from './List'
import Alert from './Alert'

function App() {
    const [text, setText] = useState("")
    const [items, setItems] = useState(() => (JSON.parse(localStorage.getItem("items")) || []))
    const [message, setMessage] = useState("")
    const [warning, setWarning] = useState(false)
    const [editMode, setEditMode] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)

    function addItems() {
        const trimmedText = text.trim()
        setText("")
        if (trimmedText.length > 0) {
            setItems(prevItems => [...prevItems, trimmedText])
            resetForm("Item added!")
        } else {
            setWarning(true)
            setMessage("Enter some item!")
        }
    }



    function updateItem() {
        setItems(prevItems => prevItems.map((prevItem, prevIndex) => {
            return prevIndex === currentIndex ? text : prevItem
        }))
        resetForm("Item updated!")
    }

    function deleteItem(index) {
        setItems(prevItems => prevItems.filter((prevItem, prevIndex) => prevIndex !== index))
        setWarning(false)
        setMessage("Item deleted!")
    }

    function clearItems() {
        if (items.length > 0) {
            setItems([])
            resetForm("List is cleared!")
        }
    }

    function enterEditMode(text, index) {
        setText(text)
        setCurrentIndex(index)
        setEditMode(true)
    }

    function resetForm(message) {
        setWarning(false)
        setMessage(message)
        setText("")
        setEditMode(false)
    }

    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(items))
    }, [items])

    return <section className="section-center">
        {message && <Alert setMessage={setMessage} message={message} warning={warning} items={items} />}
        <form className="grocery-form" onSubmit={event => event.preventDefault()}>
            <h3>Shopping list</h3>
            <div className="form-control">
                <input type="text" className="grocery" value={text}
                       onChange={(event) => setText(event.target.value)}/>
                {editMode
                    ?
                    <button onClick={updateItem} className="submit-btn">Update</button>
                    :
                    <button onClick={addItems} className="submit-btn">Add</button>}
            </div>
        </form>
        <div className="grocery-container">
            <List items={items}
                  deleteItem={deleteItem}
                  enterEditMode={enterEditMode}/>
            <button className="clear-btn" onClick={clearItems}>clear items</button>
        </div>
    </section>
}

export default App
