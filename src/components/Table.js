import Buttons from "./Buttons";
import satData from "./satData";

const Table = ({ sat }) => {
  return (
    <table>
    <thead>
     <tr>
       <th>Name</th>
       <th>Type of Satelite</th>
       <th>Launch Date</th>
       <th>Status</th>
     </tr>
     </thead>
     <tbody> {sat.map((id, data) => 
     <tr> key = {id}
       <td>{data.name}</td>
       <td>{data.type}</td>
       <td>{data.launchDate}</td>
       <td>{data.operational ? active : inactive}</td>
     </tr>
     )};
     </tbody>
      </table>
  );
};

export default Table;