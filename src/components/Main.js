import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import ListItem from "./ListItem";
import { BsPlusCircle } from "react-icons/bs";
import data from '../data.json';

const Main = () => {
  const [todoList , setTodoList] = useState(data);
  const [userInput , setUserInput] = useState('');
  
  const handleToggle = (id) => {
    let toggled = todoList.map((todo) => {
      return (
        todo.id === id ? {...todo , complete: !todo.complete} : {...todo}
      );
    })
    setTodoList(toggled);
  }
  
  const handleDelete = (id) => {
    let filteredList = todoList.filter(todo => todo.id !== id)
    setTodoList(filteredList);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput('')
  }

  const handleChange = (e) => {
    let changedValue = e.target.value;
    setUserInput(changedValue);
    console.log(userInput);
  }

  const addTask = () => {
      let newList = [...todoList]
      newList = [...newList , {id: todoList.length + 1 , task: userInput , complete: false}]
      localStorage.setItem('localStorage', newList);
      setTodoList(newList);
  }

  return (
    
    <>
      <Container className="container">
        <Row>
          <Col sm={{ size: 8, offset: 4 }}>
            <h1 className="list-title">Todo List</h1>
          </Col>
        </Row>
        <Row>
          <ListItem
          handleDelete={handleDelete}
          todoList={todoList}
          handleToggle={handleToggle}
          />
        </Row>
        <Row>
          <Col sm={12}>
            <form className="add-form">
              <i className="plus-icon">
                <BsPlusCircle onClick={(e) => handleSubmit(e)}/>
              </i>
              <input
                className="add-input"
                placeholder="insert a new Task"
                type="text"
                value={userInput}
                onChange={handleChange}
                onSubmit={(e) => handleSubmit(e)}
              ></input>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Main;
