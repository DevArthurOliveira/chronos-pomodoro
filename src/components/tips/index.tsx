import { useTaskContext } from "../../contexts/TaskContext/useTaskConext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";

export function Tips() {
  const { state } = useTaskContext();
  const nextCycle = getNextCycle(state.currentyCycle);
  const nextCycleType = getNextCycleType(nextCycle);
  // tips
  const tipsForWhenActiveTask = {
    workTime: (
      <span>
        Foque por <b>{state.config.workTime} min</b>
      </span>
    ),
    shortBreakTime: (
      <span>
        Descanse por <b>{state.config.shortBreakTime} min</b>
      </span>
    ),
    longBreakTime: <span>Descanso longo</span>,
  };

  const tipsForNoActiveTask = {
    workTime: (
      <span>
        Próximo ciclo é de <b>{state.config.workTime} min</b>
      </span>
    ),
    shortBreakTime: (
      <span>
        Próximo ciclo é de <b>{state.config.shortBreakTime} min</b>
      </span>
    ),
    longBreakTime: (
      <span>
        Próximo ciclo é de <b>{state.config.longBreakTime} min</b>
      </span>
    ),
  };
  return (
    <>
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
    </>
  );
}
