import { Paper } from "@mui/material";

export function TodoCard(props) {
  return <Paper sx={{ p: 2 }}>{props.children}</Paper>;
}
