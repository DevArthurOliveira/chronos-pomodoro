import { useContext } from "react";
import { TaskContext } from "./TasktContext";

export function useTaskContext() {
  return useContext(TaskContext);
}
