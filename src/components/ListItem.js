import React from "react";
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleLine,
} from "react-icons/ri";
import { Col } from "reactstrap";
import { IoMdRemoveCircleOutline } from "react-icons/io";

const ListItem = ({ todoList , setTodoList ,handleToggle , handleDelete}) => {

  return (
    <Col sm={12}>
      {todoList.map((todo) => {
        return (
          <div className="list-item" key={todo.id }>
            <p className={todo.complete ? "list-text decorated" : "list-text"}>
              {" "}
              <i className="check-icon" onClick={() => handleToggle(todo.id)}>
                {todo.complete ? (
                  <RiCheckboxCircleLine />
                ) : (
                  <RiCheckboxBlankCircleLine />
                )}
              </i>
              {todo.task}
              <i className="remove-icon" color="danger" onClick={() => handleDelete(todo.id)}>
                <IoMdRemoveCircleOutline />
              </i>
            </p>
          </div>
        );
      })}
    </Col>
  );
};

export default ListItem;
