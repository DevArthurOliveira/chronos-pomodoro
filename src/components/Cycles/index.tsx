import { useTaskContext } from "../../contexts/TaskContext/useTaskConext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import styles from "./styles.module.css";

export function Cycles() {
  const { state } = useTaskContext();

  const cycleStep = Array.from({ length: state.currentyCycle });

  const descriptionCycleType = {
    workTime: "foco",
    shortBreakTime: " descanso curto",
    longBreakTime: "descanso longo",
  };

  return (
    <div className={styles.cycles}>
      <span>Ciclos:</span>

      <div className={styles.cycleDots}>
        {cycleStep.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getNextCycleType(nextCycle);
          return (
            <span
              key={nextCycle}
              className={`${styles.cycleDot} ${styles[nextCycleType]}`}
              aria-label={`Indicador de ciclo de ${descriptionCycleType[nextCycleType]}`}
              title={`Indicador de ciclo de ${descriptionCycleType[nextCycleType]}`}
            ></span>
          );
        })}
      </div>
    </div>
  );
}
