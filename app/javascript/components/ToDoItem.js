import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";

const ToDoItem = ({ item }) => {
  function handleToggle() {
    Inertia.patch("/to_dos/" + item.id, {
      to_do: { completed: !item.completed },
    });
  }

  return (
    <ListItem button onClick={handleToggle}>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={item.completed}
          tabIndex={-1}
          disableRipple
        />
      </ListItemIcon>
      <ListItemText primary={item.description} />
    </ListItem>
  );
};

export default ToDoItem;
