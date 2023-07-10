import React from 'react';

import { useState } from 'react';


export default function AddTodo(props) {
    let borderstyle={
        border: "2px solid black",
    }
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title ||!desc){
            alert("Title Or Description Cannot blank");
        }
        else{
            props.addTodo(title, desc)
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className='container my-3 p-4'  style={borderstyle}>
            <h3 className='text-center'>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Todo Title</label>
                    <input type="text" value = {title} className="form-control" onChange={(e) => {setTitle(e.target.value)}}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Todo Description</label>
                    <input type="text" value = {desc} className="form-control" onChange={(e) => {setDesc(e.target.value)}}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
