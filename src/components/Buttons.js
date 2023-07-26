import satData from "./satData";
import App from "../App";

const Buttons = (props) => {
  return (
    <div>
      {props.displaySats.map((sat, id) => {
  return (
    <button onClick={() => props.filterByType(sat)} key={id}>
      {sat} Orbit
    </button>
  );
})}
      <button>All Orbits</button>
      </div>
  );
};
export default Buttons;