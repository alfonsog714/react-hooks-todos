import React from "react";
import useInputState from "./hooks/useInputState.js";

// Material-UI stuff
import TextField from "@material-ui/core/TextField";

function EditTodoFrom({ task, id, editTodo, toggleIsEditing }) {
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggleIsEditing();
      }}
      style={{ marginLeft: "1rem", width: "100%" }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}

export default EditTodoFrom;
