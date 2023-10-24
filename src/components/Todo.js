import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { Checkbox, Stack } from "@mui/material";
import { FormGroup } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Button } from "@mui/material";
import { ButtonGroup, Paper } from "@mui/material";
import { TodoCard } from "./TodoCard";

// import './Todo.css';

function Todo(props) {
  const [edit, setEdit] = useState(false);

  // TodoFormに引き渡す更新メソッド
  const handleUpdate = (data) => {
    props.onSave(data);
    setEdit(false); // 編集モード終了
  };

  if (edit) {
    return (
      <TodoForm
        {...props}
        onSave={handleUpdate}
        onCancel={() => setEdit(false)}
      />
    );
  }

  return (
    <TodoCard>
      <Stack direction="row" spacing={2}>
        <FormControlLabel control={<Checkbox />} label="finished" />

        <div className="body">
          <div className="header">
            <span className="date">CreatedAt: {props.CreatedAt}</span>
            <span className="date">UpdatedAt: {props.UpdatedAt}</span>
          </div>
          <div className="content">{props.Content}</div>
        </div>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button onClick={() => setEdit(true)}>編集</Button>
          <Button onClick={() => props.onDelete(props.ID)}>Delete</Button>
        </ButtonGroup>
      </Stack>
    </TodoCard>
  );
}

export default Todo;
