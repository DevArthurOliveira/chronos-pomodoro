import type { TaskModel } from "../../models/TaskModels";
import type { TaskStateModel } from "../../models/TaskStateModels";

export enum TaskActionTypes {
  START_TASK = "START_TASK",
  INTERRUPT_TASK = "INTERRUPT_TASK",
  RESET_STATE = "RESET_STATE",
  COUNT_DOWN = "COUNT_DOWN",
  COMPLETE_TASK = "COMPLETE_TASK",
  CHANGE_SETTINGS = "CHANGE_SETTINGS",
}

export type TaskActionWithPayload =
  | {
      type: TaskActionTypes.START_TASK;
      payload: TaskModel;
    }
  | {
      type: TaskActionTypes.COUNT_DOWN;
      payload: { secondsRemaining: number };
    }
  | {
      type: TaskActionTypes.CHANGE_SETTINGS;
      payload: TaskStateModel["config"];
    };

export type TaskActionWithoutPayload =
  | {
      type: TaskActionTypes.INTERRUPT_TASK;
    }
  | {
      type: TaskActionTypes.RESET_STATE;
    }
  | {
      type: TaskActionTypes.COMPLETE_TASK;
    };

export type TaskActionModel = TaskActionWithPayload | TaskActionWithoutPayload;
