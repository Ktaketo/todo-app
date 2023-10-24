import React, { useState } from "react";
import { Checkbox, Paper } from "@mui/material";
import { FormGroup } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Box } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import { TodoCard } from "./TodoCard";

// import './Todo.css';

function TodoForm(props = { Done: false, Content: "" }) {
  const [done, setDone] = useState(!!props.Done);
  const [content, setContent] = useState(props.Content || "");

  const handleSave = () => {
    const data = {
      ...props, // 受け取ったpropsを展開
      Done: done,
      Content: content,
    };

    props.onSave(data);
    setDone(false);
    setContent("");
  };

  return (
    <TodoCard>
      <Stack direction="row" spacing={2}>
        <FormControlLabel control={<Checkbox />} label="finished" />
        <Box
          component="form"
          fullWidth
          sx={{ m: 1 }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="filled-basic"
            label="todo"
            variant="filled"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Box>
        <Button variant="outlined" onClick={handleSave}>
          Save
        </Button>
        {/* IDが存在する場合はキャンセルボタンを表示 */}
        {props.ID && (
          <Button variant="outlined" onClick={props.onCancel}>
            Cancel
          </Button>
        )}
      </Stack>
    </TodoCard>
  );
}

export default TodoForm;
