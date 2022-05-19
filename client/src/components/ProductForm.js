import React, {userState, useState} from 'react';

import axios from 'axios';

export default props => {
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();

    const onSubmitHandler = e =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description
        })
            .then(res => console.log("Response: ", res))
            .catch(err => console.log("Error: ", err))
    }

    return(
        <form onSubmit={onSubmitHandler}>
            <h1> Product Manager </h1>
            <p>
                <label> Title </label>
                <input type="text" onChange={e=> setTitle(e.target.value)}></input>
            </p>
            <p>
                <label> Price </label>
                <input type="number" onChange={e=> setPrice(e.target.value)}></input>
            </p>
            <p>
                <label> Description </label>
                <input type="text" onChange={e=> setDescription(e.target.value)}></input>
            </p>
            <button style={{width:100}}>Create</button>
        </form>
    )

}