import React, { useState } from "react";
import axios from "axios";
import './AddName.css';

function AddName() {

    const [name, setName] = useState('')
    
    const handleChange = (e) => {
        e.preventDefault();
        let val = e.target.value;
        setName(val);
    };

    

    let handleSubmit = (e) => {
        e.preventDefault();
        let newname = name;

        axios.post('http://localhost:3001/api/names/add', { newname })
        

        alert('User Created')
    };

   

    return (
        <div className="Page">
            <form>
                <div>
                    <h4>Add Name</h4>
                </div>
                <label> Name:</label><br/>
                <input type='text' name='name' onChange={handleChange}/>
              
                <button className ='btn' value='Add Name' onClick={handleSubmit}>Add Name</button>
            </form>
        </div>
    )
};

export default AddName;