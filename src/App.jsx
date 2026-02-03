import ControlUnit from "./components/ControlUnit";
import Datapath from "./components/Datapath";
import ControlSignals from "./components/ControlSignals";

export default function App() {
  return (
    <div className="container">
      <h1>Hardwired Control Unit Simulator</h1>
      <ControlUnit />
      <Datapath />
      <ControlSignals />
    </div>
  );
}
