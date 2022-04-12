import React, {useState} from 'react';
import Form from "./components/Form";
import Todolist from "./components/Todolist";



export default function App() {

    const [newItem, setNewItem] = useState("");
    const [items, setItems] = useState([]);

    // Helper functions
    function deleteItem(id) {
      const newArray = items.filter( item => item.id !== id)
      setItems(newArray);
    }
    function addItem() {
      
      if (!newItem) {
        alert("enter a new item");
        return;
      }
    
    

      const item = {
        id: Math.floor(Math.random() * 1000),
        value: newItem,
      };

      setItems(oldlist => [...oldlist, item]);

      setNewItem("");

      console.log(items);

    }

    return (
        <div className='Application'>
              
              <h1>My Todolist</h1>
              <p>supsuops</p>

              <input 
                type="text" 
                placeholder='Add a Todo'
                value={newItem}
                onChange={e => setNewItem(e.target.value)}
              />
               <button onClick={addItem}>
                 Add
               </button>
            <ul>
              {items.map(item => {
                return (
                  <li key={item.id}>
                    {item.value}
                    <button onClick={() => deleteItem(item.id)}>Delete</button>
                  </li>

                )
              })}
            </ul>
        </div>
    )
}

