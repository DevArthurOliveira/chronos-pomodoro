import { Heading } from "./components/Heading";

import "./styles/theme.css";
import "./styles/global.css";
import { TimerIcon } from "lucide-react";

export function App() {
  return (
    <>
      <Heading>
        Ola mundo 2
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <h1>Olá mundo!</h1>
    </>
  );
}
