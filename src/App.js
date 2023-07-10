import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

import './App.css';
import Header from './MyComponents/Header';
import Todos  from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import AddTodo from './MyComponents/AddTodo';
import About from "./MyComponents/About";

function App() {
  let initTodo;
  if(localStorage.getItem("todos") === null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am on Delete of todo", todo)
    // it does not work on Todos
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);
    // debugger
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))

    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const addTodo =(title, desc) =>{
    console.log("I am adding This Todo", title, desc)
    let sno;
    if(todos.length == 0){
      sno = 0;
    }
    else{
      sno = todos[todos.length-1].sno + 1
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);


    
  }
  
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)); 
  }, [todos]);
  return (
    <>
    <Router>
      <Header title="MY Todos List" searchBar={true}/>
      <Routes>
        {/* <Route exact path="/" render={()=>{
          return(
          <>
            <AddTodo addTodo={addTodo}/>
            <Todos todos={todos} onDelete={onDelete}/>
          </>)
          }}>
        </Route> */}
        <Route exact path="/" element={[<AddTodo addTodo={addTodo}/>,<Todos todos={todos} onDelete={onDelete}/>]}></Route>
        {/* <Route exact path="/" element={<Todos todos={todos} onDelete={onDelete}/>}></Route> */}
        <Route exact path="/about" element={<About/>}></Route>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
