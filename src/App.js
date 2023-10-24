import React, { useState } from "react";
// import './App.css';
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import { Stack } from "@mui/material";

function App() {
  const [todos, setTodos] = useState([
    {
      ID: 1,
      Content: "💩",
      Done: true,
      CreatedAt: new Date().toISOString(),
      UpdatedAt: new Date().toISOString(),
    },
  ]);

  const handleCreate = (data) => {
    // IDを採番
    data.ID = crypto.randomUUID();
    // 現在日時を取得
    const now = new Date().toISOString();
    data.CreatedAt = now;
    data.UpdatedAt = now;
    // 末尾に追加
    setTodos([...todos, data]);
  };

  const handleDelete = (id) => {
    // IDが一致する項目のindexを取得
    const index = todos.findIndex((item) => item.ID === id);
    if (index >= 0) {
      // 新しい配列を生成
      const newList = [...todos];
      // 配列から該当要素を削除
      newList.splice(index, 1);
      // stateに反映
      setTodos(newList);
    }
  };

  const handleUpdate = (data) => {
    const now = new Date().toISOString();
    data.UpdatedAt = now;

    setTodos(
      todos.map((item) => {
        // IDが一致する要素を差し替える
        if (item.ID === data.ID) {
          return data;
        }
        return item;
      })
    );
  };

  return (
    <Stack spacing={2}>
      <TodoForm onSave={handleCreate} />

      {todos.map((item) => (
        <Todo
          key={item.ID}
          {...item}
          onSave={handleUpdate}
          onDelete={handleDelete}
        />
      ))}
    </Stack>
  );
}

export default App;
