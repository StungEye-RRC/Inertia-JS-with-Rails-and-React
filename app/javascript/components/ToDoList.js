import React from "react";
import ToDoItem from "./ToDoItem";
import { List } from "@material-ui/core";

const ToDoList = ({ toDoItems }) => {
  return (
    <List style={{ marginTop: "1rem" }}>
      {toDoItems.map((item) => (
        <ToDoItem item={item} key={item.id} />
      ))}
    </List>
  );
};

export default ToDoList;
