import React, { useState } from "react";
import ToDoList from "./ToDoList";
import { Inertia } from "@inertiajs/inertia";
import axios from "axios";
import { Container } from "@material-ui/core";
import { Button, ButtonGroup } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Paper, Box } from "@material-ui/core";

const ToDoApp = ({ toDoItems, errors = {} }) => {
  const [newItem, setNewItem] = useState("");

  function handleInput(event) {
    setNewItem(event.target.value);
  }

  function addItem(event) {
    event.preventDefault();
    Inertia.post("/to_dos", {
      to_do: { description: newItem, completed: false },
    });

    setNewItem("");
  }

  async function clearCompleted(event) {
    event.preventDefault();
    const completedItems = toDoItems.filter((item) => item.completed);

    for (const item of completedItems) {
      await axios.delete("/to_dos/" + item.id);
    }
    Inertia.reload();
  }

  return (
    <Container maxWidth="sm">
      <h1 style={{ marginBottom: "2rem" }}>Getting Things Done</h1>
      <form onSubmit={addItem}>
        <TextField
          error={errors === true}
          helperText={errors === true ? "Cannot be blank" : ""}
          label="New To Do Item"
          variant="outlined"
          fullWidth
          onChange={handleInput}
          value={newItem}
        />
        <Box display="flex" flexDirection="row-reverse">
          <ButtonGroup variant="contained" style={{ marginTop: "1rem" }}>
            <Button color="primary" onClick={addItem}>
              Add
            </Button>
            <Button color="secondary" onClick={clearCompleted}>
              Clear Completed
            </Button>
          </ButtonGroup>
        </Box>
      </form>

      {toDoItems.length > 0 && (
        <Paper elevation={2}>
          <ToDoList toDoItems={toDoItems} />
        </Paper>
      )}
    </Container>
  );
};

export default ToDoApp;
