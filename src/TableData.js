import { HtmlTOExcel } from "./ExcelConvertor";

function DataTable() {
  return (
    <>
      <button style={{margin: "10px"}} onClick={() => HtmlTOExcel()}>download EXCEL</button>
      <table  style={{margin: "10px"}} id="tableToExcel" border="2">
        <thead>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <p>Deven Rathore</p>
            </td>
            <td>21</td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <p>Alex cook</p>
            </td>
            <td>24</td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <p>Alina sinha</p>
            </td>
            <td>18</td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              <p>Andre Gabriel</p>
            </td>
            <td>25</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default DataTable;